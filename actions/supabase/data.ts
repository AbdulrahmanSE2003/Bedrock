import { auth } from "@/auth";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { Session } from "inspector/promises";

// Habits Section
export const getHabits = async () => {
  const session = await auth();
  const { data: habits, error } = await supabaseAdmin
    .from("habits")
    .select(`*, habit_logs(completed_at)`)
    .eq("user_id", session?.user?.id);

  if (error) {
    console.error(error);
    return;
  }

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

// Get User ID
export const getUserId = async () => {
  const session = await auth();
  const { data: users, error } = await supabaseAdmin
    .from("users")
    .select("id")
    .eq("email", session?.user?.email);

  if (error) {
    console.error(error);
    return;
  }

  return users;
};
