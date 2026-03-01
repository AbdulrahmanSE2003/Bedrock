"use client";

import { useSearchParams } from "next/navigation";
import KanbanBoard from "./KanbanBoard";

const TasksList = () => {
  const searchparams = useSearchParams();

  const currentView = searchparams.get("view") || "kanban";
  return (
    <div>
      {currentView === "table" ? (
        <div>table</div>
      ) : currentView === "database" ? (
        <div>database</div>
      ) : (
        <KanbanBoard />
      )}
    </div>
  );
};

export default TasksList;
