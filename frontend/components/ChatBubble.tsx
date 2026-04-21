import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing, radius } from '@/lib/tokens';

interface ChatBubbleProps {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatBubble({ role, content }: ChatBubbleProps) {
  const isUser = role === 'user';

  return (
    <View style={[styles.row, isUser && styles.rowUser]}>
      <View style={[styles.bubble, isUser ? styles.bubbleUser : styles.bubbleMilli]}>
        <Text style={[styles.text, isUser ? styles.textUser : styles.textMilli]}>
          {content}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  rowUser: {
    justifyContent: 'flex-end',
  },
  bubble: {
    maxWidth: '80%',
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.md,
    borderRadius: radius.lg,
  },
  bubbleUser: {
    backgroundColor: colors.accent,
    borderBottomRightRadius: radius.sm,
  },
  bubbleMilli: {
    backgroundColor: colors.card,
    borderBottomLeftRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.base,
  },
  text: {
    ...typography.chat,
  },
  textUser: {
    color: colors.card,
  },
  textMilli: {
    color: colors.primary,
  },
});
