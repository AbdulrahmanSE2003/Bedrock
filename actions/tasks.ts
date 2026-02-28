import { auth } from "@/auth";

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
