import { getProgress } from "@/lib/utils";
import CardHeading from "./CardHeading";
import ProgressBar from "./ProgressBar";
import { Circle } from "lucide-react";

const data = [
  { label: "Year", value: getProgress("year") },
  { label: "Month", value: getProgress("month") },
  { label: "Week", value: getProgress("week") },
];
const TimeProgress = () => {
  return (
    <div
      className={`bg-primary-foreground dark:-sidebar-border dark:shadow-zinc-800/25 shadow-zinc-300/50 shadow-lg border border-zinc-400/40 dark:border-zinc-600/50 rounded-xl p-6 h-64`}
    >
      <CardHeading Icon={Circle}>Life Pace</CardHeading>
      {/* Progress Section */}
      <div className={`mt-4 space-y-3`}>
        {data.map((progress) => (
          <ProgressBar
            key={progress.label}
            value={progress.value}
            label={progress.label}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeProgress;
