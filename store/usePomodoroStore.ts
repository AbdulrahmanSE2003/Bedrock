import { bell } from "@/lib/utils";
import { toast } from "sonner";
import { create } from "zustand";
import { usePreferences } from "./usePreferences"; // استيراد المخزن الثاني

let ambientAudio: HTMLAudioElement | null = null;

interface PomodoroState {
  minutes: number;
  seconds: number;
  isActive: boolean;

  tick: () => void;
  toggleActive: () => void;
  resetTimer: (mins?: number) => void;
  stopAmbient: () => void;
  playAmbient: (soundName: string) => void;
}

export const usePomodoroStore = create<PomodoroState>((set, get) => ({
  minutes: 25,
  seconds: 0,
  isActive: false,

  stopAmbient: () => {
    if (ambientAudio) {
      ambientAudio.pause();
      ambientAudio.currentTime = 0;
      ambientAudio = null;
    }
  },

  playAmbient: (soundName: string) => {
    get().stopAmbient();
    if (soundName !== "default" && soundName !== "white") {
      ambientAudio = new Audio(`/sounds/${soundName}.wav`);
      ambientAudio.loop = true;
      ambientAudio
        .play()
        .catch((err) => console.log("Audio play blocked", err));
    }
  },

  tick: () => {
    const { minutes, seconds, stopAmbient } = get();
    if (seconds > 0) {
      set({ seconds: seconds - 1 });
    } else if (minutes > 0) {
      set({ minutes: minutes - 1, seconds: 59 });
    } else {
      stopAmbient();
      set({ isActive: false });
      toast.success("Session Finished! Time for a break. ☕");
      bell();
    }
  },

  toggleActive: () => {
    const { isActive, stopAmbient, playAmbient } = get();
    const nextActiveState = !isActive;

    // سحب الصوت المختار حالياً من الـ Preferences
    const currentSound = usePreferences.getState().timerSound;

    if (nextActiveState) {
      playAmbient(currentSound);
    } else {
      stopAmbient();
    }

    set({ isActive: nextActiveState });
  },

  resetTimer: (mins = 25) => {
    get().stopAmbient();
    set({ minutes: mins, seconds: 0, isActive: false });
  },
}));
