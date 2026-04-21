import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { colors, typography, spacing } from '@/lib/tokens';
import { useUserStore, type Symptom } from '@/lib/stores/user';
import Button from '@/components/Button';
import Chip from '@/components/Chip';
import ProgressBar from '@/components/ProgressBar';

const TOTAL_STEPS = 7;

const SYMPTOMS: { key: Symptom; label: string }[] = [
  { key: 'low_energy', label: 'low energy' },
  { key: 'mood_swings', label: 'mood swings' },
  { key: 'anxiety', label: 'anxiety' },
  { key: 'brain_fog', label: 'brain fog' },
  { key: 'bloating', label: 'bloating' },
  { key: 'acne', label: 'acne' },
  { key: 'hair_loss', label: 'hair loss' },
  { key: 'weight_plateau', label: 'weight plateau' },
  { key: 'poor_sleep', label: 'poor sleep' },
  { key: 'irregular_periods', label: 'irregular periods' },
  { key: 'painful_periods', label: 'painful periods' },
  { key: 'sugar_cravings', label: 'sugar cravings' },
  { key: 'irritability', label: 'irritability' },
];

function getEmpathyText(count: number): string | null {
  if (count >= 5) return "you're dealing with a lot. that takes strength. let's figure this out together.";
  if (count >= 3) return 'i hear you. these are connected in ways that will start making sense.';
  return null;
}

export default function SymptomsScreen() {
  const router = useRouter();
  const setSymptoms = useUserStore((s) => s.setSymptoms);
  const [selected, setSelected] = useState<Symptom[]>([]);

  const toggle = (s: Symptom) => {
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );
  };

  const handleContinue = () => {
    setSymptoms(selected);
    router.push('/(onboarding)/goal');
  };

  const empathy = getEmpathyText(selected.length);

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar progress={4 / TOTAL_STEPS} />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Text style={styles.header}>what's been showing up for you?</Text>
        <Text style={styles.body}>
          these are real symptoms with real biological causes. selecting them helps me connect the dots for you.
        </Text>

        <View style={styles.chips}>
          {SYMPTOMS.map((s) => (
            <Chip
              key={s.key}
              label={s.label}
              selected={selected.includes(s.key)}
              onPress={() => toggle(s.key)}
            />
          ))}
        </View>

        {empathy && <Text style={styles.empathy}>{empathy}</Text>}
      </ScrollView>
      <View style={styles.bottom}>
        <Button onPress={handleContinue} disabled={selected.length === 0}>
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
  chips: { flexDirection: 'row', flexWrap: 'wrap' },
  empathy: {
    ...typography.body,
    color: colors.accent,
    fontStyle: 'italic',
    marginTop: spacing.md,
  },
  bottom: { paddingHorizontal: spacing.lg, paddingBottom: spacing.xl },
});
