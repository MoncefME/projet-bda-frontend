import { LongestBreak, LongestStreak } from "@/actions/insight.lib";
import { create } from "zustand";

interface ActivitiesStore {
  activities: string[];
  setActivities: (activities: string[]) => void;
}

export const useActivitiesStore = create<ActivitiesStore>((set) => ({
  activities: [],
  setActivities: (activities) => set({ activities }),
}));
