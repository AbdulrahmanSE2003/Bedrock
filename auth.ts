import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope:
            "openid email profile https://www.googleapis.com/auth/gmail.readonly",
          access_type: "offline",
          prompt: "consent",
        },
      },
    }),
  ],
  pages: { signIn: "/auth/signin" },
  session: { strategy: "jwt" },
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;

      try {
        // 1. هنعمل Upsert بناءً على الإيميل فقط
        // سوبابيز هتدور بالإيميل: لو موجود هتحدث البيانات، لو مش موجود هتكريت جديد
        const { data, error } = await supabaseAdmin
          .from("users")
          .upsert(
            {
              email: user.email,
              name: user.name,
              image: user.image,
              last_login: new Date().toISOString(),
            },
            { onConflict: "email" }, // ده السحر: لو الإيميل موجود، لا تكريت ID جديد
          )
          .select("id")
          .single();

        if (error) throw error;

        // 2. بنثبت الـ UUID الداخلي بتاعنا في كائن الـ user بتاع NextAuth
        user.id = data.id;
        return true;
      } catch (err) {
        console.error("Auth Sync Error:", err);
        return true;
      }
    },

    async jwt({ token, user, account }) {
      // الـ user.id هنا هو الـ UUID الثابت اللي جبناه من سوبابيز في خطوة الـ signIn
      if (user) {
        token.userId = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.userId as string;
      }
      // @ts-ignore
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
