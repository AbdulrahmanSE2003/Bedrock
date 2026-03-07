import PageHeading from "@/app/_components/PageHeading";
import ViewMode from "./_components/ViewMode";
import TasksList from "./_components/TasksList";
import SortBy from "./_components/SortBy";
import GoogleTasksFetch from "./_components/GoogleTasksFetch";
import { fetchAllTasks } from "@/actions/tasks";
import { Task } from "@/types/tasks";
import KanbanSkeleton from "./_components/KanbanSkeleton";
import { Suspense } from "react";

const Page = async() => {
      const tasks = (await fetchAllTasks()) as Task[];


  if (!tasks) return <KanbanSkeleton />;
  return (
    <div className="flex flex-col overflow-hidden gap-3">
      {/* Wrap everything that might use useSearchParams inside this Suspense
       */}
      <Suspense fallback={<KanbanSkeleton />}>
        <div className="flex justify-between items-center py-2">
          <PageHeading title="Tasks Board" />
          <div className="flex gap-3">
            <GoogleTasksFetch />
            <SortBy />
            <ViewMode />
          </div>
        </div>
        <TasksList tasks={tasks} />
      </Suspense>
    </div>
  );
};

export default Page;
