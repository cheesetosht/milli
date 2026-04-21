import { Text, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';
import { colors, typography, radius, spacing } from '@/lib/tokens';
import AnimatedPressable from './AnimatedPressable';

interface GoalCardProps {
  title: string;
  description: string;
  selected: boolean;
  onPress: () => void;
}

export default function GoalCard({ title, description, selected, onPress }: GoalCardProps) {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress();
  };

  return (
    <AnimatedPressable
      onPress={handlePress}
      style={[styles.card, selected && styles.cardSelected]}
    >
      <Text style={[styles.title, selected && styles.titleSelected]}>{title}</Text>
      <Text style={[styles.desc, selected && styles.descSelected]}>{description}</Text>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.rose,
    backgroundColor: colors.card,
    marginBottom: spacing.sm,
  },
  cardSelected: {
    borderColor: colors.accent,
    backgroundColor: colors.accent,
  },
  title: {
    ...typography.bodyMedium,
    color: colors.primary,
  },
  titleSelected: {
    color: colors.card,
  },
  desc: {
    ...typography.small,
    color: colors.rose,
    marginTop: 2,
  },
  descSelected: {
    color: colors.base,
  },
});
