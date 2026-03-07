"use client";

import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import KanbanColumn from "./KanbanColumn";
import { useEffect, useState } from "react";
import { useTaskStore } from "@/store/useTaskStore";
import { changeStatus } from "@/actions/tasks";
import { TaskStatus } from "@/types/tasks";

const columns = [
  { title: "backlog", className: "bg-zinc-100/50 dark:bg-zinc-800/20" },
  { title: "to-do", className: "bg-blue-100/50 dark:bg-blue-800/10" },
  { title: "in-progress", className: "bg-amber-100/50 dark:bg-amber-400/10" },
  { title: "done", className: "bg-emerald-100/50 dark:bg-emerald-800/20" },
];

const KanbanBoard = () => {
  const [enabled, setEnabled] = useState(false);
  const { moveTask } = useTaskStore();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setEnabled(true);
  }, []);

  const onDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    moveTask(
      draggableId,
      destination.droppableId as TaskStatus,
      destination.index,
    );

    if (draggableId || destination.droppableId) {
      await changeStatus(draggableId, destination.droppableId as TaskStatus);
    }
  };

  if (!enabled) return null;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-4 h-full overflow-x-auto p-4">
        {columns.map((col, i) => (
          <KanbanColumn
            key={i}
            title={col.title}
            id={col.title}
            color={col.className}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
