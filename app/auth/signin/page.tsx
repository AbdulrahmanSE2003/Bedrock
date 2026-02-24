"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const handleSignIn = async () => {
    console.log("SignIn button clicked – starting Google sign in");
    try {
      await signIn("google", { callbackUrl: "/dashboard" });
      console.log("signIn called successfully");
    } catch (error) {
      console.error("signIn failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 border rounded-xl">
        <h1 className="text-2xl font-bold mb-6">Sign in to Bedrock</h1>
        <Button onClick={handleSignIn}>Continue with Google</Button>
      </div>
    </div>
  );
}
