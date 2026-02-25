"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button"; // لو بتستخدم shadcn
import { Chrome } from "lucide-react"; // أي أيكون من lucide

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-8 rounded-2xl border bg-card p-10 shadow-xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome to your Bedrock
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <Button
            variant="outline"
            className="w-full cursor-pointer py-6 text-lg transition-all hover:bg-secondary"
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            <Chrome className="mr-2 h-5 w-5" />
            Continue with Google
          </Button>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
