import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { colors, typography, spacing, radius } from '@/lib/tokens';
import { useUserStore, type Condition } from '@/lib/stores/user';
import { useCycleStore } from '@/lib/stores/cycle';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Chip from '@/components/Chip';

const CONDITIONS: { key: Condition; label: string }[] = [
  { key: 'pcos', label: 'PCOS / PCOD' },
  { key: 'endometriosis', label: 'endometriosis' },
  { key: 'thyroid', label: 'thyroid condition' },
  { key: 'unsure', label: 'not sure, but something feels off' },
  { key: 'none', label: 'none of these' },
];

export default function ProfileScreen() {
  const user = useUserStore();
  const cycle = useCycleStore();

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age?.toString() ?? '');
  const [selectedConditions, setSelectedConditions] = useState<Condition[]>(user.conditions);
  const [cycleLength, setCycleLength] = useState(cycle.cycleLength.toString());
  const [irregular, setIrregular] = useState(cycle.isIrregular);
  const [weight, setWeight] = useState(user.weight?.toString() ?? '');
  const [waist, setWaist] = useState(user.waist?.toString() ?? '');
  const [hip, setHip] = useState(user.hip?.toString() ?? '');

  const toggleCondition = (c: Condition) => {
    if (c === 'none') { setSelectedConditions(['none']); return; }
    setSelectedConditions((prev) => {
      const without = prev.filter((x) => x !== 'none');
      return without.includes(c) ? without.filter((x) => x !== c) : [...without, c];
    });
  };

  const handleSave = () => {
    user.setName(name.trim());
    const parsedAge = parseInt(age, 10);
    if (parsedAge > 0) user.setAge(parsedAge);
    user.setConditions(selectedConditions);
    user.setMeasurements({
      weight: weight ? parseFloat(weight) : undefined,
      waist: waist ? parseFloat(waist) : undefined,
      hip: hip ? parseFloat(hip) : undefined,
    });
    const len = parseInt(cycleLength, 10);
    if (len > 0) cycle.setCycleLength(len);
    cycle.setIsIrregular(irregular);
    Alert.alert('saved', 'your profile has been updated.');
  };

  const handleReset = () => {
    Alert.alert('reset milli?', 'this will clear all your data and restart onboarding.', [
      { text: 'cancel', style: 'cancel' },
      {
        text: 'reset',
        style: 'destructive',
        onPress: () => {
          user.reset();
          cycle.setLastPeriodDate('');
          cycle.setCycleLength(28);
          cycle.setIsIrregular(false);
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>profile</Text>

        <Text style={styles.label}>name</Text>
        <Input value={name} onChangeText={setName} placeholder="your name" />

        <Text style={styles.label}>age</Text>
        <Input value={age} onChangeText={setAge} placeholder="25" keyboardType="number-pad" maxLength={2} />

        <Text style={styles.label}>conditions</Text>
        <View style={styles.chips}>
          {CONDITIONS.map((c) => (
            <Chip
              key={c.key}
              label={c.label}
              selected={selectedConditions.includes(c.key)}
              onPress={() => toggleCondition(c.key)}
            />
          ))}
        </View>

        <Text style={styles.label}>cycle length (days)</Text>
        <Input value={cycleLength} onChangeText={setCycleLength} placeholder="28" keyboardType="number-pad" maxLength={2} />

        <View style={{ flexDirection: 'row', marginTop: spacing.md }}>
          <Chip
            label="cycle is unpredictable"
            selected={irregular}
            onPress={() => setIrregular(!irregular)}
          />
        </View>

        <Text style={styles.sectionHeader}>measurements (optional)</Text>

        <Text style={styles.label}>weight (kg)</Text>
        <Input value={weight} onChangeText={setWeight} placeholder="58" keyboardType="decimal-pad" />

        <Text style={styles.label}>waist (inches)</Text>
        <Input value={waist} onChangeText={setWaist} placeholder="28" keyboardType="decimal-pad" />

        <Text style={styles.label}>hip (inches)</Text>
        <Input value={hip} onChangeText={setHip} placeholder="36" keyboardType="decimal-pad" />

        <Button onPress={handleSave} style={styles.saveButton}>save changes</Button>

        <View style={styles.footer}>
          <Text style={styles.disclaimer}>
            milli is not a replacement for medical advice. always consult your doctor for health decisions.
          </Text>
          <Button variant="secondary" onPress={handleReset}>
            reset milli
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingTop: spacing.md, paddingBottom: 120 },
  title: { ...typography.display, fontSize: 24, marginBottom: spacing.lg },
  label: { ...typography.bodyMedium, marginTop: spacing.md, marginBottom: spacing.xs, fontSize: 14 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', marginTop: spacing.xs },
  sectionHeader: { ...typography.header, fontSize: 18, marginTop: spacing.xl, marginBottom: spacing.xs },
  saveButton: { marginTop: spacing.xl },
  footer: { marginTop: spacing.xxl, alignItems: 'center' },
  disclaimer: {
    ...typography.small,
    color: colors.rose,
    textAlign: 'center',
    marginBottom: spacing.md,
    lineHeight: 18,
  },
});
