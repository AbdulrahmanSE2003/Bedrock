# 🏔️ Bedrock

**The Minimalist Workspace for High-Performance Flow.** Bedrock is a focused task management system designed to strip away the noise and help you master your daily habits and professional tasks with a clean, Apple-inspired aesthetic.

[![Status](https://img.shields.io/badge/Status-Beta-orange.svg)](https://bedrock-ysgz.vercel.app)
[![Tech Stack](https://img.shields.io/badge/Stack-MERN-blue.svg)](#-tech-stack)

---

## ✨ Key Features

- **🎯 Minimalist Kanban Board:** A distraction-free environment to manage your workflow using drag-and-drop.
- **🔄 Google Tasks Sync:** Real-time synchronization with your Google account to keep your tasks unified.
- **⚡ Habit Tracking:** Build long-term consistency with a dedicated habit tracking system and streaks.
- **🎨 Elite UI/UX:** Dark-mode first design, featuring smooth animations (Framer Motion) and a "Braun" inspired aesthetic.
- **🛡️ Secure Foundation:** Powered by Next.js 15, Supabase, and Clerk for robust authentication and data integrity.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Database & Auth:** [Supabase](https://supabase.com/) / [Clerk](https://clerk.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [Shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **External APIs:** Google Tasks API

---

## 🛠️ Installation & Setup

To run Bedrock locally on your machine (Zorin OS/Linux recommended):

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/bedrock.git](https://github.com/your-username/bedrock.git)
   cd bedrock
   ```

2. Install dependencies (using pnpm):
  ```bash
  pnpm install
  ```

3. Environment Variables:
Create a .env.local file and add your credentials:
  ```Code snippet
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
  CLERK_SECRET_KEY=...
  NEXT_PUBLIC_SUPABASE_URL=...
  NEXT_PUBLIC_SUPABASE_ANON_KEY=...
  ```

4.Run the development server:
  ```Bash
  pnpm dev
  ```

📂 Project Structure
Plaintext
├── actions/         # Server Actions (Supabase/Google API)
├── app/             # Next.js App Router (Pages & Layouts)
├── components/      # Reusable UI components (Global & Local)
├── hooks/           # Custom React hooks
├── lib/             # Utility functions & Shared logic
└── store/           # Zustand state management
📜 Changelog & Roadmap
We are currently in v1.0.0-beta.

[x] Initial Kanban implementation.

[x] Google Tasks sync.

[ ] Trello integration. (In Progress).

[ ] Advanced Productivity Analytics (Coming Soon).

<p align="center">
Built with 🖤 by <b>Abdulrahman Saad</b>


<i>Focus on what matters. Build your Bedrock.</i>
</p>
