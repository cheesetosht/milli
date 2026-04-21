import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, typography, spacing } from '@/lib/tokens';
import Button from '@/components/Button';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.wordmark}>milli</Text>
        <Text style={styles.subline}>
          your body has a language.{'\n'}let's learn to listen.
        </Text>
      </View>
      <View style={styles.bottom}>
        <Button onPress={() => router.push('/(onboarding)/name')}>
          let's begin
        </Button>
      </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
  wordmark: {
    ...typography.display,
    fontSize: 48,
    letterSpacing: 2,
  },
  subline: {
    ...typography.body,
    color: colors.accent,
    textAlign: 'center',
    marginTop: spacing.md,
  },
  bottom: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
});
