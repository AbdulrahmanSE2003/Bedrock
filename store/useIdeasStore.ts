import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Idea {
  id: string;
  title: string;
  desc: string;
  completed: boolean;
}

interface IdeasState {
  ideas: Idea[];
  addIdea: (title: string, desc: string) => void;
  toggleIdea: (id: string) => void;
  deleteIdea: (id: string) => void;
}

export const useIdeasStore = create<IdeasState>()(
  persist(
    (set) => ({
      ideas: [],
      addIdea: (title, desc) =>
        set((state) => ({
          ideas: [
            ...state.ideas,
            { id: crypto.randomUUID(), title, desc, completed: false },
          ],
        })),
      toggleIdea: (id) =>
        set((state) => ({
          ideas: state.ideas.map((idea) =>
            idea.id === id ? { ...idea, completed: !idea.completed } : idea,
          ),
        })),
      deleteIdea: (id) =>
        set((state) => ({
          ideas: state.ideas.filter((idea) => idea.id !== id),
        })),
    }),
    { name: "bedrock-roadmap" },
  ),
);
