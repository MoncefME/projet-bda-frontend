import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: Date): string => {
  return date.toISOString().split("T")[0];
};

export const convertSpeedToPace = (speed: number): string => {
  const pace = 1000 / speed / 60;
  const minutes = Math.floor(pace);
  const seconds = Math.round((pace - minutes) * 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export const formatDistance = (distance: number): string => {
  return (distance / 1000).toFixed(2);
};

export const formatDuration = (duration: number): string => {
  // if hours is 0, don't show it
  // show minutes and seconds always

  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  if (hours === 0) {
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  return `${hours}:${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export const formatCalories = (calories: number): string => {
  return calories.toFixed(0);
};

type DateRange = {
  startDate: string;
  endDate: string;
};

export const getDateRange = (params: { slug?: string[] }): DateRange => {
  const { slug } = params;

  let startDate: string;
  let endDate: string;

  if (!slug || slug.length === 0) {
    startDate = "0000-01-01";
    endDate = "9999-12-31";
  } else if (slug.length === 1) {
    const year = slug[0];
    startDate = `${year}-01-01`;
    endDate = `${year}-12-31`;
  } else if (slug.length === 2) {
    const year = slug[0];
    const month = slug[1].padStart(2, "0");
    startDate = `${year}-${month}-01`;

    const endDay = new Date(parseInt(year), parseInt(month), 0).getDate();
    endDate = `${year}-${month}-${endDay}`;
  } else {
    throw new Error("Invalid slug format");
  }

  return { startDate, endDate };
};
