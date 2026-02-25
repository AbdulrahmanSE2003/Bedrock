import { create } from "zustand";

export interface Mail {
  id: string;
  subject: string;
  from: string;
  snippet: string;
}

interface MailState {
  mails: Mail[];
  setMails: (mails: Mail[]) => void;
}

export const useMailStore = create<MailState>((set) => ({
  mails: [],
  setMails: (mails) => set({ mails }),
}));
