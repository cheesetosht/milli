import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { colors, typography, spacing } from '@/lib/tokens';
import { useUserStore, type Condition } from '@/lib/stores/user';
import Button from '@/components/Button';
import Input from '@/components/Input';
import ProgressBar from '@/components/ProgressBar';
import Chip from '@/components/Chip';

const TOTAL_STEPS = 7;

const CONDITIONS: { key: Condition; label: string }[] = [
  { key: 'pcos', label: 'PCOS / PCOD' },
  { key: 'endometriosis', label: 'endometriosis' },
  { key: 'thyroid', label: 'thyroid condition' },
  { key: 'unsure', label: 'not sure, but something feels off' },
  { key: 'none', label: 'none of these' },
];

export default function ProfileScreen() {
  const router = useRouter();
  const { name, setAge, setConditions } = useUserStore();
  const [ageText, setAgeText] = useState('');
  const [selected, setSelected] = useState<Condition[]>([]);

  const toggleCondition = (c: Condition) => {
    if (c === 'none') {
      setSelected(['none']);
      return;
    }
    setSelected((prev) => {
      const without = prev.filter((x) => x !== 'none');
      return without.includes(c) ? without.filter((x) => x !== c) : [...without, c];
    });
  };

  const handleContinue = () => {
    const age = parseInt(ageText, 10);
    if (age > 0) setAge(age);
    setConditions(selected);
    router.push('/(onboarding)/cycle');
  };

  const canContinue = ageText.trim() && parseInt(ageText, 10) > 0 && selected.length > 0;

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar progress={2 / TOTAL_STEPS} />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.header}>{name}, tell me a little about where you are.</Text>

        <Text style={styles.label}>how old are you?</Text>
        <Input
          placeholder="25"
          value={ageText}
          onChangeText={setAgeText}
          keyboardType="number-pad"
          maxLength={2}
          style={styles.input}
        />

        <Text style={styles.label}>do any of these apply to you?</Text>
        <View style={styles.chips}>
          {CONDITIONS.map((c) => (
            <Chip
              key={c.key}
              label={c.label}
              selected={selected.includes(c.key)}
              onPress={() => toggleCondition(c.key)}
            />
          ))}
        </View>
        <Text style={styles.helper}>
          no judgment here. this helps me understand what your body might be navigating.
        </Text>
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
  header: { ...typography.display, fontSize: 26, marginBottom: spacing.xl },
  label: { ...typography.bodyMedium, marginTop: spacing.lg, marginBottom: spacing.sm },
  input: { marginBottom: spacing.sm },
  chips: { flexDirection: 'row', flexWrap: 'wrap', marginTop: spacing.xs },
  helper: { ...typography.small, color: colors.rose, marginTop: spacing.sm },
  bottom: { paddingHorizontal: spacing.lg, paddingBottom: spacing.xl },
});
