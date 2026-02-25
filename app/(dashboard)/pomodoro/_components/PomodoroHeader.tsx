"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Image as ImageIcon, Volume2 } from "lucide-react";
import { usePomodoroStore } from "@/store/usePomodoroStore";

const PomodoroHeader = () => {
  const { background, setBackground, sound, setSound } = usePomodoroStore();
  return (
    <div
      className={`flex items-center justify-between max-md:flex-col max-md:gap-4`}
    >
      {/* Settings Controls */}
      <div className=" flex gap-4 w-fit bg-background backdrop-blur-md p-2 rounded-2xl border border-zinc-300 dark:border-zinc-800">
        <Select onValueChange={setBackground} defaultValue={background}>
          <SelectTrigger className="w-40 bg-zinc-200/50 dark:bg-zinc-900 border-none text-foreground focus:ring-0">
            <ImageIcon className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Background" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bg-background">Solid Black</SelectItem>
            <SelectItem value="bg-zinc-950">Deep Night</SelectItem>
            <SelectItem value="bg-blue-950">Ocean Blue</SelectItem>
            <SelectItem value="bg-emerald-950">Forest Green</SelectItem>
            <SelectItem value="bg-rose-950">Sunset Glow</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setSound} defaultValue={sound}>
          <SelectTrigger className="w-40 bg-zinc-200/50 dark:bg-zinc-900 border-none text-foreground focus:ring-0">
            <Volume2 className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Ambient Sound" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rain">Heavy Rain</SelectItem>
            <SelectItem value="waves">Ocean Waves</SelectItem>
            <SelectItem value="cafe">Cozy Cafe</SelectItem>
            <SelectItem value="white-noise">White Noise</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Motivation */}
      <div className=" text-zinc-500 text-sm">
        Stay focused, Abdulrahman. You&apos;re doing great.
      </div>
    </div>
  );
};

export default PomodoroHeader;
