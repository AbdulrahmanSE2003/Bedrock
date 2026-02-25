import { getProgress } from "@/lib/utils";
import CardHeading from "./CardHeading";
import ProgressBar from "./ProgressBar";

const data = [
  { label: "Year", value: getProgress("year") },
  { label: "Month", value: getProgress("month") },
  { label: "Week", value: getProgress("week") },
];
const TimeProgress = () => {
  return (
    <div
      className={`bg-sidebar-border dark:shadow-sidebar-border shadow-zinc-300/50 shadow-lg border border-zinc-400/40 dark:border-zinc-600/50 rounded-xl p-4 h-64`}
    >
      <CardHeading>Progress-Bar</CardHeading>
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
