import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing, radius } from '@/lib/tokens';
import { type PhaseInfo, getPhaseColor } from '@/lib/cycle-utils';

interface PhaseIndicatorProps {
  phase: PhaseInfo;
}

export default function PhaseIndicator({ phase }: PhaseIndicatorProps) {
  const phaseColor = getPhaseColor(phase.phase);
  const progress = phase.day / 28; // approximate visual

  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <View style={[styles.dot, { backgroundColor: phaseColor }]} />
        <Text style={styles.label}>{phase.label}</Text>
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${Math.min(progress, 1) * 100}%`, backgroundColor: phaseColor }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: spacing.sm,
  },
  label: {
    ...typography.small,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  track: {
    height: 4,
    backgroundColor: colors.base,
    borderRadius: radius.full,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: radius.full,
  },
});
