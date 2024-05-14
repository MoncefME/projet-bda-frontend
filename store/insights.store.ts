import {
  LongestBreak,
  LongestStreak,
  ActivityResult,
} from "@/services/insights.service";
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
  mostDay: string;
  leastDay: string;
  mostDayCount: number;
  leastDayCount: number;

  setLongestStreak: (longestStreak: LongestStreak) => void;
  setLongestBreak: (longestBreak: LongestBreak) => void;
  setTotalDuration: (totalDuration: number) => void;
  setTotalDistance: (totalDistance: number) => void;
  setNbActivities: (nbActivities: number) => void;
  setMostDay: (mostDay: string) => void;
  setLeastDay: (leastDay: string) => void;
  setMostDayCount: (mostDayCount: number) => void;
  setLeastDayCount: (leastDayCount: number) => void;
}

export const useInsightsStore = create<InsightsInterface>((set) => ({
  longestStreak: null,
  longestBreak: null,
  totalDuration: null,
  totalDistance: null,
  nbActivities: null,
  mostDay: "",
  leastDay: "",
  mostDayCount: 0,
  leastDayCount: 0,

  setLongestStreak: (longestStreak) => set({ longestStreak }),
  setLongestBreak: (longestBreak) => set({ longestBreak }),
  setTotalDuration: (totalDuration) => set({ totalDuration }),
  setTotalDistance: (totalDistance) => set({ totalDistance }),
  setNbActivities: (nbActivities) => set({ nbActivities }),
  setMostDay: (mostDay) => set({ mostDay }),
  setLeastDay: (leastDay) => set({ leastDay }),
  setMostDayCount: (mostDayCount) => set({ mostDayCount }),
  setLeastDayCount: (leastDayCount) => set({ leastDayCount }),
}));
