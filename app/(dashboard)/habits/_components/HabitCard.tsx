import CustomHeatmap from "./CustomHeatmap";
import { type Habit } from "./Habits";

const HabitCard = (habit: Habit) => {
  console.log(habit.name);

  return (
    <div className="p-6 border rounded-2xl bg-background shadow-sm flex items-center justify-between">
      <div>
        <h3 className="font-bold text-lg" style={{ color: habit.color }}>
          {habit.name}ss
        </h3>
        <p className="text-sm text-gray-400">
          Streak: {habit.habit_logs?.length} days
        </p>
      </div>

      {/* <CustomHeatmap logs={habit.habit_logs} baseColor={habit.color} /> */}
    </div>
  );
};

export default HabitCard;
