"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams } from "next/navigation";

const KanbanSkeleton = () => {
  const columns = [1, 2, 3, 4];
  const searchParams = useSearchParams();
  const isTable = searchParams.get("view") === "table";

  if (isTable) {
    return (
      <div className="w-full space-y-4 border rounded-lg p-4 bg-white dark:bg-zinc-950">
        {/* Header Table Skeleton */}
        <div className="flex items-center space-x-4 pb-2 border-b">
          <Skeleton className="h-6 w-[30%]" />
          <Skeleton className="h-6 w-[20%]" />
          <Skeleton className="h-6 w-[20%]" />
          <Skeleton className="h-6 w-[20%]" />
        </div>
        {/* Rows Skeletons */}
        {[1, 2, 3, 4, 5].map((row) => (
          <div key={row} className="flex items-center space-x-4 py-3">
            <Skeleton className="h-5 w-[30%]" />
            <Skeleton className="h-5 w-[20%]" />
            <Skeleton className="h-5 w-[20%]" />
            <Skeleton className="h-5 w-[20%]" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-6 overflow-x-auto pb-4 h-[calc(100vh-150px)]">
      {columns.map((col) => (
        <div
          key={col}
          className="flex flex-col space-y-5 w-full min-w-65 max-w-87.5 h-fit bg-zinc-100/50 dark:bg-zinc-900/20 rounded-lg border border-zinc-200 dark:border-zinc-800/50 p-3"
        >
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-24 rounded" />
              <Skeleton className="h-4 w-6 rounded-full" />
            </div>
          </div>

          <Skeleton className="h-9 w-full rounded-md border border-dashed" />

          <div className="space-y-3">
            {[1, 2, 3].map((task) => (
              <div
                key={task}
                className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
              >
                <div className="space-y-3">
                  <Skeleton className="h-4 w-12 rounded-full" />
                  <Skeleton className="h-4 w-full rounded" />
                  <Skeleton className="h-4 w-[80%] rounded" />
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
