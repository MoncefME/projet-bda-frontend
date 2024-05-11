import { Activity } from "@/components/activitiesTable/columns";
import { create } from "zustand";

interface ActivitiesStore {
  activities: Activity[];
  setActivities: (activities: Activity[]) => void;
  startDay: Date;
  setStartDay: (date: Date) => void;
  endDay: Date;
  setEndDay: (date: Date) => void;
}

export const useActivitiesStore = create<ActivitiesStore>((set) => ({
  activities: [],
  setActivities: (activities) => set({ activities }),
  startDay: new Date(),
  setStartDay: (date) => set({ startDay: date }),
  endDay: new Date(),
  setEndDay: (date) => set({ endDay: date }),
}));
