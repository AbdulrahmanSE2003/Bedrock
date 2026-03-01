import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Task } from "@/types/tasks";
import { Draggable } from "@hello-pangea/dnd";

const TaskCard = ({ task, index }: { task: Task; index: number }) => {
  const priorities = {
    High: "bg-red-500 hover:bg-red-600",
    Medium: "bg-amber-500 hover:bg-amber-600",
    Low: "bg-emerald-500 hover:bg-emerald-600",
  };

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{ ...provided.draggableProps.style }}
          className={cn(
            "transition-shadow",
            snapshot.isDragging ? "shadow-xl z-50" : "shadow-none",
          )}
        >
          <Card
            className={cn(
              "bg-white dark:bg-zinc-950 p-4 min-h-20 rounded-md flex flex-col justify-center border-zinc-200 dark:border-zinc-900 hover:border-zinc-400/60 dark:hover:border-zinc-700 hover:bg-zinc-50/40 dark:hover:bg-zinc-900/40 transition-all duration-300 cursor-grab group overflow-hidden",
              task.status === "done" ? "opacity-50 cursor-default" : "",
            )}
          >
            {/* Header: Priority & Source */}
            <div className="w-full flex justify-between items-center mb-2">
              <Badge
                className={cn(
                  "text-[10px] px-2 py-0 h-5 font-bold border-none text-white",
                  priorities[task.priority as keyof typeof priorities],
                )}
              >
                {task.priority}
              </Badge>

              <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                <div
                  className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    task.source === "local" ? "bg-zinc-400" : "bg-blue-500",
                  )}
                />
                <span className="text-zinc-500 dark:text-zinc-400 tracking-wider text-[10px] font-bold uppercase">
                  {task.source === "local" ? "Bedrock" : task.source}
                </span>
              </div>
            </div>

            {/* Body: Checkbox & Title */}
            <div className="relative flex items-center gap-3 overflow-hidden">
              <div className="flex items-center justify-center shrink-0 transition-all duration-300 opacity-0 -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0">
                <Checkbox
                  defaultChecked={task.status === "done"}
                  className="rounded-[4px] transition-colors duration-300 border-zinc-300 dark:border-zinc-700"
                />
              </div>
              <p
                className={cn(
                  "flex-1 text-sm font-medium leading-snug text-zinc-700 dark:text-zinc-300 transition-all duration-300 -translate-x-5 group-hover:translate-x-0 line-clamp-2",
                  task.status === "done" ? "line-through" : "",
                )}
              >
                {task.title}
              </p>
            </div>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
