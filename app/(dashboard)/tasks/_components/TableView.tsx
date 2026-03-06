"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTaskStore } from "@/store/useTaskStore";
import TaskRow from "./TaskRow";
import { useSearchParams } from "next/navigation";
import { priorityOrder } from "@/lib/utils";

const TableView = () => {
  const { tasks } = useTaskStore();
  const searchParams = useSearchParams();
  const sortMethod = searchParams.get("sortBy") || "default";
  let sortedTasks;

  if (sortMethod === "default") sortedTasks = tasks;
  else if (sortMethod === "priority-asc") {
    sortedTasks = [...tasks].sort(
      (a, b) =>
        priorityOrder[a.priority as keyof typeof priorityOrder] -
        priorityOrder[b.priority as keyof typeof priorityOrder],
    );
  } else if (sortMethod === "priority-desc") {
    sortedTasks = [...tasks].sort(
      (a, b) =>
        priorityOrder[b.priority as keyof typeof priorityOrder] -
        priorityOrder[a.priority as keyof typeof priorityOrder],
    );
  }
  return (
    <div className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50">
      <Table>
        <TableHeader className="bg-zinc-50/50 dark:bg-zinc-900/50">
          <TableRow className={` rounded-xl`}>
            <TableHead className="w-12 text-center">Check</TableHead>
            <TableHead className="font-bold text-zinc-700 dark:text-zinc-300">
              Task Title
            </TableHead>
            <TableHead className="w-32">Status</TableHead>
            <TableHead className="w-32">Priority</TableHead>
            <TableHead className="text-right w-32">Source</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {(sortedTasks || tasks).map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableView;
