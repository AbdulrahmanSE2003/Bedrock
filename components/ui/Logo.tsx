import { Stone } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2 flex-col bg-foreground p-1.5 rounded-md">
      <Stone className="h-6 w-6 stroke-background" strokeWidth={2} />
      {/* <span className="text-2xl font-bold tracking-tight">Bedrock</span> */}
    </div>
  );
}
