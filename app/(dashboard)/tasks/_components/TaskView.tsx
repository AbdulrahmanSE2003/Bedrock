"use client";

import { useTaskStore } from "@/store/useTaskStore";
import { useSearchParams } from "next/navigation";
import TableView from "./TableView";
import KanbanBoard from "./KanbanBoard";
import { Task } from "@/types/tasks";
import { useEffect } from "react";

const TaskView = ({ tasks }: { tasks: Task[] }) => {
  const { isLoading, setTasks, setIsLoading } = useTaskStore();
  const searchparams = useSearchParams();

  useEffect(() => {
    setTasks(tasks);
  }, [tasks, setTasks]);

  const currentView = searchparams.get("view") || "kanban";
  return <div>{currentView === "table" ? <TableView /> : <KanbanBoard />}</div>;
};

export default TaskView;
