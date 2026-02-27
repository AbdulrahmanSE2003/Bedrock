import { create } from "zustand";

type UserProps = {
  id: string;
  setId: (id: string) => void;
};

export const useUserStore = create<UserProps>((set) => ({
  id: "",
  setId: (id) => set({ id }),
}));
