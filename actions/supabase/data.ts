import { auth } from "@/auth";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { updatedTask } from "@/types/tasks";
import { Session } from "inspector/promises";

import { unstable_cache } from "next/cache";

export const getHabits = async () => {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) return [];

  const cachedData = await unstable_cache(
    async () => {
      const { data: habits, error } = await supabaseAdmin
        .from("habits")
        .select(`*, habit_logs(completed_at)`)
        .eq("user_id", userId);

      if (error) throw error;
      return habits;
    },
    [`habits-${userId}`],
    {
      revalidate: 86400,
      tags: [`habits-list-${userId}`],
    },
  )();

  return cachedData;
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

export const EditHabit = async (name: string, color: string, id: string) => {
  const { error } = await supabaseAdmin
    .from("habits")
    .update({
      name,
      color,
    })
    .eq("id", id);

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

export const deleteHabitAPI = async (habitId: string) => {
  const { error } = await supabaseAdmin
    .from("habits")
    .delete()
    .eq("id", habitId);

  if (error) {
    console.error(error);
    return;
  }
};

//Tasks Section
// export async function updateTask(data: updatedTask) {

// }
