import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PreferencesInterface {
  tasksView: "kanban" | "table";
  timerBg:
    | "default"
    | "midnight"
    | "zinc"
    | "forest"
    | "ocean"
    | "plum"
    | "espresso"
    | "wine"
    | "desert"
    | "indigo"
    | "rose"
    | "teal";
  timerSound:
    | "default"
    | "rain"
    | "ocean"
    | "night"
    | "forest"
    | "cafe"
    | "white";

  setView: (view: "kanban" | "table") => void;
  setTimerBg: (bg: PreferencesInterface["timerBg"]) => void;
  setTimerSound: (sound: PreferencesInterface["timerSound"]) => void;
}

export const usePreferences = create<PreferencesInterface>()(
  persist(
    (set) => ({
      tasksView: "kanban",
      timerBg: "default",
      timerSound: "default",

      setView: (view) => set({ tasksView: view }),
      setTimerBg: (bg) => set({ timerBg: bg }),
      setTimerSound: (sound) => set({ timerSound: sound }),
    }),
    { name: "bedrock-prefs" },
  ),
);
