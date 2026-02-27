import { Button } from "@/components/ui/button";
import CustomHeatmap from "./CustomHeatmap";
import { type Habit } from "./Habits";
import { CheckCircle2 } from "lucide-react";
import { isToday } from "date-fns";
import { auth } from "@/auth";
import { checkHabit } from "@/actions/supabase/data";
import { revalidatePath } from "next/cache";

type HabitCardProps = {
  habit: Habit;
};

const HabitCard = ({ habit }: HabitCardProps) => {
  const isTodayChecked = habit.habit_logs.some((log) =>
    isToday(new Date(log.completed_at)),
  );

  // Logic handling check today in habit
  const handleCheck = async (formData: FormData) => {
    "use server";
    console.log(new Date().toLocaleDateString());
    const habitId = habit.id;
    const day = new Date().toLocaleDateString();
    const session = await auth();

    const user_id = session?.user?.id;
    if (!user_id) return;

    await checkHabit(user_id, habitId, day);
    revalidatePath("/habits");
  };

  return (
    <div className="p-6 border rounded-2xl bg-background shadow-sm flex flex-col gap-3 items-start justify-between">
      <div className={`flex justify-between items-center w-full`}>
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
        <form action={handleCheck}>
          <input type="hidden" id="check" />
          <Button
            disabled={isTodayChecked}
            variant={"secondary"}
            className={`disabled:cursor-not-allowed`}
            // onClick={}
          >
            {isTodayChecked ? "Checked Today" : "Check"}

            {!isTodayChecked && (
              <span>
                <CheckCircle2 />
              </span>
            )}
          </Button>
        </form>
      </div>

      <CustomHeatmap logs={habit.habit_logs} baseColor={habit.color} />
    </div>
  );
};

export default HabitCard;
