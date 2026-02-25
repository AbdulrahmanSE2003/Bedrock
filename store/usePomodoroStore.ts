import { toast } from "sonner";
import { create } from "zustand";

let ambientAudio: HTMLAudioElement | null = null;

interface PomodoroState {
  minutes: number;
  seconds: number;
  isActive: boolean;
  background: string;
  sound: string;

  tick: () => void;
  toggleActive: () => void;
  resetTimer: (mins?: number) => void;
  setBackground: (bg: string) => void;
  setSound: (sd: string) => void;
  stopAmbient: () => void; // دالة مساعدة لفصل الصوت
}

export const usePomodoroStore = create<PomodoroState>((set, get) => ({
  minutes: 25,
  seconds: 0,
  isActive: false,
  background: "bg-background",
  sound: "silence",

  // دالة مخصصة لقفل الصوت تماماً
  stopAmbient: () => {
    if (ambientAudio) {
      ambientAudio.pause();
      ambientAudio.currentTime = 0;
      ambientAudio = null;
    }
  },

  tick: () => {
    const { minutes, seconds, stopAmbient } = get();

    if (seconds > 0) {
      set({ seconds: seconds - 1 });
    } else if (minutes > 0) {
      set({ minutes: minutes - 1, seconds: 59 });
    } else {
      // أول ما يخلص:
      stopAmbient(); // 1. اقفل صوت الـ Ambient فوراً
      set({ isActive: false }); // 2. وقف التايمر

      // 3. نبه المستخدم
      toast.success("Session Finished! Time for a break. ☕");
      const notify = new Audio("/sounds/notification.wav");
      notify.play().catch((e) => console.log("Notify fail", e));
    }
  },

  toggleActive: () => {
    const { isActive, sound, stopAmbient } = get();
    const nextActiveState = !isActive;

    if (nextActiveState) {
      // لو شغال ومش سايلانت، حمل وشغل الصوت
      if (sound !== "silence") {
        ambientAudio = new Audio(`/sounds/${sound}.wav`);
        ambientAudio.loop = true;
        ambientAudio.play().catch((err) => console.log("Play blocked", err));
      }
    } else {
      stopAmbient();
    }

    set({ isActive: nextActiveState });
  },

  resetTimer: (mins = 25) => {
    get().stopAmbient();
    set({
      minutes: mins,
      seconds: 0,
      isActive: false,
    });
  },

  setBackground: (bg) => set({ background: bg }),

  setSound: (newSound) => {
    const { isActive, stopAmbient } = get();
    set({ sound: newSound });

    // لو غيرت الصوت والتايمر شغال
    if (isActive) {
      stopAmbient(); // اقفل القديم
      if (newSound !== "silence") {
        ambientAudio = new Audio(`/sounds/${newSound}.wav`);
        ambientAudio.loop = true;
        ambientAudio.play();
      }
    }
  },
}));
