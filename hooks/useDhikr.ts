// hooks/useDhikrTimer.ts
"use client";

import { dhikrsList } from "@/store/useDhikrStore";
import { useEffect, useCallback } from "react";

export const useDhikr = (onNotify: (message: string) => void) => {
  const triggerRandomDhikr = useCallback(() => {
    const randomIdx = Math.floor(Math.random() * dhikrsList.length);
    onNotify(dhikrsList[randomIdx]);
  }, [onNotify]);

  useEffect(() => {
    const minMinutes = 1;
    const maxMinutes = 10;
    const randomTime =
      Math.floor(Math.random() * (maxMinutes - minMinutes + 1) + minMinutes) *
      60 *
      1000;

    const interval = setInterval(() => {
      triggerRandomDhikr();
    }, randomTime);

    return () => clearInterval(interval);
  }, [triggerRandomDhikr]);
};
