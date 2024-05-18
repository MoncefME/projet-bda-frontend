import {
  LongestBreak,
  LongestStreak,
  MonthlyDistance,
  DailyValue,
} from "@/services/insights.service";

import { create } from "zustand";

interface useInsightsStoreProps {
  year: number;
  startDate: string;
  endDate: string;
  userId: string;
}

interface InsightsInterface {
  longestStreak: LongestStreak | null;
  longestBreak: LongestBreak | null;
  dailyValue: DailyValue[] | null;
  totalDuration: number | null;
  totalDistance: number | null;
  nbActivities: number | null;
  bestEffort1km: string | null;
  bestEffort5km: string | null;
  bestEffort10km: string | null;
  bestEffortHM: string | null;

  monthlyDistances: MonthlyDistance[] | null;
  setMonthlyDistances: (monthlyDistances: MonthlyDistance[] | null) => void;

  setLongestStreak: (longestStreak: LongestStreak) => void;
  setLongestBreak: (longestBreak: LongestBreak) => void;
  setTotalDuration: (totalDuration: number | null) => void;
  setTotalDistance: (totalDistance: number | null) => void;
  setNbActivities: (nbActivities: number | null) => void;
  setBestEffort1km: (bestEffort1km: string | null) => void;
  setBestEffort5km: (bestEffort5km: string | null) => void;
  setBestEffort10km: (bestEffort10km: string | null) => void;
  setBestEffortHM: (bestEffortHM: string | null) => void;
  setDailyValue: (dailyValue: DailyValue[]) => void;
}

export const useInsightsStore = create<InsightsInterface>((set) => ({
  longestStreak: null,
  longestBreak: null,
  dailyValue: null,
  totalDuration: null,
  totalDistance: null,
  nbActivities: null,
  bestEffort1km: null,
  bestEffort5km: null,
  bestEffort10km: null,
  bestEffortHM: null,

  monthlyDistances: null,
  setLongestStreak: (longestStreak) => set({ longestStreak }),
  setLongestBreak: (longestBreak) => set({ longestBreak }),
  setDailyValue: (dailyValue) => set({ dailyValue }),
  setTotalDuration: (totalDuration) => set({ totalDuration }),
  setTotalDistance: (totalDistance) => set({ totalDistance }),
  setNbActivities: (nbActivities) => set({ nbActivities }),
  setBestEffort1km: (bestEffort1km) => set({ bestEffort1km }),
  setBestEffort5km: (bestEffort5km) => set({ bestEffort5km }),
  setBestEffort10km: (bestEffort10km) => set({ bestEffort10km }),
  setBestEffortHM: (bestEffortHM) => set({ bestEffortHM }),
  setMonthlyDistances: (monthlyDistances) => set({ monthlyDistances }),
}));
