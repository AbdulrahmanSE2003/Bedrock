"use client";

import { Rocket, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ComingSoon = ({ featureName }: { featureName: string }) => {
  return (
    <Card className="relative overflow-hidden border-dashed border-2 bg-muted/30 opacity-80">
      {/* Background Glow Effect */}
      <div className="absolute -right-4 -top-4 text-primary/10 rotate-12">
        <Rocket size={100} />
      </div>

      <CardContent className="flex flex-col items-center justify-center p-8 text-center space-y-4">
        <Badge variant="secondary" className="animate-pulse gap-1">
          <Sparkles size={12} className="text-yellow-500" />
          Under Construction
        </Badge>
        
        <div className="space-y-2">
          <h3 className="text-xl font-bold tracking-tight">
            {featureName}
          </h3>
          <p className="text-sm text-muted-foreground max-w-[250px]">
            We&apos;re currently building this magic. Stay tuned for updates!
          </p>
        </div>

        <div className="text-xs font-mono text-primary/60 bg-primary/5 px-2 py-1 rounded">
          Coming Q2 2026
        </div>
      </CardContent>
    </Card>
  );
};

export default ComingSoon;
