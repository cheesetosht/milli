import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { asyncStorage } from '@/lib/storage';

export type Condition = 'pcos' | 'endometriosis' | 'thyroid' | 'unsure' | 'none';

export type Symptom =
  | 'low_energy' | 'mood_swings' | 'anxiety' | 'brain_fog'
  | 'bloating' | 'acne' | 'hair_loss' | 'weight_plateau'
  | 'poor_sleep' | 'irregular_periods' | 'painful_periods'
  | 'sugar_cravings' | 'irritability';

export type Goal =
  | 'understand_body' | 'manage_weight' | 'improve_energy'
  | 'balance_hormones' | 'feel_less_anxious';

interface UserState {
  name: string;
  age: number | null;
  conditions: Condition[];
  symptoms: Symptom[];
  goal: Goal | null;
  weight: number | null;
  waist: number | null;
  hip: number | null;
  hasCompletedOnboarding: boolean;

  setName: (name: string) => void;
  setAge: (age: number) => void;
  setConditions: (conditions: Condition[]) => void;
  setSymptoms: (symptoms: Symptom[]) => void;
  setGoal: (goal: Goal) => void;
  setMeasurements: (m: { weight?: number; waist?: number; hip?: number }) => void;
  completeOnboarding: () => void;
  reset: () => void;
}

const initialState = {
  name: '',
  age: null,
  conditions: [] as Condition[],
  symptoms: [] as Symptom[],
  goal: null as Goal | null,
  weight: null,
  waist: null,
  hip: null,
  hasCompletedOnboarding: false,
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      ...initialState,
      setName: (name) => set({ name }),
      setAge: (age) => set({ age }),
      setConditions: (conditions) => set({ conditions }),
      setSymptoms: (symptoms) => set({ symptoms }),
      setGoal: (goal) => set({ goal }),
      setMeasurements: (m) => set({ weight: m.weight ?? null, waist: m.waist ?? null, hip: m.hip ?? null }),
      completeOnboarding: () => set({ hasCompletedOnboarding: true }),
      reset: () => set(initialState),
    }),
    {
      name: 'milli-user',
      storage: createJSONStorage(() => asyncStorage),
    },
  ),
);
