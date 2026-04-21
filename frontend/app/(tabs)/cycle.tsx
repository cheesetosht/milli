import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, typography, spacing, radius } from '@/lib/tokens';
import { useCycleStore } from '@/lib/stores/cycle';
import { useUserStore } from '@/lib/stores/user';
import { getCurrentPhase, getPhaseColor, PHASE_DESCRIPTIONS, type CyclePhase } from '@/lib/cycle-utils';
import { getPillarData } from '@/lib/insights';

const PHASE_ORDER: CyclePhase[] = ['menstrual', 'follicular', 'ovulation', 'luteal'];
const PHASE_EMOJI: Record<CyclePhase, string> = {
  menstrual: '🩸', follicular: '🌱', ovulation: '🌸', luteal: '🌙',
};

export default function CycleScreen() {
  const { lastPeriodDate, cycleLength } = useCycleStore();
  const { conditions } = useUserStore();

  const phase = lastPeriodDate ? getCurrentPhase(lastPeriodDate, cycleLength) : null;
  const hasPcos = conditions.includes('pcos');
  const desc = phase ? PHASE_DESCRIPTIONS[phase.phase] : null;
  const pillarData = phase ? getPillarData(phase.phase, hasPcos) : null;

  if (!phase) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.empty}>
          <Text style={styles.emptyText}>complete onboarding to see your cycle overview.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>your cycle</Text>

        {/* Phase visualization */}
        <View style={styles.phaseRow}>
          {PHASE_ORDER.map((p) => {
            const isCurrent = p === phase.phase;
            const color = getPhaseColor(p);
            return (
              <View key={p} style={[styles.phaseBlock, isCurrent && { borderColor: color, borderWidth: 2 }]}>
                <Text style={styles.phaseEmoji}>{PHASE_EMOJI[p]}</Text>
                <Text style={[styles.phaseName, isCurrent && { color, fontWeight: '700' as const }]}>{p}</Text>
                {isCurrent && <Text style={styles.phaseDay}>day {phase.day}</Text>}
              </View>
            );
          })}
        </View>

        {/* Current phase detail */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>what's happening right now</Text>
          {desc?.hormones.map((h, i) => (
            <Text key={i} style={styles.hormone}>• {h}</Text>
          ))}
          <Text style={styles.summary}>{desc?.summary}</Text>
        </View>

        {/* What this means for you */}
        <Text style={styles.sectionHeader}>what this means for you</Text>
        {(['nutrition', 'movement', 'rest', 'mind'] as const).map((pillar) => {
          const icons: Record<string, string> = { nutrition: '🍃', movement: '🌊', rest: '🌙', mind: '✨' };
          const data = pillarData?.[pillar];
          if (!data) return null;
          return (
            <View key={pillar} style={styles.pillarRow}>
              <Text style={styles.pillarIcon}>{icons[pillar]}</Text>
              <View style={styles.pillarContent}>
                <Text style={styles.pillarName}>{pillar}</Text>
                <Text style={styles.pillarStatus}>{data.status}</Text>
              </View>
            </View>
          );
        })}

        {/* Upcoming phase */}
        <View style={[styles.card, styles.previewCard]}>
          <Text style={styles.previewLabel}>
            in ~{phase.daysUntilNext} days: {phase.nextPhase} phase
          </Text>
          <Text style={styles.previewText}>{desc?.nextPreview}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingTop: spacing.md, paddingBottom: 120 },
  title: { ...typography.display, fontSize: 24, marginBottom: spacing.lg },
  empty: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { ...typography.body, color: colors.rose },

  phaseRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  phaseBlock: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.sm,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.base,
  },
  phaseEmoji: { fontSize: 20, marginBottom: 2 },
  phaseName: { ...typography.small, fontSize: 11, color: colors.primary },
  phaseDay: { ...typography.small, fontSize: 10, color: colors.accent, marginTop: 2 },

  card: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.base,
    marginBottom: spacing.md,
  },
  cardTitle: { ...typography.bodyMedium, marginBottom: spacing.sm },
  hormone: { ...typography.body, fontSize: 14, color: colors.accent, marginBottom: spacing.xs, lineHeight: 21 },
  summary: { ...typography.body, fontSize: 14, marginTop: spacing.sm, fontStyle: 'italic', color: colors.accent },

  sectionHeader: { ...typography.bodyMedium, marginTop: spacing.md, marginBottom: spacing.sm },
  pillarRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.base,
    marginBottom: spacing.sm,
  },
  pillarIcon: { fontSize: 18, marginRight: spacing.sm, marginTop: 2 },
  pillarContent: { flex: 1 },
  pillarName: { ...typography.small, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 2 },
  pillarStatus: { ...typography.body, fontSize: 14, color: colors.accent },

  previewCard: { backgroundColor: colors.base + '30' },
  previewLabel: { ...typography.bodyMedium, fontSize: 14, marginBottom: spacing.xs },
  previewText: { ...typography.body, fontSize: 14, color: colors.accent },
});
