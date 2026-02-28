"use client";

import { usePomodoroStore } from "@/store/usePomodoroStore";

const TimerWidgetDisplay = () => {
  const { minutes, seconds } = usePomodoroStore();
  const timeDisplay = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div className="flex flex-col items-center my-2">
      <h2 className="text-5xl font-bold tracking-tighter tabular-nums">
        {timeDisplay}
      </h2>
    </div>
  );
};

export default TimerWidgetDisplay;
