"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Activity = {
  id: string;
  activityId: number;
  title: string;
  distance: number;
  duration: string;
  date: string;
  pace: string;
  calories: number;
};

export const columns: ColumnDef<Activity>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "distance",
    header: "Distance",
  },
  {
    accessorKey: "duration",
    header: "Duration",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "pace",
    header: "Pace",
  },
  {
    accessorKey: "calories",
    header: "Calories",
  },
];
