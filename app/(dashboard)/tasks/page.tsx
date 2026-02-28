import PageHeading from "@/app/_components/PageHeading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus } from "lucide-react";
import KanbanColumn from "./_components/KanbanColumn";

const page = async () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <PageHeading title="Kanban Board" />
      </div>

      {/* Kanban */}
      <div className={`grid md:grid-cols-2 lg:grid-cols-4 items-stretch gap-4`}>
        {/* Column */}
        {["Backlog", "TO-DO", "In-Progress", "Done"].map((col, i) => (
          <KanbanColumn key={i} title={col} />
        ))}
      </div>
    </div>
  );
};

export default page;
