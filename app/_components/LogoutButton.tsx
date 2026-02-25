"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <Button
      className={`w-full cursor-pointer flex justify-start`}
      onClick={() => signOut({ callbackUrl: "/" })}
      variant={"destructive"}
      size={"sm"}
    >
      <span>Log out</span>
    </Button>
  );
};

export default LogoutButton;
