import { Skeleton } from "@/components/ui/skeleton";

const KanbanSkeleton = () => {
  const columns = [1, 2, 3, 4];

  return (
    <div className="flex gap-6 overflow-x-auto pb-4 h-[calc(100vh-150px)]">
      {columns.map((col) => (
        <div
          key={col}
          className="flex flex-col space-y-5 w-full min-w-65 max-w-87.5 h-fit max-h-125 bg-zinc-100/50 dark:bg-zinc-900/20 rounded-lg border border-zinc-200 dark:border-zinc-800/50 p-3"
        >
          {/* Header Skeleton (Title + Counter) */}
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-24 rounded" /> {/* Title */}
              <Skeleton className="h-4 w-6 rounded-full" /> {/* Counter */}
            </div>
          </div>

          {/* Add Task Button Skeleton */}
          <Skeleton className="h-9 w-full rounded-md border border-dashed" />

          {/* Tasks Skeletons */}
          <div className="space-y-3">
            {[1, 2, 3].map((task) => (
              <div
                key={task}
                className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
              >
                <div className="space-y-3">
                  {/* Priority Badge */}
                  <Skeleton className="h-4 w-12 rounded-full" />
                  {/* Title Lines */}
                  <Skeleton className="h-4 w-full rounded" />
                  <Skeleton className="h-4 w-[80%] rounded" />
                  {/* Footer (Date + Avatar) */}
                  <div className="flex justify-between items-center pt-2">
                    <Skeleton className="h-3 w-16 rounded" />
                    <Skeleton className="h-6 w-6 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanSkeleton;
