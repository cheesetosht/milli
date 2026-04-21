import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { asyncStorage } from '@/lib/storage';

interface CycleState {
  lastPeriodDate: string | null; // ISO date string
  cycleLength: number;
  isIrregular: boolean;

  setLastPeriodDate: (date: string) => void;
  setCycleLength: (length: number) => void;
  setIsIrregular: (irregular: boolean) => void;
}

export const useCycleStore = create<CycleState>()(
  persist(
    (set) => ({
      lastPeriodDate: null,
      cycleLength: 28,
      isIrregular: false,

      setLastPeriodDate: (date) => set({ lastPeriodDate: date }),
      setCycleLength: (length) => set({ cycleLength: length }),
      setIsIrregular: (irregular) => set({ isIrregular: irregular }),
    }),
    {
      name: 'milli-cycle',
      storage: createJSONStorage(() => asyncStorage),
    },
  ),
);
