import { Plus } from "lucide-react";
import TaskCard from "./TaskCard";
import { Droppable } from "@hello-pangea/dnd";
import { useTaskStore } from "@/store/useTaskStore";

interface Props {
  title: string;
  id: string;
}

const KanbanColumn = ({ title, id }: Props) => {
  const { tasks } = useTaskStore();
  const filteredTasks = tasks.filter((task) => task.status === title);
  return (
    <div className="space-y-5 w-full min-w-65 max-w-87.5 h-fit max-h-125 bg-zinc-50/50 dark:bg-zinc-950/20 rounded-lg border border-zinc-200 dark:border-zinc-900/50 p-3 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-1 ">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-bold text-zinc-700 dark:text-zinc-300 capitalize">
            {title}
          </h3>
          <span className="text-[10px] bg-zinc-200 dark:bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded-full font-mono">
            {tasks.length}
          </span>
        </div>
      </div>

      {/* Add Task Button */}
      <button className="flex items-center gap-2 cursor-pointer w-full p-2 mb-4 border border-dashed border-zinc-300 dark:border-zinc-800 rounded-md text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50 transition-all text-xs font-medium group">
        <Plus
          size={14}
          className="group-hover:rotate-90 transition-transform duration-300"
        />
        Add Task
      </button>

      {/* Droppable Area */}
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`flex flex-col gap-3 flex-1 h-fit min-h-1 transition-colors duration-300 rounded-md ${
              snapshot.isDraggingOver
                ? "bg-zinc-200/30 dark:bg-zinc-900/40"
                : ""
            }`}
          >
            {filteredTasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default KanbanColumn;
