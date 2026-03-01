import { TimerIcon } from "lucide-react";
import CardHeading from "./CardHeading";
import TimerWidgetController from "./TimerWidgetController";
import TimerWidgetDisplay from "./TimerWidgetDisplay";

const PomodoroWidget = () => {
  return (
    <div
      className={`max-md:min-h-100 bg-primary-foreground dark:bg-sidebar-border dark:-sidebar-border dark:shadow-zinc-800/25  shadow-zinc-300/50 shadow-lg border border-zinc-400/40 dark:border-zinc-600/50 rounded-xl p-6 h-64 space-y-6`}
    >
      <CardHeading Icon={TimerIcon}>Quick actions</CardHeading>

      <div className={`flex flex-col h-4/5 justify-around`}>
        {/* Time Display */}
        <TimerWidgetDisplay />

        {/* Compact Controls */}
        <TimerWidgetController />
      </div>
    </div>
  );
};

export default PomodoroWidget;
