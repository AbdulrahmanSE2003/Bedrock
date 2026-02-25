import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getProgress = (type: "year" | "month" | "week") => {
  const now = new Date();

  if (type === "year") {
    const start = new Date(now.getFullYear(), 0, 1).getTime();
    const end = new Date(now.getFullYear() + 1, 0, 1).getTime();
    return ((now.getTime() - start) / (end - start)) * 100;
  }
  if (type === "month") {
    const start = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 1).getTime();
    return ((now.getTime() - start) / (end - start)) * 100;
  }
  const day = now.getDay(); // Sunday is 0
  return ((day + 1) / 7) * 100;
};
