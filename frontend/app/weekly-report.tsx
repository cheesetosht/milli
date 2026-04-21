import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { colors, typography, spacing, radius } from '@/lib/tokens';
import { useUserStore } from '@/lib/stores/user';
import { useCycleStore } from '@/lib/stores/cycle';
import { useChatStore } from '@/lib/stores/chat';
import { getCurrentPhase } from '@/lib/cycle-utils';

function formatDateRange(): string {
  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const fmt = (d: Date) => d.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
  return `${fmt(weekAgo)} — ${fmt(now)}`;
}

export default function WeeklyReportScreen() {
  const router = useRouter();
  const { name, conditions } = useUserStore();
  const { lastPeriodDate, cycleLength } = useCycleStore();
  const { messages } = useChatStore();

  const phase = lastPeriodDate ? getCurrentPhase(lastPeriodDate, cycleLength) : null;
  const hasPcos = conditions.includes('pcos');

  const userMessageCount = messages.filter((m) => m.role === 'user' && m.timestamp > Date.now() - 7 * 24 * 60 * 60 * 1000).length;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Pressable onPress={() => router.back()} style={styles.back}>
          <Text style={styles.backText}>← back</Text>
        </Pressable>

        <Text style={styles.title}>your week with milli</Text>
        <Text style={styles.dateRange}>{formatDateRange()}</Text>
        {phase && (
          <Text style={styles.phaseContext}>
            you spent this week around {phase.phase} phase
          </Text>
        )}

        {/* Key takeaway */}
        <View style={styles.heroCard}>
          {phase?.phase === 'luteal' ? (
            <Text style={styles.heroText}>
              you're in luteal phase — the most important thing this week is to not fight the dip. your body needs more food, gentler movement, and earlier sleep. the energy will come back.
            </Text>
          ) : phase?.phase === 'follicular' ? (
            <Text style={styles.heroText}>
              you're in your power window. if there's a workout PR to chase, a project to tackle, or a tough conversation to have — this is the week your biology is on your side.
            </Text>
          ) : phase?.phase === 'menstrual' ? (
            <Text style={styles.heroText}>
              recovery week. your body is resetting. the fatigue isn't laziness — it's your hormones at their lowest. iron-rich foods and rest are the priorities.
            </Text>
          ) : (
            <Text style={styles.heroText}>
              ovulation energy is peaking. social drive is high but so is emotional sensitivity. channel the energy but give yourself grace.
            </Text>
          )}
        </View>

        {/* Pillar summaries */}
        <Text style={styles.sectionHeader}>across your pillars</Text>

        <View style={styles.pillarSummary}>
          <Text style={styles.pillarTitle}>🍃 nutrition</Text>
          <Text style={styles.pillarText}>
            {hasPcos && phase?.phase === 'luteal'
              ? "this week your body needs 100-300 extra kcal and lower glycemic load. sugar cravings are progesterone-driven — dark chocolate and pumpkin seeds help."
              : "keep prioritizing protein + fiber at every meal. your gut health directly affects your estrogen balance through the estrobolome."
            }
          </Text>
        </View>

        <View style={styles.pillarSummary}>
          <Text style={styles.pillarTitle}>🌊 movement</Text>
          <Text style={styles.pillarText}>
            {phase?.phase === 'luteal'
              ? "walks over HIIT this week. the cortisol cost of intense exercise is higher right now, and 45-min brisk walks deliver the same insulin-sensitizing benefit."
              : phase?.phase === 'follicular'
                ? "front-load your heavy training. estrogen is anabolic this week — muscle protein synthesis is at its peak."
                : "listen to your body. gentle movement supports recovery without adding stress."
            }
          </Text>
        </View>

        <View style={styles.pillarSummary}>
          <Text style={styles.pillarTitle}>🌙 rest</Text>
          <Text style={styles.pillarText}>
            {phase?.phase === 'luteal'
              ? "sleep gets harder this phase — your core temp rises and melatonin window shifts earlier. in bed by 10:30pm, no caffeine after noon, cool the bedroom."
              : "7.5-8 hours remains the target. morning sunlight exposure within 30 minutes of waking sets your circadian clock."
            }
          </Text>
        </View>

        <View style={styles.pillarSummary}>
          <Text style={styles.pillarTitle}>✨ mind</Text>
          <Text style={styles.pillarText}>
            {phase?.phase === 'luteal'
              ? "if anxiety showed up this week — it's neurobiological, not situational. GABA sensitivity shifts with progesterone withdrawal. magnesium + B6 before bed can help."
              : "your emotional bandwidth is higher this week. use it for important conversations and decisions."
            }
          </Text>
        </View>

        {/* Looking ahead */}
        <View style={styles.lookAheadCard}>
          <Text style={styles.lookAheadTitle}>looking ahead</Text>
          <Text style={styles.lookAheadText}>
            {phase
              ? `next phase: ${phase.nextPhase} in ~${phase.daysUntilNext} days. i'll adjust your protocol accordingly.`
              : 'keep logging — the more context i have, the better i can connect dots for you.'
            }
          </Text>
        </View>

        {/* Closing */}
        <Text style={styles.closing}>
          {userMessageCount > 0
            ? `you checked in ${userMessageCount} time${userMessageCount > 1 ? 's' : ''} this week. that matters more than getting everything perfect.`
            : "you showed up for yourself this week. that matters more than getting everything perfect."
          }
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingTop: spacing.md, paddingBottom: spacing.xxl },
  back: { marginBottom: spacing.md },
  backText: { ...typography.small, color: colors.accent },
  title: { ...typography.display, fontSize: 24 },
  dateRange: { ...typography.small, marginTop: spacing.xs },
  phaseContext: { ...typography.body, color: colors.accent, fontSize: 14, marginTop: spacing.xs, marginBottom: spacing.lg },

  heroCard: {
    backgroundColor: colors.rose + '25',
    borderRadius: radius.xl,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  heroText: { ...typography.body, color: colors.primary, lineHeight: 24 },

  sectionHeader: { ...typography.bodyMedium, marginBottom: spacing.sm },
  pillarSummary: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.base,
    marginBottom: spacing.sm,
  },
  pillarTitle: { ...typography.bodyMedium, fontSize: 14, marginBottom: spacing.xs },
  pillarText: { ...typography.body, fontSize: 14, color: colors.accent, lineHeight: 21 },

  lookAheadCard: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.base,
    marginTop: spacing.md,
  },
  lookAheadTitle: { ...typography.bodyMedium, fontSize: 14, marginBottom: spacing.xs },
  lookAheadText: { ...typography.body, fontSize: 14, color: colors.accent },

  closing: {
    ...typography.body,
    color: colors.rose,
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: spacing.xl,
    paddingHorizontal: spacing.md,
    lineHeight: 22,
  },
});
