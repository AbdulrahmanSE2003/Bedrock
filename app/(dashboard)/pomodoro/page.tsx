"use client";

import React, { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  Image as ImageIcon,
} from "lucide-react";

const PomodoroPage = () => {
  // Timer States
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Customization States
  const [background, setBackground] = useState("bg-background");
  const [sound, setSound] = useState("rain");

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Timer Logic
  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setIsActive(false);
          // Play notification sound here
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <div
      className={`h-full transition-all duration-700 space-y-14 items-center justify-center p-6 ${background} rounded-xl`}
    >
      <div
        className={`flex items-center justify-between max-md:flex-col max-md:gap-4`}
      >
        {/* Settings Controls */}
        <div className=" flex gap-4 w-fit bg-background backdrop-blur-md p-2 rounded-2xl border border-white/10">
          <Select onValueChange={setBackground} defaultValue={background}>
            <SelectTrigger className="w-40 bg-transparent border-none text-foreground focus:ring-0">
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
            <SelectTrigger className="w-40 bg-transparent border-none text-foreground focus:ring-0">
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

      <div className={`flex justify-center items-center flex-col`}>
        {/* Main Timer Card */}
        <Card className="bg-background backdrop-blur-xl border-white/10 p-12 rounded-[3rem] shadow-2xl flex flex-col justify-center items-center w-full max-w-md">
          <span className="text-zinc-400 text-sm font-medium tracking-widest uppercase mb-4">
            Focus Session
          </span>

          <h1 className="text-8xl font-bold tracking-tighter text-white tabular-nums mb-8">
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </h1>

          <div className="flex gap-4">
            <Button
              onClick={toggleTimer}
              size="lg"
              className="rounded-full w-24 h-24 bg-white text-black hover:bg-zinc-200 transition-transform active:scale-90 duration-700"
            >
              {isActive ? <Pause size={32} /> : <Play size={32} fill="black" />}
            </Button>

            <Button
              onClick={resetTimer}
              variant="outline"
              size="lg"
              className="rounded-full w-24 h-24 border-white/20 text-white hover:bg-white/10 transition-transform active:scale-90 duration-700"
            >
              <RotateCcw size={32} />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PomodoroPage;
