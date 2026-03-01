import PageHeading from "@/app/_components/PageHeading";
import ViewMode from "./_components/ViewMode";
import TasksList from "./_components/TasksList";

const page = async () => {
  return (
    <div className="flex flex-col overflow-hidden gap-3">
      <div className="flex justify-between items-center py-2">
        <PageHeading title="Kanban Board" />
        <ViewMode />
      </div>

      <TasksList />
    </div>
  );
};

export default page;
