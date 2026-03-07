"use client";

import { Zap } from "lucide-react";
import { EmptyState } from "../../_components/EmptyState";

const EmptyHabitsState = () => {
  return (
    <div className="max-w-2xl mx-auto border rounded-lg">
      <EmptyState
        icon={Zap}
        title="No habits tracked yet"
        description="Start your streak. Build the bedrock of your success today."
        className="py-6"
      />
    </div>
  );
};

export default EmptyHabitsState;
