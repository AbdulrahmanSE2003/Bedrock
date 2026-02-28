import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Task } from "@/types/tasks";

const TaskCard = ({ task }: { task: Task }) => {
  const priorityClass = `${task.priority === "High" ? "bg-red-500" : task.priority === "Low" ? "bg-emerald-500" : "bg-amber-500"}`;
  const sourceClass = `${task.source === "local" ? "bg-gray-700" : task.source === "Google" ? "bg-blue-700" : "bg-indigo-700"}`;
  return (
    <Card
      className={`bg-transparent py-5 px-4 rounded-sm flex items-start gap-3 border-zinc-400/60 dark:border-zinc-900 hover:border-zinc-400/75 dark:hover:border-zinc-700 transition-colors duration-300 cursor-grab group`}
    >
      <div
        className={`w-full flex justify-between items-center dark:opacity-65`}
      >
        {/* Priority */}
        <Badge className={cn(priorityClass)}>{task.priority}</Badge>
        {/* Source */}
        <div className={`flex items-center gap-1.5`}>
          <div className={cn(` w-1.5 h-1.5 rounded-full`, sourceClass)} />
          <span className={`text-foreground tracking-wide text-xs`}>
            {task.source === "local" ? "Bedrock" : task.source}
          </span>
        </div>
      </div>
      <div className={`flex justify-between gap-3 items-start`}>
        <Checkbox
          className={`mt-2 transition-all duration-300 opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 `}
        />
        <p
          className={`transition-all duration-300 -translate-x-5 group-hover:translate-x-0 `}
        >
          Lorem ipsum dolor, sit amet consectetu
        </p>
      </div>
    </Card>
  );
};

export default TaskCard;
