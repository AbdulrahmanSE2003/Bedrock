import NextAuth from "next-auth";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import Google from "next-auth/providers/google";

const baseAdapter = SupabaseAdapter({
  url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  secret:
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: {
    ...baseAdapter,
    getUserByAccount: async (providerAccountId) => {
      try {
        // @ts-ignore
        return await baseAdapter.getUserByAccount(providerAccountId);
      } catch (error) {
        console.error("DEBUG ADAPTER ERROR (getUserByAccount):", error);
        throw error;
      }
    },
  },
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
  pages: {
    signIn: "/auth/signin",
  },
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        return {
          ...token,
          accessToken: account.access_token,
          expiresAt: Math.floor(
            Date.now() / 1000 + (account.expires_in || 3600),
          ),
          refreshToken: account.refresh_token,
        };
      }

      if (Date.now() < (token.expiresAt as number) * 1000) {
        return token;
      } // لو التوكن انتهى.. هنا بنعمل Refresh تلقائي
      try {
        const response = await fetch("https://oauth2.googleapis.com/token", {
          method: "POST",
          body: new URLSearchParams({
            client_id: process.env.GOOGLE_CLIENT_ID!,
            client_secret: process.env.GOOGLE_CLIENT_SECRET!,
            grant_type: "refresh_token",
            refresh_token: token.refreshToken as string,
          }),
        });

        const tokens = await response.json();

        if (!response.ok) throw tokens;

        return {
          ...token,
          accessToken: tokens.access_token,
          expiresAt: Math.floor(Date.now() / 1000 + tokens.expires_in),
          // لو جوجل بعتت refresh_token جديد نستخدمه، وإلا نفضل على القديم
          refreshToken: tokens.refresh_token ?? token.refreshToken,
        };
      } catch (error) {
        console.error("Error refreshing access token", error);
        return { ...token, error: "RefreshAccessTokenError" };
      }
    },
    async session({ session, token }) {
      // @ts-ignore
      session.accessToken = token.accessToken;
      // @ts-ignore
      session.error = token.error;
      return session;
    },
  },
});
