import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import { colors, typography, spacing, radius } from '@/lib/tokens';

interface InsightCardProps {
  title: string;
  body: string;
  why?: string;
}

export default function InsightCard({ title, body, why }: InsightCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Pressable onPress={() => why && setExpanded(!expanded)} style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
      {why && expanded && <Text style={styles.why}>{why}</Text>}
      {why && !expanded && <Text style={styles.tap}>tap to learn why</Text>}
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
    marginBottom: spacing.md,
  },
  title: {
    ...typography.bodyMedium,
    marginBottom: spacing.xs,
  },
  body: {
    ...typography.body,
    color: colors.accent,
  },
  why: {
    ...typography.small,
    color: colors.rose,
    marginTop: spacing.sm,
    lineHeight: 20,
  },
  tap: {
    ...typography.small,
    color: colors.rose,
    marginTop: spacing.sm,
    fontStyle: 'italic',
  },
});
