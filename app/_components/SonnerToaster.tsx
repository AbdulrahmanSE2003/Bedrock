"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

export function SonnerToaster() {
  const { theme } = useTheme();

  return (
    <Sonner
      theme={theme as "light" | "dark" | "system"}
      className="toaster group"
      // toastOptions={{
      //   classNames: {
      //     toast:
      //       "group border-border bg-background/60 backdrop-blur-xl text-foreground shadow-2xl rounded-2xl border",
      //     description: "group-[.toast]:text-muted-foreground",
      //     title: "font-semibold",
      //   },
      // }}
    />
  );
}
