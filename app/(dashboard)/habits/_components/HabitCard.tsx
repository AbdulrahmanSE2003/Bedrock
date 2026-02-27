import CustomHeatmap from "./CustomHeatmap";
import { type Habit } from "./Habits";

type HabitCardProps = {
  habit: Habit;
};

const HabitCard = ({ habit }: HabitCardProps) => {
  console.log(habit.habit_logs);

  return (
    <div className="p-6 border rounded-2xl bg-background shadow-sm flex flex-col gap-3 items-start justify-between">
      <div>
        <h3 className="font-bold text-lg">
          Habit: <span style={{ color: habit.color }}>{habit.name}</span>
        </h3>
        <p className="text-sm text-gray-400">
          {/* TODO: fix streak logic */}
          Streak:
          {/* {habit.habit_logs?.length} days */}
        </p>
      </div>

      <CustomHeatmap logs={habit.habit_logs} baseColor={habit.color} />
    </div>
  );
};

export default HabitCard;
