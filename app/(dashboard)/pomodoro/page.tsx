"use client";

import Timer from "./_components/Timer";
import PomodoroControls from "./_components/PomodoroControls";
import { usePreferences } from "@/store/usePreferences";
import { BACKGROUND_MAP } from "@/lib/utils";

const PomodoroPage = () => {
  const { timerBg } = usePreferences();

  return (
    <div
      className={`h-full transition-all duration-700 space-y-14 items-center justify-center p-2 ${BACKGROUND_MAP[timerBg]} rounded-xl`}
    >
      {/* Pomodoro Header */}
      <PomodoroControls />

      {/* Timer */}
      <Timer />
    </div>
  );
};

export default PomodoroPage;
