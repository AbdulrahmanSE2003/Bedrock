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

    revalidatePath("/", "layout");
    revalidatePath("/settings");
    return { success: "Settings updated successfully!" };
  } catch (error) {
    console.error(error);
    return {
      error: "Operation failed.",
    };
  }
};

export const getUserBio = async () => {
  try {
    const session = await auth();
    const userId = session?.user?.id;

    if (!userId) {
      return { error: "You must be logged in" };
    }

    const { data, error } = await supabaseAdmin
      .from("users")
      .select("bio")
      .eq("id", session.user?.id)
      .single();
    if (error) {
      console.error(error);
    }

    return data?.bio || "";
  } catch (error) {
    console.error(error);
    return {
      error: "Operation failed.",
    };
  }
};
