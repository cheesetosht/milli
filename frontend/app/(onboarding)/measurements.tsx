import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { colors, typography, spacing } from '@/lib/tokens';
import { useUserStore } from '@/lib/stores/user';
import Button from '@/components/Button';
import Input from '@/components/Input';
import ProgressBar from '@/components/ProgressBar';

const TOTAL_STEPS = 7;

export default function MeasurementsScreen() {
  const router = useRouter();
  const setMeasurements = useUserStore((s) => s.setMeasurements);
  const [weight, setWeight] = useState('');
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');

  const handleContinue = () => {
    setMeasurements({
      weight: weight ? parseFloat(weight) : undefined,
      waist: waist ? parseFloat(waist) : undefined,
      hip: hip ? parseFloat(hip) : undefined,
    });
    router.push('/(onboarding)/insight');
  };

  const handleSkip = () => {
    router.push('/(onboarding)/insight');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar progress={6 / TOTAL_STEPS} />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.header}>one more thing (totally optional).</Text>
        <Text style={styles.body}>
          if you're comfortable, these measurements help me give you more precise guidance. you can always add them later.
        </Text>

        <Text style={styles.label}>weight (kg)</Text>
        <Input
          placeholder="e.g. 58"
          value={weight}
          onChangeText={setWeight}
          keyboardType="decimal-pad"
          style={styles.input}
        />

        <Text style={styles.label}>waist (inches)</Text>
        <Input
          placeholder="e.g. 28"
          value={waist}
          onChangeText={setWaist}
          keyboardType="decimal-pad"
          style={styles.input}
        />

        <Text style={styles.label}>hip (inches)</Text>
        <Input
          placeholder="e.g. 36"
          value={hip}
          onChangeText={setHip}
          keyboardType="decimal-pad"
          style={styles.input}
        />
      </ScrollView>
      <View style={styles.bottom}>
        <Button onPress={handleContinue}>save and continue</Button>
        <Button variant="secondary" onPress={handleSkip} style={styles.skip}>
          skip for now
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
  label: { ...typography.bodyMedium, marginTop: spacing.md, marginBottom: spacing.xs },
  input: {},
  bottom: { paddingHorizontal: spacing.lg, paddingBottom: spacing.xl },
  skip: { marginTop: spacing.sm },
});
