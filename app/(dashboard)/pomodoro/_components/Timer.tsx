"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { usePomodoroStore } from "@/store/usePomodoroStore";
import { Pause, Play, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

const Timer = () => {
  const [mounted, setMounted] = useState(false); // لمنع أخطاء الـ Hydration
  const { minutes, seconds, isActive, tick, toggleActive, resetTimer } =
    usePomodoroStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Timer Logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
      interval = setInterval(() => tick(), 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, tick]);

  if (!mounted) return null;

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div className="flex justify-center items-center flex-col">
      <Card className="bg-background backdrop-blur-xl border-zinc-300 dark:border-zinc-800 p-12 rounded-[3rem] shadow-2xl flex flex-col justify-center items-center w-full max-w-md">
        <span className="text-zinc-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 opacity-70">
          Focus Session
        </span>

        <h1 className="text-8xl font-bold tracking-tighter text-foreground tabular-nums mb-8">
          {formattedTime}
        </h1>

        <div className="flex gap-6">
          <Button
            onClick={toggleActive}
            size="lg"
            className="rounded-full w-20 h-20 bg-foreground text-background hover:scale-105 transition-all active:scale-95 duration-300"
          >
            {isActive ? (
              <Pause size={28} className="fill-current" />
            ) : (
              <Play size={28} className="fill-current ml-1" /> // الترحيل البسيط ده بيخلي شكل أيقونة الـ Play في النص بالظبط
            )}
          </Button>

          <Button
            onClick={() => resetTimer(25)} // تمرير 25 كقيمة افتراضية
            variant="outline"
            size="lg"
            className="rounded-full w-20 h-20 border-zinc-300 dark:border-zinc-700 text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all active:scale-95 duration-300"
          >
            <RotateCcw size={28} />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Timer;
