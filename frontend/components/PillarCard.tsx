import { Pressable, Text, View, StyleSheet } from 'react-native';
import { colors, typography, spacing, radius } from '@/lib/tokens';

interface PillarCardProps {
  icon: string;
  name: string;
  status: string;
  onPress: () => void;
}

export default function PillarCard({ icon, name, status, onPress }: PillarCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.header}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <Text style={styles.status}>{status}</Text>
    </Pressable>
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
  cardPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
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
