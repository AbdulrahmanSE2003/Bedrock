"use client";

import { useOptimistic, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { isToday } from "date-fns";
import { toast } from "sonner";
import CustomHeatmap from "./CustomHeatmap";
import { checkHabitAction } from "@/actions/habits";
import { Habit } from "@/types/habits";

type HabitCardProps = {
  habit: Habit;
};

const HabitCard = ({ habit }: HabitCardProps) => {
  const [isPending, startTransition] = useTransition();

  const [optimisticLogs, addOptimisticLog] = useOptimistic(
    habit.habit_logs,
    (state, newLog: any) => [...state, newLog],
  );

  const isTodayChecked = optimisticLogs.some((log) =>
    isToday(new Date(log.completed_at)),
  );

  const handleCheck = async () => {
    const today = new Date().toISOString();

    startTransition(async () => {
      // Immediate UI update
      addOptimisticLog({
        id: Math.random().toString(),
        completed_at: today,
      });

      try {
        const result = await checkHabitAction(habit.id);

        if (result?.error) {
          toast.error(result.error);
        } else {
          toast.success(`Progress saved for ${habit.name}!`);
        }
      } catch (err) {
        toast.error("Something went wrong with the connection.");
      }
    });
  };

  return (
    <div className="p-6 border rounded-2xl bg-background shadow-sm flex flex-col gap-3 items-start justify-between">
      <div className="flex justify-between items-center w-full">
        <div>
          <h3 className="font-bold text-lg">
            Habit: <span style={{ color: habit.color }}>{habit.name}</span>
          </h3>
          <p className="text-sm text-gray-400">
            Streak: {/* Streak logic goes here */}
          </p>
        </div>

        <Button
          onClick={handleCheck}
          disabled={isTodayChecked || isPending}
          variant="secondary"
          className="disabled:cursor-not-allowed"
        >
          {isTodayChecked ? "Checked Today" : "Check"}
          {!isTodayChecked && <CheckCircle2 className="ml-2 w-4 h-4" />}
        </Button>
      </div>

      <CustomHeatmap logs={optimisticLogs} baseColor={habit.color} />
    </div>
  );
};

export default HabitCard;
