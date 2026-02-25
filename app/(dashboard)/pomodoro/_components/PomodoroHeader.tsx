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
          <SelectTrigger className="w-44 bg-zinc-200/50 dark:bg-zinc-900 border-none text-foreground focus:ring-0">
            <ImageIcon className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Background" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            {" "}
            {/* أضفنا max-h عشان الدروب داون متطولش أوي */}
            <SelectGroup>
              <SelectLabel className="text-[10px] uppercase tracking-widest opacity-50">
                Standard
              </SelectLabel>
              <SelectItem value="bg-background">Default System</SelectItem>
              <SelectItem value="bg-slate-950">Midnight Slate</SelectItem>
              <SelectItem value="bg-zinc-900">Zinc Charcoal</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel className="text-[10px] uppercase tracking-widest opacity-50">
                Deep Nature
              </SelectLabel>
              <SelectItem value="bg-[#052e16]">Midnight Forest</SelectItem>
              <SelectItem value="bg-[#082f49]">Ocean Abyss</SelectItem>
              <SelectItem value="bg-[#2e1065]">Royal Plum</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel className="text-[10px] uppercase tracking-widest opacity-50">
                Warm Focus
              </SelectLabel>
              <SelectItem value="bg-[#1c1917]">Warm Espresso</SelectItem>
              <SelectItem value="bg-[#450a0a]">Wine Cellar</SelectItem>
              <SelectItem value="bg-[#422006]">Desert Dusk</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel className="text-[10px] uppercase tracking-widest opacity-50">
                Vibrant
              </SelectLabel>
              <SelectItem value="bg-indigo-950">Electric Indigo</SelectItem>
              <SelectItem value="bg-rose-950">Rosewood</SelectItem>
              <SelectItem value="bg-teal-950">Deep Teal</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select onValueChange={setSound} defaultValue={sound}>
          <SelectTrigger className="w-44 bg-zinc-200/50 dark:bg-zinc-900 border-none text-foreground focus:ring-0">
            <Volume2 className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Ambient Sound" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="silence">Zen Mode</SelectItem>
            <SelectItem value="rain">Heavy Rain</SelectItem>
            <SelectItem value="ocean">Ocean Waves</SelectItem>
            <SelectItem value="night">Late Night</SelectItem>
            <SelectItem value="forest">Dark Forest</SelectItem>
            <SelectItem value="cafe">Cozy Cafe</SelectItem>
            <SelectItem value="white">White Noise</SelectItem>
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
