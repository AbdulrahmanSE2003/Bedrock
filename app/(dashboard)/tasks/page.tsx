import PageHeading from "@/app/_components/PageHeading";
import KanbanColumn from "./_components/KanbanColumn";
import ViewMode from "./_components/ViewMode";
import KanbanBoard from "./_components/KanbanBoard";

const page = async () => {
  return (
    <div className="flex flex-col overflow-hidden gap-3">
      <div className="flex justify-between items-center py-2">
        <PageHeading title="Kanban Board" />
        <ViewMode />
      </div>

      <KanbanBoard />
    </div>
  );
};

export default page;
