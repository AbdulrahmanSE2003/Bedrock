"use client";

import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import KanbanColumn from "./KanbanColumn";
import { useEffect, useState } from "react";
import { useTaskStore } from "@/store/useTaskStore";

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
      <div className="flex gap-4 h-full overflow-x-auto p-4">
        {["backlog", "to-do", "in-progress", "done"].map((col, i) => (
          <KanbanColumn key={i} title={col} id={col} />
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
