"use client";

import { usePomodoroStore } from "@/store/usePomodoroStore";
import PomodoroHeader from "./_components/PomodoroHeader";
import Timer from "./_components/Timer";

const PomodoroPage = () => {
  const { background } = usePomodoroStore();
  console.log(background);

  return (
    <div
      className={`h-full transition-all duration-700 space-y-14 items-center justify-center p-6 ${background} rounded-xl`}
    >
      {/* Pomodoro Header */}
      <PomodoroHeader />

      {/* Timer */}
      <Timer />
    </div>
  );
};

export default PomodoroPage;
