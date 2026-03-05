"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Image as ImageIcon, Volume2 } from "lucide-react";
import { usePreferences } from "@/store/usePreferences";
import { usePomodoroStore } from "@/store/usePomodoroStore";
import { BACKGROUND_MAP, SOUNDS } from "@/lib/utils";

const PomodoroControls = () => {
  const { timerBg, timerSound, setTimerBg, setTimerSound } = usePreferences();
  const { isActive } = usePomodoroStore();

  console.log(timerSound);

  const backgroundKeys = Object.keys(BACKGROUND_MAP);

  return (
    <div className="flex items-center justify-between max-md:flex-col max-md:gap-6 w-full">
      {/* Settings Group */}
      <div className="flex gap-3 p-1.5 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
        {/* Background Selector */}
        <Select disabled={isActive} value={timerBg} onValueChange={setTimerBg}>
          <SelectTrigger className="w-40 h-10 bg-transparent border-none focus:ring-0 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-colors capitalize">
            <div className="flex items-center gap-2 font-medium text-xs">
              <ImageIcon className="w-3.5 h-3.5 opacity-60" />
              <SelectValue placeholder="Theme" />
            </div>
          </SelectTrigger>
          <SelectContent>
            {backgroundKeys.map((key) => (
              <SelectItem className="capitalize" key={key} value={key}>
                {key}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="w-[1px] h-6 bg-zinc-300 dark:bg-zinc-700 self-center" />

        {/* Ambient Sound Selector */}
        <Select
          disabled={isActive}
          value={timerSound}
          onValueChange={setTimerSound}
        >
          <SelectTrigger className="w-40 h-10 bg-transparent border-none focus:ring-0 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-colors capitalize">
            <div className="flex items-center gap-2 font-medium text-xs">
              <Volume2 className="w-3.5 h-3.5 opacity-60" />
              <SelectValue placeholder="Ambient" />
            </div>
          </SelectTrigger>
          <SelectContent>
            {SOUNDS.map((sound) => (
              <SelectItem className="capitalize" key={sound} value={sound}>
                {sound}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Motivational Quote */}
      <div className="flex flex-col items-end max-md:items-center gap-1">
        <p className="text-sm font-medium tracking-tight">
          {isActive ? "Deep work in progress..." : "Ready to focus?"}
        </p>
        <span className="text-[11px] text-zinc-400 font-mono uppercase tracking-widest">
          Stay sharp, Abdulrahman
        </span>
      </div>
    </div>
  );
};

export default PomodoroControls;
