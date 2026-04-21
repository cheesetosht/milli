import { Pressable, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { colors, typography, spacing, radius } from '@/lib/tokens';

interface ProtocolCardProps {
  text: string;
  why: string;
}

export default function ProtocolCard({ text, why }: ProtocolCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Pressable onPress={() => setExpanded(!expanded)} style={styles.card}>
      <Text style={styles.text}>{text}</Text>
      {expanded && <Text style={styles.why}>{why}</Text>}
      {!expanded && <Text style={styles.tap}>why?</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.base,
    marginBottom: spacing.sm,
  },
  text: {
    ...typography.body,
    fontSize: 15,
  },
  why: {
    ...typography.small,
    color: colors.rose,
    marginTop: spacing.xs,
    lineHeight: 20,
  },
  tap: {
    ...typography.small,
    color: colors.rose,
    marginTop: spacing.xs,
    fontStyle: 'italic',
  },
});
