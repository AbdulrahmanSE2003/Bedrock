"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useTaskStore } from "@/store/useTaskStore";
import { cn } from "@/lib/utils";

const TableView = () => {
  const { tasks } = useTaskStore();

  // ألوان الـ Priority (هادية ومريحة)
  const priorityColors = {
    High: "text-red-600 bg-red-50 dark:bg-red-950/30 dark:text-red-400 border-red-200 dark:border-red-900",
    Medium:
      "text-amber-600 bg-amber-50 dark:bg-amber-950/30 dark:text-amber-400 border-amber-200 dark:border-amber-900",
    Low: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900",
  };

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
            <TableRow
              key={task.id}
              className="group hover:bg-zinc-50/50 dark:hover:bg-zinc-900/40 transition-colors"
            >
              <TableCell className="text-center pl-0">
                <Checkbox
                  defaultChecked={task.status === "done"}
                  className="transition-colors duration-300"
                />
              </TableCell>

              <TableCell
                className={cn(
                  "font-medium text-zinc-900 dark:text-zinc-100",
                  task.status === "done" ? "line-through" : "",
                )}
              >
                {task.title}
              </TableCell>

              <TableCell>
                <Badge
                  variant="outline"
                  className="capitalize font-normal border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400"
                >
                  {task.status.replace("-", " ")}
                </Badge>
              </TableCell>

              <TableCell>
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-bold border",
                    priorityColors[
                      task.priority as keyof typeof priorityColors
                    ],
                  )}
                >
                  {task.priority}
                </span>
              </TableCell>

              <TableCell className="text-right">
                <span className="text-xs font-mono text-zinc-500 capitalize tracking-tighter">
                  {task.source === "local" ? "Bedrock" : task.source}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableView;
