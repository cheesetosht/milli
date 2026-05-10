import { create } from "zustand";

type AppSlice = {
  hydrated: boolean;
  setHydrated: (hydrated: boolean) => void;
};

export const useAppStore = create<AppSlice>((set) => ({
  hydrated: false,
  setHydrated: (hydrated) => set({ hydrated }),
}));
