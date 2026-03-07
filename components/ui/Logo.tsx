import { cn } from "@/lib/utils";
import { Stone } from "lucide-react";

export function Logo({ inSidebar = false }: { inSidebar?: boolean }) {
  const logoStyle = inSidebar ? "w-5 h-5 p-0" : "h-6 w-6 p-0.5";
  return (
    <div className="flex items-center gap-2 flex-col bg-sidebar p-1.5 rounded-md">
      <Stone
        className={cn("h-6 w-6 stroke-foreground", logoStyle)}
        strokeWidth={2}
      />
      {/* <span className="text-2xl font-bold tracking-tight">Bedrock</span> */}
    </div>
  );
}
