import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const usePlanStore = create(
  persist(
    (set) => ({
      plan: null,
      name: null,
      setPlan: (name) => set({ name }),
      clearUser: () => set({ plan: null, name: null })
    }),
    {
      name: 'plan-storage', // localStorage key ka naam
    }
  )
);

export default usePlanStore;