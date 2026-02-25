"use client";

import { usePomodoroStore } from "@/store/usePomodoroStore";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, TimerIcon } from "lucide-react";
import { useEffect, useState } from "react";
import CardHeading from "./CardHeading";

const PomodoroWidget = () => {
  const [mounted, setMounted] = useState(false);
  const { minutes, seconds, isActive, tick, toggleActive, resetTimer } =
    usePomodoroStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const timeDisplay = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div
      className={`max-md:min-h-100 bg-primary-foreground dark:-sidebar-border dark:shadow-zinc-800/25  shadow-zinc-300/50 shadow-lg border border-zinc-400/40 dark:border-zinc-600/50 rounded-xl p-6 h-64 space-y-6`}
    >
      <CardHeading Icon={TimerIcon}>Quick actions</CardHeading>

      <div className={`flex flex-col h-4/5 justify-around`}>
        {/* Time Display */}
        <div className="flex flex-col items-center my-2">
          <h2 className="text-5xl font-bold tracking-tighter tabular-nums">
            {timeDisplay}
          </h2>
        </div>

        {/* Compact Controls */}
        <div className="flex items-center gap-2">
          <Button
            onClick={toggleActive}
            variant={isActive ? "outline" : "default"}
            size="sm"
            className="flex-1 rounded-lg h-10 transition-all active:scale-95"
          >
            {isActive ? (
              <Pause size={18} className="mr-2" />
            ) : (
              <Play size={18} className="mr-2 fill-current" />
            )}
            {isActive ? "Pause" : "Start"}
          </Button>

          <Button
            onClick={() => resetTimer(25)}
            variant="secondary"
            size="icon"
            className="rounded-lg h-10 w-10 shrink-0 opacity-70 hover:opacity-100"
          >
            <RotateCcw size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PomodoroWidget;
