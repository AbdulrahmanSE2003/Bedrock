import { Suspense } from "react";
import KanbanSkeleton from "./_components/KanbanSkeleton";

export default function Loading() {
  return (
    <Suspense fallback={null}>
      <KanbanSkeleton />
    </Suspense>
  );
}
