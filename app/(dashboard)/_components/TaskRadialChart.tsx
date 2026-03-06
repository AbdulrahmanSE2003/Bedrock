import { ChartBarIcon } from "lucide-react";
import { fetchAllTasks } from "@/actions/tasks";
import CardHeading from "./CardHeading";
import RadialChart from "./RadialChart";

export async function TaskRadialChart() {
  const tasks = await fetchAllTasks();

  if (!tasks || "error" in tasks || !Array.isArray(tasks)) {
    return (
      <div className="max-md:min-h-100 bg-primary-foreground dark:bg-sidebar-border shadow-zinc-300/50 dark:shadow-zinc-800/25 shadow-lg border border-zinc-400/40 dark:border-zinc-600/50 rounded-xl p-6 h-72 flex flex-col justify-between overflow-hidden">
        <p className="text-xs text-muted-foreground">
          Couldn&apos;t fetch tasks
        </p>
      </div>
    );
  }

  return (
    <div className="max-md:min-h-100 bg-primary-foreground dark:bg-sidebar-border shadow-zinc-300/50 dark:shadow-zinc-800/25 shadow-lg border border-zinc-400/40 dark:border-zinc-600/50 rounded-xl p-6 h-72 flex flex-col justify-between overflow-hidden">
      <CardHeading Icon={ChartBarIcon}>Task Distribution</CardHeading>

      <div className="flex-1 flex items-center justify-center">
        <RadialChart tasks={tasks} />
      </div>
    </div>
  );
}
