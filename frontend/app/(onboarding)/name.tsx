import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { colors, typography, spacing } from '@/lib/tokens';
import { useUserStore } from '@/lib/stores/user';
import Button from '@/components/Button';
import Input from '@/components/Input';
import ProgressBar from '@/components/ProgressBar';

const TOTAL_STEPS = 7;

export default function NameScreen() {
  const router = useRouter();
  const setName = useUserStore((s) => s.setName);
  const [name, setLocalName] = useState('');

  const handleContinue = () => {
    setName(name.trim());
    router.push('/(onboarding)/profile');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar progress={1 / TOTAL_STEPS} />
      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.top}>
          <Text style={styles.header}>hi, i'm milli.</Text>
          <Text style={styles.body}>
            i'm here to help you understand your body — not just track it. let's start with the basics.
          </Text>
          <Input
            placeholder="your name"
            value={name}
            onChangeText={setLocalName}
            autoFocus
            returnKeyType="done"
            onSubmitEditing={name.trim() ? handleContinue : undefined}
            style={styles.input}
          />
        </View>
        <View style={styles.bottom}>
          <Button onPress={handleContinue} disabled={!name.trim()}>
            {name.trim() ? `nice to meet you, ${name.trim()}` : 'enter your name'}
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  top: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xxl,
  },
  header: {
    ...typography.display,
  },
  body: {
    ...typography.body,
    color: colors.accent,
    marginTop: spacing.md,
    marginBottom: spacing.xl,
  },
  input: {
    marginTop: spacing.sm,
  },
  bottom: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
});
