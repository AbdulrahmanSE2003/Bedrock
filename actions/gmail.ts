"use server";

import { auth } from "@/auth";

export async function fetchRecentEmails() {
  const session = await auth();
  // @ts-ignore
  const token = session?.accessToken;

  if (!token) return [];

  // 1. نجيب قائمة الـ IDs
  const listRes = await fetch(
    "https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=20",
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
  const listData = await listRes.json();

  if (!listData.messages) return [];

  // 2. نجيب تفاصيل كل إيميل (Title, Sender, etc.)
  const emailDetails = await Promise.all(
    listData.messages.map(async (msg: any) => {
      const detailRes = await fetch(
        `https://gmail.googleapis.com/gmail/v1/users/me/messages/${msg.id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      const detailData = await detailRes.json();

      const headers = detailData.payload.headers;
      const subject =
        headers.find((h: any) => h.name === "Subject")?.value || "No Subject";
      const from =
        headers.find((h: any) => h.name === "From")?.value || "Unknown Sender";

      return { id: msg.id, subject, from, snippet: detailData.snippet };
    }),
  );

  return emailDetails;
}
