import { Activity } from "@/components/activitiesTable/columns";
import { create } from "zustand";

interface ActivitiesStore {
  activities: Activity[];
  setActivities: (activities: Activity[]) => void;
}

export const useActivitiesStore = create<ActivitiesStore>((set) => ({
  activities: [],
  setActivities: (activities) => set({ activities }),
}));
