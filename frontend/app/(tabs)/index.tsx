import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, typography, spacing } from '@/lib/tokens';
import { useUserStore } from '@/lib/stores/user';
import { useCycleStore } from '@/lib/stores/cycle';
import { getCurrentPhase } from '@/lib/cycle-utils';
import { getAhaInsight, getPillarData } from '@/lib/insights';
import PhaseIndicator from '@/components/PhaseIndicator';
import InsightCard from '@/components/InsightCard';
import PillarCard from '@/components/PillarCard';

function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return 'good morning';
  if (h < 17) return 'good afternoon';
  return 'good evening';
}

const PILLARS = [
  { key: 'nutrition', icon: '🍃', name: 'nutrition' },
  { key: 'movement', icon: '🌊', name: 'movement' },
  { key: 'rest', icon: '🌙', name: 'rest' },
  { key: 'mind', icon: '✨', name: 'mind' },
] as const;

export default function HomeScreen() {
  const router = useRouter();
  const { name, conditions, symptoms } = useUserStore();
  const { lastPeriodDate, cycleLength } = useCycleStore();

  const phase = lastPeriodDate ? getCurrentPhase(lastPeriodDate, cycleLength) : null;
  const hasPcos = conditions.includes('pcos');
  const pillarData = phase ? getPillarData(phase.phase, hasPcos) : null;

  const dailyInsight = phase
    ? getAhaInsight(phase.phase, phase.day, conditions, symptoms)
    : null;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Greeting */}
        <Text style={styles.greeting}>
          {getGreeting()}, {name || 'there'}
        </Text>

        {/* Phase indicator */}
        {phase && <PhaseIndicator phase={phase} />}

        {/* Daily insight */}
        {dailyInsight && (
          <InsightCard
            title={dailyInsight.insight.title}
            body={dailyInsight.insight.body}
            why={dailyInsight.insight.why}
          />
        )}

        {/* Weekly report link */}
        <Pressable onPress={() => router.push('/weekly-report')} style={styles.weeklyLink}>
          <Text style={styles.weeklyText}>📊 view your weekly synthesis</Text>
        </Pressable>

        {/* Pillar cards */}
        {PILLARS.map((p) => (
          <PillarCard
            key={p.key}
            icon={p.icon}
            name={p.name}
            status={pillarData?.[p.key]?.status ?? 'complete onboarding to see insights'}
            onPress={() => router.push(`/pillar/${p.key}`)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingTop: spacing.md, paddingBottom: 120 },
  greeting: {
    ...typography.display,
    fontSize: 24,
    marginBottom: spacing.md,
  },
  weeklyLink: {
    paddingVertical: spacing.sm,
    marginBottom: spacing.sm,
  },
  weeklyText: {
    ...typography.small,
    color: colors.accent,
  },
});
