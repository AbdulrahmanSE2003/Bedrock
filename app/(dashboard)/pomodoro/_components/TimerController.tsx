"use client";

import { useEffect } from "react";
import { usePomodoroStore } from "@/store/usePomodoroStore";

export default function TimerController() {
  const { tick, isActive } = usePomodoroStore();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
      interval = setInterval(() => {
        tick();
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, tick]);

  return null; // مبيظهرش حاجة في الـ UI
}
