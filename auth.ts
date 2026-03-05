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
            "openid email profile https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/tasks",
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
        const { data, error } = await supabaseAdmin
          .from("users")
          .upsert(
            {
              email: user.email,
              name: user.name,
              image: user.image,
              last_login: new Date().toISOString(),
            },
            { onConflict: "email" },
          )
          .select("id")
          .single();

        if (error) throw error;
        user.id = data.id;
        return true;
      } catch (err) {
        console.error("Auth Sync Error:", err);
        return true;
      }
    },

    async jwt({ token, user, account, trigger, session }) {
      if (trigger === "update" && session?.user) {
        if (session.user.name) token.name = session.user.name;
      }

      if (user) {
        token.userId = user.id;
        token.name = user.name;
      }

      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.accessTokenExpires = account.expires_at
          ? account.expires_at * 1000
          : Date.now() + 3600 * 1000;
        return token;
      }

      if (Date.now() < (token.accessTokenExpires as number)) {
        return token;
      }

      try {
        const res = await fetch("https://oauth2.googleapis.com/token", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            client_id: process.env.GOOGLE_CLIENT_ID!,
            client_secret: process.env.GOOGLE_CLIENT_SECRET!,
            grant_type: "refresh_token",
            refresh_token: token.refreshToken as string,
          }),
        });

        const refreshed = await res.json();
        if (!res.ok) throw refreshed;

        return {
          ...token,
          accessToken: refreshed.access_token,
          refreshToken: refreshed.refresh_token ?? token.refreshToken,
          accessTokenExpires:
            Date.now() + (refreshed.expires_in ?? 3600) * 1000,
        };
      } catch (err) {
        console.error("Token refresh error:", err);
        return { ...token, error: "RefreshAccessTokenError" };
      }
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.userId as string;
        if (token.name) session.user.name = token.name;
      }
      // @ts-ignore
      session.accessToken = token.accessToken;
      // @ts-ignore
      if (token.error) session.error = token.error;
      return session;
    },
  },
});
