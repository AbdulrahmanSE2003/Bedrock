import { clsx, type ClassValue } from "clsx";
import { format, subDays } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const priorityOrder = { low: 1, medium: 2, high: 3 };

export const getSortedTasks = (tasks: Task[], sortMethod: string) => {
  if (sortMethod === "default") return tasks;

  const sorted = [...tasks];

  switch (sortMethod) {
    case "priority-asc":
      return sorted.sort(
        (a, b) =>
          priorityOrder[a.priority as keyof typeof priorityOrder] -
          priorityOrder[b.priority as keyof typeof priorityOrder],
      );

    case "priority-desc":
      return sorted.sort(
        (a, b) =>
          priorityOrder[b.priority as keyof typeof priorityOrder] -
          priorityOrder[a.priority as keyof typeof priorityOrder],
      );
  }
  return sorted;
};
const now = new Date();

export const getProgress = (type: "year" | "month" | "week") => {
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

export function calculateStreak(logs: { completed_at: string }[]) {
  if (!logs || logs.length === 0) return 0;

  const completedDates = new Set(
    logs.map((log) => format(new Date(log.completed_at), "yyyy-MM-dd")),
  );

  let streak = 0;
  const currentDate = new Date();

  const todayStr = format(currentDate, "yyyy-MM-dd");
  const yesterdayStr = format(subDays(currentDate, 1), "yyyy-MM-dd");

  if (!completedDates.has(todayStr) && !completedDates.has(yesterdayStr)) {
    return 0;
  }

  let checkDate = completedDates.has(todayStr)
    ? currentDate
    : subDays(currentDate, 1);

  while (completedDates.has(format(checkDate, "yyyy-MM-dd"))) {
    streak++;
    checkDate = subDays(checkDate, 1);
  }

  return streak;
}

export function bell() {
  if (typeof window !== "undefined") {
    const notify = new Audio("/sounds/notification.wav");
    notify
      .play()
      .catch((e) =>
        console.log("Notify fail (Need user interaction first)", e),
      );
  }
}

// Defaults
export const BACKGROUND_MAP = {
  default: "bg-background",
  midnight: "bg-slate-950",
  zinc: "bg-zinc-900",
  forest: "bg-[#052e16]",
  ocean: "bg-[#082f49]",
  plum: "bg-[#2e1065]",
  espresso: "bg-[#1c1917]",
  wine: "bg-[#450a0a]",
  desert: "bg-[#422006]",
  indigo: "bg-indigo-950",
  rose: "bg-rose-950",
  teal: "bg-teal-950",
} as const;

export const SOUNDS = [
  "default",
  "rain",
  "ocean",
  "night",
  "forest",
  "cafe",
  "white",
] as const;
