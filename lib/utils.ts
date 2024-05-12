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
