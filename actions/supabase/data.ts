import { auth } from "@/auth";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

// Habits Section
export const getHabits = async () => {
  const session = await auth();
  const { data: habits } = await supabaseAdmin
    .from("habits")
    .select(`*, habit_logs(completed_at)`)
    .eq("user_id", session?.user?.id);

  console.log(session?.user?.id);

  return habits;
};

export const addHabit = async (name: string, color: string, id: string) => {
  const { error } = await supabaseAdmin.from("habits").insert([
    {
      name,
      color,
      user_id: id,
    },
  ]);

  if (error) console.error(error);
};

export const checkHabit = async (
  user_id: string,
  habit_id: string,
  completed_at: string,
) => {
  const { error } = await supabaseAdmin
    .from("habit_logs")
    .insert([
      {
        user_id,
        habit_id,
        completed_at,
      },
    ])
    .select();

  if (error) console.error(error);
};
