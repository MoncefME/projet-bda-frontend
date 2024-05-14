import { LongestBreak, LongestStreak, DailyValue } from "@/services/insights.service";
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

  setLongestStreak: (longestStreak: LongestStreak) => void;
  setLongestBreak: (longestBreak: LongestBreak) => void;
  setDailyValue: (dailyValue: DailyValue[]) => void;
  setTotalDuration: (totalDuration: number) => void;
  setTotalDistance: (totalDistance: number) => void;
  setNbActivities: (nbActivities: number) => void;
}

export const useInsightsStore = create<InsightsInterface>((set) => ({
  longestStreak: null,
  longestBreak: null,
  dailyValue: null,
  totalDuration: null,
  totalDistance: null,
  nbActivities: null,

  setLongestStreak: (longestStreak) => set({ longestStreak }),
  setLongestBreak: (longestBreak) => set({ longestBreak }),
  setDailyValue: (dailyValue) => set({dailyValue}),
  setTotalDuration: (totalDuration) => set({ totalDuration }),
  setTotalDistance: (totalDistance) => set({ totalDistance }),
  setNbActivities: (nbActivities) => set({ nbActivities }),
}));
