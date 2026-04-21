import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, typography, spacing, radius } from '@/lib/tokens';
import { useUserStore } from '@/lib/stores/user';
import { useCycleStore } from '@/lib/stores/cycle';
import { getCurrentPhase } from '@/lib/cycle-utils';
import { getPillarData } from '@/lib/insights';
import ProtocolCard from '@/components/ProtocolCard';

const SUPPLEMENTS_PCOS = [
  { name: 'myo-inositol + d-chiro-inositol (40:1)', dose: '2g twice daily', why: 'patches insulin signaling pathway defect in PCOS. equivalent to metformin in RCTs.' },
  { name: 'magnesium glycinate', dose: '300-400mg before bed', why: 'addresses near-universal deficiency in PCOS. improves insulin, sleep, testosterone.' },
  { name: 'vitamin D3 + K2', dose: '3000-5000 IU/day', why: 'deficient in 67-85% of PCOS women. improves ovulation, insulin sensitivity, inflammation.' },
  { name: 'omega-3 (EPA/DHA)', dose: '1-2g/day', why: 'anti-inflammatory. reduces androgens and improves lipid profile in PCOS.' },
];

const SUPPLEMENTS_LUTEAL = [
  { name: 'vitamin B6', dose: '50mg/day', why: 'supports serotonin production which drops in luteal phase. helps with PMS mood symptoms.' },
  { name: 'spearmint tea', dose: '2 cups/day', why: 'anti-androgenic via 5-alpha reductase inhibition. reduces hirsutism and acne.' },
];

const BASELINE_ALWAYS = [
  'maintain anti-inflammatory diet foundation',
  'prioritize blood sugar stability (protein + fat + fiber at every meal)',
  'daily movement minimum: 30-minute walk',
  'sleep target: 7.5-8.5 hours',
  'stress management: non-negotiable, not optional',
];

const SECTION_ICONS: Record<string, string> = {
  nutrition: '🍃', movement: '🌊', rest: '🌙', mind: '✨',
};

export default function ProtocolScreen() {
  const { conditions } = useUserStore();
  const { lastPeriodDate, cycleLength } = useCycleStore();

  const phase = lastPeriodDate ? getCurrentPhase(lastPeriodDate, cycleLength) : null;
  const hasPcos = conditions.includes('pcos');
  const pillarData = phase ? getPillarData(phase.phase, hasPcos) : null;

  if (!phase) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.empty}>
          <Text style={styles.emptyText}>complete onboarding to see your protocol.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>your protocol</Text>
        <Text style={styles.subtitle}>
          updated for: {phase.phase} phase — day {phase.day}
        </Text>
        {hasPcos && <Text style={styles.badge}>personalized for PCOS</Text>}

        {/* This Phase — per pillar */}
        <Text style={styles.sectionTitle}>this phase</Text>

        {(['nutrition', 'movement', 'rest', 'mind'] as const).map((pillar) => {
          const data = pillarData?.[pillar];
          if (!data) return null;
          return (
            <View key={pillar}>
              <Text style={styles.pillarHeader}>
                {SECTION_ICONS[pillar]} {pillar}
              </Text>
              {data.recommendations.map((r, i) => (
                <ProtocolCard key={i} text={r.text} why={r.why} />
              ))}
            </View>
          );
        })}

        {/* Supplements */}
        {hasPcos && (
          <>
            <Text style={styles.sectionTitle}>supplements</Text>
            {SUPPLEMENTS_PCOS.map((s, i) => (
              <ProtocolCard key={`base-${i}`} text={`${s.name} — ${s.dose}`} why={s.why} />
            ))}
            {phase.phase === 'luteal' && SUPPLEMENTS_LUTEAL.map((s, i) => (
              <ProtocolCard key={`luteal-${i}`} text={`${s.name} — ${s.dose}`} why={s.why} />
            ))}
          </>
        )}

        {/* Always baseline */}
        <Text style={styles.sectionTitle}>your baseline</Text>
        <View style={styles.baselineCard}>
          {BASELINE_ALWAYS.map((item, i) => (
            <Text key={i} style={styles.baselineItem}>• {item}</Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingTop: spacing.md, paddingBottom: 120 },
  title: { ...typography.display, fontSize: 24 },
  subtitle: { ...typography.small, marginTop: spacing.xs, marginBottom: spacing.xs },
  badge: {
    ...typography.small,
    color: colors.card,
    backgroundColor: colors.accent,
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radius.full,
    fontSize: 11,
    overflow: 'hidden',
    marginBottom: spacing.md,
  },
  empty: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { ...typography.body, color: colors.rose },
  sectionTitle: { ...typography.header, fontSize: 18, marginTop: spacing.lg, marginBottom: spacing.sm },
  pillarHeader: { ...typography.bodyMedium, marginTop: spacing.md, marginBottom: spacing.xs },
  baselineCard: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.base,
  },
  baselineItem: { ...typography.body, fontSize: 14, color: colors.accent, marginBottom: spacing.xs },
});
