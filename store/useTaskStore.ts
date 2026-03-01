import { Task } from "@/types/tasks";
import { create } from "zustand";

// export const mockTasks: Task[] = [
//   {
//     id: "1",
//     title: "Finish the Kanban UI integration",
//     priority: "High",
//     source: "local",
//     status: "backlog",
//   },
//   {
//     id: "2",
//     title: "Sync Google Tasks API with Supabase",
//     priority: "Medium",
//     source: "google",
//     status: "in-progress",
//   },
//   {
//     id: "6",
//     title: "Finish Kanban Logic",
//     priority: "Medium",
//     source: "local",
//     status: "to-do",
//   },
//   {
//     id: "3",
//     title: "Fix Tailwind v4 compiler issues",
//     priority: "High",
//     source: "local",
//     status: "backlog",
//   },
//   {
//     id: "4",
//     title: "Research Zustand persist middleware",
//     priority: "Low",
//     source: "google",
//     status: "in-progress",
//   },
//   {
//     id: "5",
//     title: "Design a better TaskCard component",
//     priority: "Medium",
//     source: "local",
//     status: "done",
//   },
// ];

interface TasksInterface {
  tasks: Task[];
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  addTask: (newTask: Task) => void;
  setTasks: (tasks: Task[]) => void;
  moveTask: (taskId: string, newStatus: string, newIndex: number) => void;
}

export const useTaskStore = create<TasksInterface>((set) => ({
  tasks: [],

  isLoading: false,

  setTasks: (tasks) => set({ tasks, isLoading: false }),

  setIsLoading: (loading) => set({ isLoading: !loading }),

  addTask: (newTask: Task) =>
    set((state) => ({ tasks: [...state.tasks, newTask] })),

  moveTask: (taskId, newStatus, newIndex) =>
    set((state) => {
      const taskIndex = state.tasks.findIndex((t) => t.id === taskId);
      if (taskIndex === -1) return state;

      const newTasks = [...state.tasks];
      const [movedTask] = newTasks.splice(taskIndex, 1);

      movedTask.status = newStatus;

      newTasks.splice(newIndex, 0, movedTask);

      return { tasks: newTasks };
    }),
}));
