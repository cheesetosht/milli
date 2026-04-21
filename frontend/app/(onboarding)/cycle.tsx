import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { colors, typography, spacing, radius } from '@/lib/tokens';
import { useCycleStore } from '@/lib/stores/cycle';
import { useUserStore } from '@/lib/stores/user';
import Button from '@/components/Button';
import Input from '@/components/Input';
import ProgressBar from '@/components/ProgressBar';

const TOTAL_STEPS = 7;

export default function CycleScreen() {
  const router = useRouter();
  const { conditions } = useUserStore();
  const { setLastPeriodDate, setCycleLength, setIsIrregular } = useCycleStore();

  const [daysAgo, setDaysAgo] = useState('');
  const [length, setLength] = useState('28');
  const [irregular, setIrregular] = useState(false);

  const hasPcos = conditions.includes('pcos');

  const handleContinue = () => {
    const days = parseInt(daysAgo, 10);
    if (days >= 0) {
      const date = new Date();
      date.setDate(date.getDate() - days);
      setLastPeriodDate(date.toISOString().split('T')[0]);
    }
    const len = parseInt(length, 10);
    if (len > 0) setCycleLength(len);
    setIsIrregular(irregular);
    router.push('/(onboarding)/symptoms');
  };

  const canContinue = daysAgo.trim() && parseInt(daysAgo, 10) >= 0;

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar progress={3 / TOTAL_STEPS} />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.header}>let's understand your rhythm.</Text>
        <Text style={styles.body}>
          your cycle isn't just your period — it shapes your energy, mood, metabolism, and sleep across the entire month.
        </Text>

        <Text style={styles.label}>how many days ago did your last period start?</Text>
        <Input
          placeholder="e.g. 12"
          value={daysAgo}
          onChangeText={setDaysAgo}
          keyboardType="number-pad"
          maxLength={3}
          style={styles.input}
        />
        <Text style={styles.helper}>a rough estimate is fine.</Text>

        <Text style={styles.label}>how long is your cycle usually? (days)</Text>
        <Input
          placeholder="28"
          value={length}
          onChangeText={setLength}
          keyboardType="number-pad"
          maxLength={2}
          style={styles.input}
        />

        <Pressable
          onPress={() => setIrregular(!irregular)}
          style={[styles.toggle, irregular && styles.toggleActive]}
        >
          <Text style={[styles.toggleText, irregular && styles.toggleTextActive]}>
            it's unpredictable
          </Text>
        </Pressable>

        {irregular && (
          <Text style={styles.helper}>
            {hasPcos
              ? "that's actually really common, especially with PCOS. we'll work with what your body tells us."
              : "that's okay — we'll work with what your body tells us."}
          </Text>
        )}
      </ScrollView>
      <View style={styles.bottom}>
        <Button onPress={handleContinue} disabled={!canContinue}>
          continue
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scroll: { flex: 1 },
  content: { paddingHorizontal: spacing.lg, paddingTop: spacing.xxl },
  header: { ...typography.display, fontSize: 26 },
  body: { ...typography.body, color: colors.accent, marginTop: spacing.md, marginBottom: spacing.lg },
  label: { ...typography.bodyMedium, marginTop: spacing.lg, marginBottom: spacing.sm },
  input: { marginBottom: spacing.xs },
  helper: { ...typography.small, color: colors.rose, marginTop: spacing.xs },
  toggle: {
    marginTop: spacing.lg,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.md,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.rose,
    backgroundColor: colors.card,
    alignSelf: 'flex-start',
  },
  toggleActive: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  toggleText: { ...typography.small, color: colors.primary },
  toggleTextActive: { color: colors.card },
  bottom: { paddingHorizontal: spacing.lg, paddingBottom: spacing.xl },
});
