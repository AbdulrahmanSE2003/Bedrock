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
  // 1. تعريف مسار صفحة الساين إن المخصصة
  pages: {
    signIn: "/auth/signin",
  },
  session: { strategy: "jwt" },
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;

      try {
        const { data, error } = await supabaseAdmin
          .from("users")
          .upsert(
            {
              id: user.id,
              email: user.email,
              name: user.name,
              image: user.image,
              last_login: new Date().toISOString(),
            },
            { onConflict: "email" },
          )
          .select("id")
          .single();

        if (error) {
          console.error("Error syncing user to Supabase:", error);
          return true;
        }

        user.id = data?.id;

        return true;
      } catch (err) {
        console.error("Manual Sync Exception:", err);
        return true;
      }
    },
    // 2. إجبار التوجيه للـ Dashboard بعد النجاح
    async redirect({ url, baseUrl }) {
      // لو فيه callbackUrl داخلي خده، غير كدة روح للداشبورد
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return `${baseUrl}/dashboard`;
    },
    async jwt({ token, account, user }) {
      if (user) {
        // هنا الـ token.userId هياخد الـ UUID الثابت اللي جاي من سوبابيز
        token.userId = user.id;
      }

      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          expiresAt: Math.floor(
            Date.now() / 1000 + (account.expires_in || 3600),
          ),
          userId: user.id,
        };
      }
      return token;
    },
    async session({ session, token }) {
      // @ts-ignore
      session.accessToken = token.accessToken;
      // @ts-ignore
      session.user.id = token.userId;
      return session;
    },
  },
});
