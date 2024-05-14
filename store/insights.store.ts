import { LongestBreak, LongestStreak, MonthlyDistance } from "@/services/insights.service";

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
  monthlyDistances: MonthlyDistance[] | null;
  setLongestStreak: (longestStreak: LongestStreak) => void;
  setLongestBreak: (longestBreak: LongestBreak) => void;
  setTotalDuration: (totalDuration: number) => void;
  setTotalDistance: (totalDistance: number) => void;
  setNbActivities: (nbActivities: number) => void;
  setMonthlyDistances: (monthlyDistances: MonthlyDistance[] | null) => void;}
export const useInsightsStore = create<InsightsInterface>((set) => ({
  longestStreak: null,
  longestBreak: null,
  totalDuration: null,
  totalDistance: null,
  nbActivities: null,
  monthlyDistances: null,
  setLongestStreak: (longestStreak) => set({ longestStreak }),
  setLongestBreak: (longestBreak) => set({ longestBreak }),
  setTotalDuration: (totalDuration) => set({ totalDuration }),
  setTotalDistance: (totalDistance) => set({ totalDistance }),
  setNbActivities: (nbActivities) => set({ nbActivities }),
  setMonthlyDistances: (monthlyDistances) => set({ monthlyDistances }),
}));
