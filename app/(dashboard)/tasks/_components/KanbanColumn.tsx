import { Plus } from "lucide-react";
import TaskCard from "./TaskCard";

const mockTasks = [
  {
    id: "1",
    title: "Finish the Kanban UI integration",
    priority: "High",
    source: "local",
    status: "backlog",
  },
  {
    id: "2",
    title: "Sync Google Tasks API with Supabase",
    priority: "Medium",
    source: "google",
    status: "in-progress",
  },
  {
    id: "3",
    title: "Fix Tailwind v4 compiler issues",
    priority: "High",
    source: "local",
    status: "backlog",
  },
  {
    id: "4",
    title: "Research Zustand persist middleware",
    priority: "Low",
    source: "google",
    status: "in-review",
  },
  {
    id: "5",
    title: "Design a better TaskCard component",
    priority: "Medium",
    source: "local",
    status: "done",
  },
];

const KanbanColumn = ({ title }: { title?: string }) => {
  return (
    <div
      className={`space-y-4 border border-zinc-400/80 dark:border-zinc-900 p-2.5 rounded-md`}
    >
      {/* Column Controls */}
      <div className={`flex flex-col gap-2`}>
        {/* Column Header */}
        <h3
          className={`font-semibold p-1.5 rounded-sm bg-zinc-200/50 dark:bg-zinc-900`}
        >
          {title}
        </h3>
        {/* Add Task */}

        <button
          className={`text-left bg-transparent 
                border border-zinc-400/80 dark:border-zinc-700 hover:border-zinc-500 dark:hover:border-zinc-300 
                rounded-sm p-1.5 font-medium text-sm text-zinc-600 flex justify-start items-center cursor-pointer transition-colors duration-500 group`}
        >
          <Plus
            className={`stroke-zinc-400/80 dark:stroke-zinc-700 group-hover:stroke-zinc-600 dark:group-hover:stroke-zinc-300 transition-colors duration-500`}
          />
          <span
            className={`text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-zinc-300 transition-colors duration-500`}
          >
            Add Task
          </span>
        </button>
      </div>

      {/* Column Tasks */}
      <div className={`flex flex-col gap-2.5 overflow-y-auto max-h-110`}>
        {mockTasks.map((task, i) => (
          <TaskCard key={i} task={task} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
