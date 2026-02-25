import { toast } from "sonner";
import { create } from "zustand";

interface PomodoroState {
  // (State)
  minutes: number;
  seconds: number;
  isActive: boolean;
  background: string;
  sound: string;

  // (Actions)
  tick: () => void;
  toggleActive: () => void;
  resetTimer: (mins?: number) => void;
  setBackground: (bg: string) => void;
  setSound: (sd: string) => void;
}

export const usePomodoroStore = create<PomodoroState>((set) => ({
  minutes: 0,
  seconds: 3,
  isActive: false,
  background: "bg-background",
  sound: "rain",

  tick: () =>
    set((state) => {
      if (state.seconds > 0) {
        return { seconds: state.seconds - 1 };
      } else if (state.minutes > 0) {
        return { minutes: state.minutes - 1, seconds: 59 };
      } else {
        toast.success("Session Finished! Time for a break. ☕");

        const audio = new Audio("/sounds/notification.wav");
        audio.play().catch((err) => console.log("Audio play failed:", err));

        return { isActive: false };
      }
    }),

  toggleActive: () => set((state) => ({ isActive: !state.isActive })),

  resetTimer: (mins = 25) =>
    set({
      minutes: mins,
      seconds: 0,
      isActive: false,
    }),

  setBackground: (bg) => set({ background: bg }),
  setSound: (sd) => set({ sound: sd }),
}));
