"use server";

import { auth } from "@/auth";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { updatedTask } from "@/types/tasks";
import { revalidatePath } from "next/cache";

export async function fetchGoogleTasks() {
  const session = await auth();
  // @ts-ignore
  const token = session?.accessToken;

  if (!token) {
    return { error: "No access token found. Please sign in again." };
  }

  try {
    // 1. أول خطوة: نجيب قائمة الـ Task Lists (جوجل بتقسم التاسكات لقوائم)
    const listsRes = await fetch(
      "https://www.googleapis.com/tasks/v1/users/@me/lists",
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    const listsData = await listsRes.json();

    if (!listsRes.ok)
      throw new Error(listsData.error?.message || "Failed to fetch lists");

    // 2. نجيب التاسكات من أول قائمة (غالباً بتكون الافتراضية)
    const defaultListId = listsData.items[0].id;
    const tasksRes = await fetch(
      `https://www.googleapis.com/tasks/v1/lists/${defaultListId}/tasks`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    const tasksData = await tasksRes.json();

    return {
      listName: listsData.items[0].title,
      tasks: tasksData.items || [],
    };
  } catch (error: any) {
    console.error("Google Tasks API Error:", error);
    return { error: error.message };
  }
}

export async function fetchAllTasks() {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return { error: "You must be logged in" };
  }
  const { data: tasks, error } = await supabaseAdmin.from("tasks").select("*");

  if (error) {
    console.error(error);
    return;
  }

  return tasks;
}

export async function updateTask(
  id: string,
  newTitle: string,
  newPriority: "low" | "medium" | "high",
  newStatus: "backlog" | "to-do" | "in-progress" | "done",
) {
  try {
    const session = await auth();
    const userId = session?.user?.id;

    if (!userId) {
      return { error: "You must be logged in" };
    }

    const { error } = await supabaseAdmin
      .from("tasks")
      .update({ title: newTitle, priority: newPriority, status: newStatus })
      .eq("id", id)
      .select();

    if (error) {
      console.error(error);
      return;
    }

    revalidatePath("/tasks");
    return { success: true };
  } catch {
    return { error: "Failed to update task." };
  }
}

export async function deleteTask(id: string) {
  try {
    const session = await auth();
    const userId = session?.user?.id;

    if (!userId) {
      return { error: "You must be logged in" };
    }

    const { error } = await supabaseAdmin.from("tasks").delete().eq("id", id);

    if (error) {
      console.error(error);
      return;
    }

    revalidatePath("/tasks");
    return { success: true };
  } catch {
    return { error: "Failed to delete task." };
  }
}
