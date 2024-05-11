import { LongestBreak, LongestStreak } from "@/actions/insight.lib";
import { create } from "zustand";

interface InsightsInterface {
  longestStreak: LongestStreak | null;
  setLongestStreak: (longestStreak: LongestStreak | null) => void;
  longestBreak: LongestBreak | null;
  setLongestBreak: (longestBreak: LongestBreak | null) => void;
  duration: number;
  setDuration: (duration: number) => void;
  distance: number;
  setDistance: (distance: number) => void;
  activities: number;
  setActivities: (activities: number) => void;
}

export const useInsightsStore = create<InsightsInterface>((set) => ({
  longestStreak: null,
  setLongestStreak: (longestStreak) => set({ longestStreak }),
  longestBreak: null,
  setLongestBreak: (longestBreak) => set({ longestBreak }),
  duration: 0,
  setDuration: (duration) => set({ duration }),
  distance: 0,
  setDistance: (distance) => set({ distance }),
  activities: 0,
  setActivities: (activities) => set({ activities }),
}));
