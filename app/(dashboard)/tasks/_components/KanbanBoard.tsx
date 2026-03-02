"use client";

import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import KanbanColumn from "./KanbanColumn";
import { useEffect, useState } from "react";
import { useTaskStore } from "@/store/useTaskStore";

const columns = [
  { title: "backlog", className: "bg-muted-50 dark:bg-zinc-900/50" },
  { title: "to-do", className: "bg-blue-50/80 dark:bg-blue-800/10" },
  { title: "in-progress", className: "bg-amber-100/40 dark:bg-amber-400/10" },
  { title: "done", className: "bg-emerald-50/50 dark:bg-emerald-400/10" },
];

const KanbanBoard = () => {
  const [enabled, setEnabled] = useState(false);
  const { moveTask } = useTaskStore();

  useEffect(() => {
    setEnabled(true);
  }, []);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    moveTask(draggableId, destination.droppableId, destination.index);
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
