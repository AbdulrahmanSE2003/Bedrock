import { getHabits } from "@/actions/supabase/data";
import HabitCard from "./HabitCard";
export type Habit = {
  name: string;
  color: string;
  habit_logs: any;
};

const Habits = async () => {
  const habits = await getHabits();
  console.log(habits);

  return (
    <div className="grid gap-6">
      {habits?.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </div>
  );
};

export default Habits;
