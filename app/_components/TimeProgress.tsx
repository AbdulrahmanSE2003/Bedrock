import { getProgress } from "@/lib/utils";
import CardHeading from "./CardHeading";
import ProgressBar from "./ProgressBar";
import { Circle } from "lucide-react";

const getRemainingText = (label: string, value: number) => {
  const now = new Date();

  if (label === "Year") {
    const isLeap = new Date(now.getFullYear(), 1, 29).getMonth() === 1;
    const totalDays = isLeap ? 366 : 365;
    return `${Math.round(totalDays - (value / 100) * totalDays)} days left`;
  }

  if (label === "Month") {
    // حساب عدد أيام الشهر الحالي بدقة (فبراير وغيره)
    const daysInMonth = new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      0,
    ).getDate();
    return `${Math.round(daysInMonth - (value / 100) * daysInMonth)} days left`;
  }

  if (label === "Week") {
    return `${7 - Math.round((value / 100) * 7)} days left`;
  }
  return "";
};

const getCustomWeekProgress = () => {
  const now = new Date();
  const day = (now.getDay() + 1) % 7;
  const hours = now.getHours();
  return ((day + hours / 24) / 7) * 100;
};

const TimeProgress = () => {
  const now = new Date();
  const daysInMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
  ).getDate();

  const data = [
    { label: "Year", value: getProgress("year") },
    {
      label: "Month",
      value: (now.getDate() / daysInMonth) * 100,
    },
    {
      label: "Week",
      value: getCustomWeekProgress(),
    },
  ];

  return (
    <div
      className={`bg-primary-foreground dark:bg-sidebar-border dark:shadow-zinc-800/25 shadow-zinc-300/50 shadow-lg border border-zinc-400/40 dark:border-zinc-600/50 rounded-xl p-6 space-y-4`}
    >
      <div className="flex justify-between items-center mb-6">
        <CardHeading Icon={Circle}>Life Pace</CardHeading>
        <span className="text-[10px] font-mono text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md">
          {new Date().getFullYear()} STATUS
        </span>
      </div>

      {/* Progress Section */}
      <div className="space-y-4">
        {data.map((progress) => (
          <div key={progress.label} className="group ">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{progress.label}</span>
                <span className="text-[11px] text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {getRemainingText(progress.label, progress.value)}
                </span>
              </div>
              <span className="text-xs font-mono text-zinc-500">
                {Math.round(progress.value)}%
              </span>
            </div>

            <ProgressBar value={progress.value} />
          </div>
        ))}
      </div>

      {/* Quote */}
      <div>
        <p className="text-[11px] text-zinc-500 italic text-center">
          &quot;Make every second count.&quot;
        </p>
      </div>
    </div>
  );
};

export default TimeProgress;
