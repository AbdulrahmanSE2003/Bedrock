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
      ideas: [
        {
          id: "1",
          completed: false,
          title: "Control tasks from table view",

          desc: "إدارة المهام وتعديل حالتها مباشرة من جدول بيانات مرن وسريع بدل الكانبان.",
        },

        {
          id: "2",
          completed: false,
          title: "Salah and adhkar reminder",

          desc: "نظام تنبيهات ذكي للصلاة والأذكار مدمج داخل بيئة العمل لضمان البركة في الوقت.",
        },

        {
          id: "3",
          completed: false,
          title: "Trello integration",

          desc: "إمكانية استيراد المهام والمشاريع من Trello بضغطة زر واحدة لتسهيل الانتقال لمنصتنا.",
        },

        {
          id: "4",
          completed: false,
          title: "Desktop App",

          desc: "تحويل المنصة لتطبيق سطح مكتب باستخدام Electron لتجربة أسرع وأداء أفضل على Zorin OS.",
        },

        {
          id: "5",
          completed: false,
          title: "Content creation with AI",

          desc: "مساعد ذكي يولد أفكاراً للمحتوى ويجهز مسودات المنشورات بناءً على أهدافك.",
        },

        {
          id: "6",
          completed: false,
          title: "Task Prioritization AI", // عدلت العنوان عشان ميتكررش

          desc: "استخدام Gemini لتحليل أهمية المهام وترتيبها تلقائياً بناءً على المواعيد النهائية.",
        },

        {
          id: "7",
          completed: false,
          title: "Offline working",

          desc: "دعم وضع الأوفلاين (PWA) بحيث تقدر تشتغل وتضيف مهام حتى لو النت فصل في أي وقت.",
        },

        {
          id: "8",
          completed: false,
          title: "Counting work timer",

          desc: "عداد زمني (Pomodoro) لحساب الوقت الفعلي المستهلك في كل مهمة بدقة.",
        },

        {
          id: "9",
          completed: false,
          title: "Dynamic background for timer",

          desc: "خلفيات حية ومريحة للعين (Lo-fi vibes) تتغير حسب حالة التايمر ونوع المهمة.",
        },
      ],
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
