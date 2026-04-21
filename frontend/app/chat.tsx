import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useState, useRef, useEffect } from 'react';
import { colors, typography, spacing, radius } from '@/lib/tokens';
import { useChatStore, type ChatMessage } from '@/lib/stores/chat';
import { useUserStore } from '@/lib/stores/user';
import { useCycleStore } from '@/lib/stores/cycle';
import { getCurrentPhase } from '@/lib/cycle-utils';
import { sendChatMessage } from '@/lib/api';
import ChatBubble from '@/components/ChatBubble';
import TypingIndicator from '@/components/TypingIndicator';

const PLACEHOLDERS = [
  'how are you feeling?',
  'what did you eat today?',
  'anything on your mind?',
  "how's your energy?",
];

export default function ChatScreen() {
  const router = useRouter();
  const { messages, isTyping, addMessage, setTyping } = useChatStore();
  const { name, age, conditions, symptoms, goal } = useUserStore();
  const { lastPeriodDate, cycleLength, isIrregular } = useCycleStore();
  const [input, setInput] = useState('');
  const flatListRef = useRef<FlatList>(null);
  const [placeholder] = useState(
    () => PLACEHOLDERS[Math.floor(Math.random() * PLACEHOLDERS.length)],
  );

  const phase = lastPeriodDate ? getCurrentPhase(lastPeriodDate, cycleLength) : null;

  useEffect(() => {
    // Auto-scroll on new messages or typing state change
    if (flatListRef.current && (messages.length > 0 || isTyping)) {
      setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
    }
  }, [messages.length, isTyping]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text) return;

    setInput('');
    addMessage('user', text);
    setTyping(true);

    try {
      const data = await sendChatMessage({
        message: text,
        context: {
          phase: phase?.phase ?? null,
          day: phase?.day ?? null,
          recentMessages: messages.slice(-10).map((m) => ({
            role: m.role,
            content: m.content,
          })),
        },
        user: {
          name,
          age,
          conditions,
          symptoms,
          goal,
          cycleLength,
          isIrregular,
        },
      });

      addMessage('assistant', data.content);
    } catch {
      addMessage('assistant', "i'm having trouble connecting right now. try again in a moment.");
    } finally {
      setTyping(false);
    }
  };

  const renderItem = ({ item }: { item: ChatMessage }) => (
    <ChatBubble role={item.role} content={item.content} />
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>milli</Text>
        {phase && <Text style={styles.headerPhase}>{phase.label}</Text>}
        <Pressable onPress={() => router.back()} style={styles.close}>
          <Text style={styles.closeText}>✕</Text>
        </Pressable>
      </View>

      {/* Messages */}
      <KeyboardAvoidingView
        style={styles.body}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={0}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messageList}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text style={styles.emptyText}>
                hi! tell me about your day, how you're feeling, or what you ate — i'll help connect the dots.
              </Text>
            </View>
          }
          ListFooterComponent={isTyping ? <TypingIndicator /> : null}
        />

        {/* Input */}
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder={placeholder}
            placeholderTextColor={colors.rose}
            multiline
            maxLength={1000}
            returnKeyType="default"
          />
          <Pressable
            onPress={handleSend}
            disabled={!input.trim()}
            style={[styles.sendButton, !input.trim() && styles.sendDisabled]}
          >
            <Text style={styles.sendText}>↑</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.base,
  },
  headerTitle: { ...typography.bodyMedium, flex: 1 },
  headerPhase: { ...typography.small },
  close: { marginLeft: spacing.md, padding: spacing.xs },
  closeText: { fontSize: 18, color: colors.accent },
  body: { flex: 1 },
  messageList: { paddingTop: spacing.md, paddingBottom: spacing.sm },
  empty: { padding: spacing.xl, alignItems: 'center' },
  emptyText: { ...typography.body, color: colors.rose, textAlign: 'center', fontStyle: 'italic' },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.base,
    backgroundColor: colors.card,
  },
  input: {
    flex: 1,
    ...typography.chat,
    color: colors.primary,
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 2,
    maxHeight: 100,
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: spacing.sm,
  },
  sendDisabled: { opacity: 0.4 },
  sendText: { color: colors.card, fontSize: 18, fontWeight: '600' },
});
