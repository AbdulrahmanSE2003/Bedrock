"use client";

import { Button } from "@/components/ui/button";
import { usePomodoroStore } from "@/store/usePomodoroStore";
import { Play, Pause, RotateCcw } from "lucide-react";

const TimerWidgetController = () => {
  const { isActive, toggleActive, resetTimer } = usePomodoroStore();
  return (
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
  );
};

export default TimerWidgetController;
