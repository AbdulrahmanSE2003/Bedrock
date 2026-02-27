"use server";

import { auth } from "@/auth";
import {
  addHabit,
  checkHabit,
  deleteHabitAPI,
  EditHabit,
} from "@/actions/supabase/data";
import { revalidatePath } from "next/cache";

export async function addNewHabit(formData: FormData) {
  try {
    const session = await auth();
    const userId = session?.user?.id;

    if (!userId) {
      return { error: "You must be logged in" };
    }

    const habitName = String(formData.get("habitName"));
    const color = String(formData.get("habitColor"));
    if (!habitName.trim() || !color) return;

    await addHabit(habitName, color, userId!);

    revalidatePath("/habits");
    return { success: true };
  } catch {
    return { error: "Failed to create habit" };
  }
}

export async function editHabit(habit_id: string, formData: FormData) {
  try {
    const session = await auth();
    const userId = session?.user?.id;

    if (!userId) {
      return { error: "You must be logged in" };
    }

    const habitName = String(formData.get("habitName"));
    const color = String(formData.get("habitColor"));
    if (!habitName.trim() || !color) return;

    await EditHabit(habitName, color, habit_id);

    revalidatePath("/habits");
    return { success: true };
  } catch {
    return { error: "Failed to create habit" };
  }
}

export async function checkHabitAction(habitId: string) {
  try {
    const session = await auth();
    const userId = session?.user?.id;

    if (!userId) {
      return { error: "You must be logged in" };
    }

    const today = new Date().toISOString().split("T")[0];

    await checkHabit(userId, habitId, today);

    revalidatePath("/habits");
    return { success: true };
  } catch (error) {
    console.error("Check-in error:", error);
    return { error: "Failed to log habit. Please try again." };
  }
}

export async function deleteHabit(habitId: string) {
  try {
    const session = await auth();
    const userId = session?.user?.id;

    if (!userId) {
      return { error: "You must be logged in" };
    }

    await deleteHabitAPI(habitId);
    revalidatePath("/habits");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Failed to log habit. Please try again." };
  }
}
