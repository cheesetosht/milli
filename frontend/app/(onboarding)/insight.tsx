import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import Animated, { FadeInUp } from "react-native-reanimated";
import { colors, typography, spacing, radius } from "@/lib/tokens";
import { useUserStore } from "@/lib/stores/user";
import { useCycleStore } from "@/lib/stores/cycle";
import { getCurrentPhase } from "@/lib/cycle-utils";
import { getAhaInsight } from "@/lib/insights";
import { useChatStore } from "@/lib/stores/chat";
import Button from "@/components/Button";
import ProgressBar from "@/components/ProgressBar";

const TOTAL_STEPS = 7;

export default function InsightScreen() {
	const router = useRouter();
	const { name, conditions, symptoms, completeOnboarding } = useUserStore();
	const { lastPeriodDate, cycleLength } = useCycleStore();

	const [ready, setReady] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setReady(true), 1500);
		return () => clearTimeout(timer);
	}, []);

	const phase = lastPeriodDate ? getCurrentPhase(lastPeriodDate, cycleLength) : null;

	const aha = phase ? getAhaInsight(phase.phase, phase.day, conditions, symptoms) : null;

	const addMessage = useChatStore((s) => s.addMessage);

	const handleExplore = () => {
		// Seed chat with welcome message
		addMessage(
			"assistant",
			`hi ${name || "there"}! i'm milli. i already know a bit about you from onboarding — ${
				phase ? `you're on day ${phase.day} of your ${phase.phase} phase` : "we'll figure out your rhythm together"
			}. tell me about your day, how you're feeling, or what you ate — i'll help connect the dots.`,
		);
		completeOnboarding();
		router.replace("/(tabs)");
	};

	if (!ready) {
		return (
			<SafeAreaView style={styles.container}>
				<ProgressBar progress={7 / TOTAL_STEPS} />
				<View style={styles.processing}>
					<Text style={styles.processingText}>processing what you've shared...</Text>
				</View>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<ProgressBar progress={1} />
			<View style={styles.content}>
				<Text style={styles.prelude}>here's something true about your body right now.</Text>

				{aha && (
					<Animated.View entering={FadeInUp.duration(600).delay(200)} style={styles.card}>
						<Text style={styles.phaseLabel}>{aha.phaseLabel}</Text>
						<Text style={styles.insightTitle}>{aha.insight.title}</Text>
						<Text style={styles.insightBody}>{aha.insight.body}</Text>
						<Text style={styles.insightWhy}>{aha.insight.why}</Text>
						{aha.tip && (
							<View style={styles.tipBox}>
								<Text style={styles.tipText}>{aha.tip}</Text>
							</View>
						)}
					</Animated.View>
				)}

				{!aha && (
					<Animated.View entering={FadeInUp.duration(600).delay(200)} style={styles.card}>
						<Text style={styles.insightTitle}>we're ready to learn your rhythm.</Text>
						<Text style={styles.insightBody}>
							as you share more about your days, milli will start connecting the dots between your cycle, symptoms, and
							daily life.
						</Text>
					</Animated.View>
				)}
			</View>

			<View style={styles.bottom}>
				<Text style={styles.hint}>this is just the beginning. milli learns more every day.</Text>
				<Button onPress={handleExplore}>explore milli</Button>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: colors.background },
	processing: { flex: 1, justifyContent: "center", alignItems: "center" },
	processingText: { ...typography.body, color: colors.accent, fontStyle: "italic" },
	content: {
		flex: 1,
		paddingHorizontal: spacing.lg,
		paddingTop: spacing.xxl,
	},
	prelude: {
		...typography.header,
		fontSize: 20,
		color: colors.accent,
		marginBottom: spacing.lg,
	},
	card: {
		backgroundColor: colors.card,
		borderRadius: radius.xl,
		padding: spacing.lg,
		borderWidth: 1,
		borderColor: colors.base,
	},
	phaseLabel: {
		...typography.small,
		textTransform: "uppercase",
		letterSpacing: 1,
		marginBottom: spacing.md,
	},
	insightTitle: {
		...typography.header,
		fontSize: 20,
		marginBottom: spacing.md,
	},
	insightBody: {
		...typography.body,
		marginBottom: spacing.md,
	},
	insightWhy: {
		...typography.small,
		color: colors.rose,
		lineHeight: 20,
	},
	tipBox: {
		marginTop: spacing.md,
		paddingTop: spacing.md,
		borderTopWidth: 1,
		borderTopColor: colors.base,
	},
	tipText: {
		...typography.body,
		fontSize: 14,
		color: colors.accent,
		fontStyle: "italic",
	},
	bottom: {
		paddingHorizontal: spacing.lg,
		paddingBottom: spacing.xl,
	},
	hint: {
		...typography.small,
		color: colors.rose,
		textAlign: "center",
		marginBottom: spacing.md,
	},
});
