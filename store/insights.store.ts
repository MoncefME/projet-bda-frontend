import {
  LongestBreak,
  LongestStreak,
  getInsightsForRange,
  getLongestBreak,
  getLongestStreak,
} from "@/actions/insight.lib";
import { create } from "zustand";

interface useInsightsStoreProps {
  startDate: string;
  endDate: string;
  userId: string;
}

interface InsightsInterface {
  longestStreak: LongestStreak | null;
  longestBreak: LongestBreak | null;
  duration: number | null;
  distance: number | null;
  activities: number | null;

  fetchInsights: ({
    startDate,
    endDate,
    userId,
  }: useInsightsStoreProps) => void;
}

export const useInsightsStore = create<InsightsInterface>((set) => ({
  longestStreak: null,
  longestBreak: null,
  duration: null,
  distance: null,
  activities: null,
  fetchInsights: async ({
    startDate,
    endDate,
    userId,
  }: useInsightsStoreProps) => {
    const result = await getInsightsForRange({
      startDate,
      endDate,
      userId,
    });
    const longestStreak = await getLongestStreak();
    const longestBreak = await getLongestBreak();
    set({
      duration: result.cummulativeTime,
      distance: result.cummulativeDistance,
      activities: result.numberOfActivities,
      longestStreak,
      longestBreak,
    });
  },
}));
