import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, typography, spacing, radius } from '@/lib/tokens';
import { useUserStore } from '@/lib/stores/user';
import { useCycleStore } from '@/lib/stores/cycle';
import { getCurrentPhase } from '@/lib/cycle-utils';
import { getPillarData } from '@/lib/insights';
import ProtocolCard from '@/components/ProtocolCard';

const PILLAR_ICONS: Record<string, string> = {
  nutrition: '🍃',
  movement: '🌊',
  rest: '🌙',
  mind: '✨',
};

export default function PillarDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { conditions } = useUserStore();
  const { lastPeriodDate, cycleLength } = useCycleStore();

  const phase = lastPeriodDate ? getCurrentPhase(lastPeriodDate, cycleLength) : null;
  const hasPcos = conditions.includes('pcos');
  const pillarData = phase ? getPillarData(phase.phase, hasPcos) : null;
  const data = pillarData?.[id ?? ''];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Pressable onPress={() => router.back()} style={styles.back}>
          <Text style={styles.backText}>← back</Text>
        </Pressable>

        <View style={styles.titleRow}>
          <Text style={styles.icon}>{PILLAR_ICONS[id ?? ''] ?? '•'}</Text>
          <Text style={styles.title}>{id}</Text>
        </View>
        {phase && (
          <Text style={styles.phaseContext}>{phase.phase} phase — day {phase.day}</Text>
        )}

        {/* Right Now */}
        {data && (
          <>
            <Text style={styles.sectionHeader}>what your body needs right now</Text>
            {data.recommendations.map((r, i) => (
              <ProtocolCard key={i} text={r.text} why={r.why} />
            ))}

            {/* This Phase Playbook */}
            <Text style={styles.sectionHeader}>{phase?.phase} phase playbook</Text>
            <View style={styles.playbookCard}>
              {data.playbook.map((item, i) => (
                <Text key={i} style={styles.playbookItem}>• {item}</Text>
              ))}
            </View>

            {/* Your Patterns (placeholder) */}
            <Text style={styles.sectionHeader}>what i've noticed</Text>
            <View style={styles.playbookCard}>
              <Text style={styles.patternPlaceholder}>
                as you share more with me, i'll start connecting dots here. for now, these recommendations are based on your phase and condition.
              </Text>
            </View>
          </>
        )}

        {!data && (
          <Text style={styles.empty}>complete onboarding to see personalized insights.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingTop: spacing.md, paddingBottom: spacing.xxl },
  back: { marginBottom: spacing.md },
  backText: { ...typography.small, color: colors.accent },
  titleRow: { flexDirection: 'row', alignItems: 'center', marginBottom: spacing.xs },
  icon: { fontSize: 24, marginRight: spacing.sm },
  title: { ...typography.display, fontSize: 28 },
  phaseContext: { ...typography.small, marginBottom: spacing.lg },
  sectionHeader: {
    ...typography.bodyMedium,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  playbookCard: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.base,
  },
  playbookItem: {
    ...typography.body,
    fontSize: 14,
    marginBottom: spacing.xs,
    color: colors.accent,
  },
  patternPlaceholder: {
    ...typography.body,
    fontSize: 14,
    color: colors.rose,
    fontStyle: 'italic',
  },
  empty: { ...typography.body, color: colors.rose, marginTop: spacing.xl },
});
