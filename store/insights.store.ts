import { LongestBreak, LongestStreak } from "@/services/insights.service";
import { create } from "zustand";

interface useInsightsStoreProps {
  startDate: string;
  endDate: string;
  userId: string;
}

interface InsightsInterface {
  longestStreak: LongestStreak | null;
  longestBreak: LongestBreak | null;
  totalDuration: number | null;
  totalDistance: number | null;
  nbActivities: number | null;
  bestEffort1km: number | null;
  bestEffort5km: number | null;
  bestEffort10km: number | null;
  bestEffortHM: number | null;

  setLongestStreak: (longestStreak: LongestStreak) => void;
  setLongestBreak: (longestBreak: LongestBreak) => void;
  setTotalDuration: (totalDuration: number) => void;
  setTotalDistance: (totalDistance: number) => void;
  setNbActivities: (nbActivities: number) => void;
  setBestEffort1km: (nbActivities: string) => void;
  setBestEffort5km: (nbActivities: string) => void;
  setBestEffort10km: (nbActivities: string) => void;
  setBestEffortHM: (nbActivities: string) => void;
}

export const useInsightsStore = create<InsightsInterface>((set) => ({
  longestStreak: null,
  longestBreak: null,
  totalDuration: null,
  totalDistance: null,
  nbActivities: null,
  bestEffort1km: null,
  bestEffort5km: null,
  bestEffort10km: null,
  bestEffortHM: null,

  setLongestStreak: (longestStreak) => set({ longestStreak }),
  setLongestBreak: (longestBreak) => set({ longestBreak }),
  setTotalDuration: (totalDuration) => set({ totalDuration }),
  setTotalDistance: (totalDistance) => set({ totalDistance }),
  setNbActivities: (nbActivities) => set({ nbActivities }),
  setBestEffort1km: (bestEffort1km) => set({ bestEffort1km }),
  setBestEffort5km: (bestEffort5km) => set({ bestEffort5km }),
  setBestEffort10km: (bestEffort10km) => set({ bestEffort10km }),
  setBestEffortHM: (bestEffortHM) => set({ bestEffortHM }),
}));
