"use server";

import { auth } from "@/auth";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { revalidatePath } from "next/cache";

export const updateUserSettings = async (userName: string, bio: string) => {
  try {
    const session = await auth();
    const userId = session?.user?.id;

    if (!userId) {
      return { error: "You must be logged in" };
    }

    const { error } = await supabaseAdmin
      .from("users")
      .update({ name: userName, bio: bio })
      .eq("id", userId)
      .select();

    if (error) {
      console.error(error);
    }

    revalidatePath("/settings");
    return { success: "Settings updated successfully!" };
  } catch (error) {
    console.error(error);
    return {
      error: "Operation failed.",
    };
  }
};
