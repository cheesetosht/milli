import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { colors, typography, spacing } from "@/lib/tokens";
import { useUserStore, type Goal } from "@/lib/stores/user";
import Button from "@/components/Button";
import GoalCard from "@/components/GoalCard";
import ProgressBar from "@/components/ProgressBar";

const TOTAL_STEPS = 7;

const GOALS: { key: Goal; title: string; description: string }[] = [
	{ key: "understand_body", title: "understand my body", description: "i want to know why i feel the way i do" },
	{
		key: "manage_weight",
		title: "manage my weight",
		description: "cycle-aware guidance, not generic calorie counting",
	},
	{ key: "improve_energy", title: "improve my energy", description: "i'm tired of being tired" },
	{ key: "balance_hormones", title: "balance my hormones", description: "work with my cycle, not against it" },
	{ key: "feel_less_anxious", title: "feel less anxious", description: "understand what's driving my mood" },
];

export default function GoalScreen() {
	const router = useRouter();
	const setGoal = useUserStore((s) => s.setGoal);
	const [selected, setSelected] = useState<Goal | null>(null);

	const handleContinue = () => {
		if (selected) setGoal(selected);
		router.push("/(onboarding)/measurements");
	};

	return (
		<SafeAreaView style={styles.container}>
			<ProgressBar progress={5 / TOTAL_STEPS} />
			<ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
				<Text style={styles.header}>what matters most to you right now?</Text>
				<Text style={styles.body}>we'll focus here first, but we'll always look at the full picture.</Text>

				{GOALS.map((g) => (
					<GoalCard
						key={g.key}
						title={g.title}
						description={g.description}
						selected={selected === g.key}
						onPress={() => setSelected(g.key)}
					/>
				))}
			</ScrollView>
			<View style={styles.bottom}>
				<Button onPress={handleContinue} disabled={!selected}>
					continue
				</Button>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: colors.background },
	scroll: { flex: 1 },
	content: { paddingHorizontal: spacing.lg, paddingTop: spacing.xxl },
	header: { ...typography.display, fontSize: 26 },
	body: { ...typography.body, color: colors.accent, marginTop: spacing.md, marginBottom: spacing.lg },
	bottom: { paddingHorizontal: spacing.lg, paddingBottom: spacing.xl },
});
