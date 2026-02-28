"use client";

import { usePomodoroStore } from "@/store/usePomodoroStore";
import Timer from "./_components/Timer";
import PomodoroControls from "./_components/PomodoroControls";

const PomodoroPage = () => {
  const { background } = usePomodoroStore();
  console.log(background);

  return (
    <div
      className={`h-full transition-all duration-700 space-y-14 items-center justify-center p-2 ${background} rounded-xl`}
    >
      {/* Pomodoro Header */}
      <PomodoroControls />

      {/* Timer */}
      <Timer />
    </div>
  );
};

export default PomodoroPage;
