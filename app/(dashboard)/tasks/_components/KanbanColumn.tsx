"use client";

import { useMemo } from "react";
import { Check, Plus, Trash2 } from "lucide-react";
import { Droppable } from "@hello-pangea/dnd";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

import { useTaskStore } from "@/store/useTaskStore";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { bell, cn, getSortedTasks } from "@/lib/utils";
import { bulkDelete } from "@/actions/tasks";

import TaskCard from "./TaskCard";
import TaskModal from "./TaskModal";
import ConfirmDialog from "../../_components/ConfirmDialog";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { EmptyState } from "../../_components/EmptyState";

interface Props {
  title: string;
  id: string;
  color: string;
}

const KanbanColumn = ({ title, id, color }: Props) => {
  const tasks = useTaskStore((state) => state.tasks);
  const searchParams = useSearchParams();
  const sortMethod = searchParams.get("sortBy") || "default";

  const displayTasks = useMemo(() => {
    const filtered = tasks.filter((task) => task.status === title);
    return getSortedTasks(filtered, sortMethod);
  }, [tasks, title, sortMethod]);

  const handleBulkDelete = async () => {
    const ids = displayTasks.map((task) => task.id);

    const res = await bulkDelete(ids);

    if (res?.error) {
      toast.error("Operation failed.");
    } else {
      toast.success("Tasks deleted successfully!");
      bell();
    }
  };

  return (
    <div
      className={cn(
        "space-y-5 w-full min-w-65 h-fit max-h-132 rounded-lg border border-zinc-200 dark:border-zinc-900/50 p-3 overflow-y-auto",
        color,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-1 min-h-9">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-bold text-zinc-700 dark:text-zinc-300 capitalize">
            {title}
          </h3>
          <span className="text-[10px] bg-zinc-200 dark:bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded-full font-mono">
            {displayTasks.length}
          </span>
        </div>
        {displayTasks.length > 0 && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant={"ghost"}
                size={"icon"}
                className={`hover:text-destructive/80 transition-colors duration-300 hover:border-destructive/10 border border-zinc-300 dark:border-zinc-700`}
              >
                <Trash2 className={`size-4`} />
              </Button>
            </AlertDialogTrigger>
            <ConfirmDialog title={title} onConfirm={handleBulkDelete} />
          </AlertDialog>
        )}
      </div>

      {/* Add Task Button */}
      <Dialog>
        <DialogTrigger asChild>
          <button className="flex items-center gap-2 cursor-pointer w-full p-2 mb-4 border border-dashed border-zinc-300 dark:border-zinc-800 rounded-md text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50 transition-all text-xs font-medium group text-left">
            <Plus
              size={14}
              className="group-hover:rotate-90 transition-transform duration-300"
            />
            Add Task
          </button>
        </DialogTrigger>
        <TaskModal col={title} />
      </Dialog>

      {/* Droppable Area */}
      {displayTasks.length ? (
        <Droppable droppableId={id}>
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={cn(
                "flex flex-col gap-3 flex-1 h-fit min-h-12.5 transition-colors duration-300 rounded-md",
                snapshot.isDraggingOver && "bg-zinc-200/30 dark:bg-zinc-900/40",
              )}
            >
              {displayTasks.map((task, index) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  index={index}
                  color={color}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ) : (
        <div className="flex flex-col items-center justify-center h-full py-8 px-4 text-center border-2 border-dashed border-muted/30 rounded-2xl group hover:border-muted/50 transition-colors">
          <div className="p-3 rounded-full bg-muted/5 mb-3 group-hover:scale-110 transition-transform">
            <Check size={20} className="text-muted-foreground/40" />
          </div>
          <p className="text-[11px] font-medium text-muted-foreground/60 leading-tight">
            Your flow starts here. <br />
            Drop or add a task.
          </p>
        </div>
      )}
    </div>
  );
};

export default KanbanColumn;
