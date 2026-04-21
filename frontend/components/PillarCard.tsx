import { Text, View, StyleSheet } from 'react-native';
import { colors, typography, spacing, radius } from '@/lib/tokens';
import AnimatedPressable from './AnimatedPressable';

interface PillarCardProps {
  icon: string;
  name: string;
  status: string;
  onPress: () => void;
}

export default function PillarCard({ icon, name, status, onPress }: PillarCardProps) {
  return (
    <AnimatedPressable onPress={onPress} style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <Text style={styles.status}>{status}</Text>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.base,
    marginBottom: spacing.sm,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  icon: {
    fontSize: 20,
    marginRight: spacing.sm,
  },
  name: {
    ...typography.bodyMedium,
  },
  status: {
    ...typography.body,
    color: colors.accent,
    fontSize: 14,
    lineHeight: 21,
  },
});
