"use client";

import { useSearchParams } from "next/navigation";
import KanbanBoard from "./KanbanBoard";
import TableView from "./TableView";

const TasksList = () => {
  const searchparams = useSearchParams();

  const currentView = searchparams.get("view") || "kanban";
  return <div>{currentView === "table" ? <TableView /> : <KanbanBoard />}</div>;
};

export default TasksList;
