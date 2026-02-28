import { Habit } from "@/types/habits";
import { Trophy } from "lucide-react";

type HabitWidgetProps = {
  habit: Habit;
};

const HabitWidget = ({ habit }: HabitWidgetProps) => {
  const count = habit.habit_logs.length;
  return (
    <div
      key={habit.id}
      className={`bg-zinc-400 dark:bg-zinc-800 h-full rounded-xl p-4 flex flex-col items-center justify-start gap-4 capitalize  tracking-wider`}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ backgroundColor: habit.color }}
        />
        <h6 className="font-bold text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400 line-clamp-1">
          {habit.name}
        </h6>
      </div>

      <p className={`text-5xl font-semibold`}>157</p>

      {count > 0 && (
        <div className="mt-1 flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[10px] font-bold text-zinc-600 dark:text-zinc-300">
          <Trophy size={10} className="text-yellow-500" />
          KEEP GOING
        </div>
      )}
    </div>
  );
};

export default HabitWidget;
