import { Stone } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2 flex-col text-background">
      <Stone className="h-8 w-8 " strokeWidth={1.5} />
      <span className="text-2xl font-bold tracking-tight">Bedrock</span>
    </div>
  );
}
