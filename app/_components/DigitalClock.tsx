"use client";

import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time
    .toLocaleTimeString("en-US", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace("AM", "")
    .replace("PM", "");

  const amPm = time.getHours() >= 12 ? "PM" : "AM";

  return (
    <div className="flex flex-col items-end justify-center py-4">
      <div className="flex items-end gap-2">
        <h1 className="text-2xl font-bold tracking-tighter leading-none tabular-nums text-black dark:text-white">
          {formattedTime}
        </h1>

        <span className="text-xl font-medium text-gray-400 dark:text-neutral-500 uppercase tracking-widest">
          {amPm}
        </span>
      </div>

      <p className="text-gray-400 dark:text-neutral-500 font-medium tracking-[0.2em] uppercase text-[10px] mt-2 text-end">
        {time.toLocaleDateString("en-GB", {
          weekday: "long",
          day: "numeric",
          month: "long",
        })}
      </p>
    </div>
  );
};

export default DigitalClock;
