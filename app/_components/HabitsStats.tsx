import { Sprout } from "lucide-react";
import CardHeading from "./CardHeading";
import { getHabits } from "@/actions/supabase/data";
import { Habit } from "@/types/habits";
import HabitWidget from "./HabitWidget";

const HabitsStats = async () => {
  const habits: Habit[] = await getHabits();
  const firstThreeHabits = habits.slice(0, 3);

  return (
    <div
      className={`max-md:min-h-100 bg-primary-foreground dark:-sidebar-border  dark:shadow-zinc-800/25  shadow-zinc-300/50 shadow-lg border border-zinc-400/40 dark:border-zinc-600/50 rounded-xl p-6 h-64 md:col-span-2 flex flex-col gap-3 `}
    >
      <CardHeading Icon={Sprout}>Habits Progress</CardHeading>

      <div className={`grid grid-cols-3 gap-6 h-full`}>
        {/* habits Card */}
        {firstThreeHabits.map((habit) => (
          <HabitWidget key={habit.id} habit={habit} />
        ))}
      </div>
    </div>
  );
};

export default HabitsStats;
