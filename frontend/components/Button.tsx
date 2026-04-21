import { Pressable, Text, StyleSheet, type ViewStyle } from 'react-native';
import { colors, typography, radius, spacing } from '@/lib/tokens';

type Variant = 'primary' | 'secondary';

interface ButtonProps {
  onPress: () => void;
  children: string;
  variant?: Variant;
  disabled?: boolean;
  style?: ViewStyle;
}

export default function Button({ onPress, children, variant = 'primary', disabled, style }: ButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        isPrimary ? styles.primary : styles.secondary,
        disabled && styles.disabled,
        pressed && !disabled && { opacity: 0.85, transform: [{ scale: 0.98 }] },
        style,
      ]}
    >
      <Text style={[styles.text, isPrimary ? styles.primaryText : styles.secondaryText]}>
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.lg,
    alignItems: 'center',
  },
  primary: {
    backgroundColor: colors.accent,
  },
  secondary: {
    backgroundColor: 'transparent',
  },
  disabled: {
    opacity: 0.4,
  },
  text: {
    ...typography.bodyMedium,
    fontSize: 17,
  },
  primaryText: {
    color: colors.card,
  },
  secondaryText: {
    color: colors.accent,
  },
});
