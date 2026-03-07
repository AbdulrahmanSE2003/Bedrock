"use client";

import { Sprout } from "lucide-react";
import CardHeading from "../../_components/CardHeading";
import { EmptyState } from "../../_components/EmptyState";

const EmptyHabitWidgetState = () => {
  return (
    <div
      className={`max-md:min-h-100 bg-primary-foreground dark:bg-sidebar-border dark:-sidebar-border  dark:shadow-zinc-800/25  shadow-zinc-300/50 shadow-lg border border-zinc-400/40 dark:border-zinc-600/50 rounded-xl p-6 h-72 md:col-span-2 flex flex-col gap-3 overflow-hidden`}
    >
      <CardHeading Icon={Sprout}>Habits Progress</CardHeading>
      <EmptyState
        icon={Sprout}
        title="Habits"
        description="Start your streak. Build your first habit today."
        className="p-6"
      />
    </div>
  );
};

export default EmptyHabitWidgetState;
