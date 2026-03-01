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

const TableView = () => {
  const { tasks } = useTaskStore();

  return (
    <div className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50">
      <Table>
        <TableHeader className="bg-zinc-50/50 dark:bg-zinc-900/50">
          <TableRow>
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
          {tasks.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableView;
