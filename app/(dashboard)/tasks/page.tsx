import PageHeading from "@/app/_components/PageHeading";
import ViewMode from "./_components/ViewMode";
import TasksList from "./_components/TasksList";
import { Suspense } from "react";
import KanbanSkeleton from "./_components/KanbanSkeleton";
const page = async () => {
  return (
    <div className="flex flex-col overflow-hidden gap-3">
      <div className="flex justify-between items-center py-2">
        <PageHeading title="Tasks Board" />
        <ViewMode />
      </div>
      <Suspense fallback={<KanbanSkeleton />}>
        <TasksList />
      </Suspense>
    </div>
  );
};

export default page;
