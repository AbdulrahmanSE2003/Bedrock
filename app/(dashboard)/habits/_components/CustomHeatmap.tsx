"use client";

import { format, startOfYear, addDays, startOfToday } from "date-fns";

interface Props {
  logs: { completed_at: string }[];
  baseColor: string;
}

export default function CustomHeatmap({ logs, baseColor }: Props) {
  const firstDayOfYear = startOfYear(new Date());

  const days = Array.from({ length: 365 }, (_, i) =>
    addDays(firstDayOfYear, i),
  );

  return (
    <div className="flex flex-col gap-2 overflow-x-auto pb-2">
      <div className="grid grid-flow-col grid-rows-7 gap-1 w-max">
        {days.map((day) => {
          const dateStr = format(day, "yyyy-MM-dd");

          const isDone = logs.some((log) => {
            return log.completed_at === dateStr;
          });

          const isFuture = day > startOfToday();

          return (
            <div
              key={dateStr}
              title={`${dateStr}${isDone ? " - Done!" : ""}`}
              className={`w-3 h-3 rounded-[2px] transition-all duration-300 ${!isFuture ? "hover:scale-125 cursor-pointer" : ""}`}
              style={{
                backgroundColor: isDone ? baseColor : "rgba(85, 84, 84, 0.124)",
                opacity: isDone ? 1 : 1,
              }}
            />
          );
        })}
      </div>

      <div className="flex justify-between text-[10px] text-muted-foreground px-1 w-full">
        <span>Jan</span>
        <span>Jun</span>
        <span>Dec</span>
      </div>
    </div>
  );
}
