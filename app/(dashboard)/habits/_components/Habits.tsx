import { getHabits } from "@/actions/supabase/data";
import HabitCard from "./HabitCard";
import { EmptyState } from "../../_components/EmptyState";
import { Zap } from "lucide-react";
import EmptyHabitsState from "./EmptyHabitsState";

const Habits = async () => {
  const habits = await getHabits();

  if (!habits || habits.length === 0) {
    return <EmptyHabitsState />;
  }

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
