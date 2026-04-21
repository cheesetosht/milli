import { TextInput, StyleSheet, type TextInputProps } from 'react-native';
import { colors, typography, radius, spacing } from '@/lib/tokens';

interface InputProps extends TextInputProps {
  // extend as needed
}

export default function Input(props: InputProps) {
  return (
    <TextInput
      placeholderTextColor={colors.rose}
      {...props}
      style={[styles.input, props.style]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    ...typography.body,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.rose,
    borderRadius: radius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    color: colors.primary,
  },
});
