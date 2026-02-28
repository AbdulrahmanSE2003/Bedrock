import { clsx, type ClassValue } from "clsx";
import { format, subDays } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
    notify.play().catch((e) => console.log("Notify fail (Need user interaction first)", e));
  }
}
