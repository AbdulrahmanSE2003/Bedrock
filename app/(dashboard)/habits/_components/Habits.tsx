import { getHabits } from "@/actions/supabase/data";
import HabitCard from "./HabitCard";

const Habits = async () => {
  const habits = await getHabits();

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 w-full">
        {habits?.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </div>
    </div>
  );
};

export default Habits;
