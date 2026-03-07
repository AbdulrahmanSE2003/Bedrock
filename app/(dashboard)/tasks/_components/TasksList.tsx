"use client";

import { useEffect } from "react";
import { Task } from "@/types/tasks";
import { useTaskStore } from "@/store/useTaskStore";
import { useSearchParams } from "next/navigation";
import TableView from "./TableView";
import KanbanBoard from "./KanbanBoard";

const TasksList = ({ tasks }: { tasks: Task[] }) => {
  const { setTasks } = useTaskStore();
  const searchparams = useSearchParams();

  useEffect(() => {
    setTasks(tasks);
  }, [tasks, setTasks]);

  const currentView = searchparams.get("view") || "kanban";
  return <div>{currentView === "table" ? <TableView /> : <KanbanBoard />}</div>;
};

export default TasksList;
