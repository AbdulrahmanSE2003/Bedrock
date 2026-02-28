"use client";

import { useDhikrTimer } from "@/hooks/useDhikr";
import { MoonIcon } from "lucide-react";
import { toast } from "sonner";

export default function DhikrProvider() {
  useDhikrTimer((message) => {
    toast.warning(message, {
      duration: 10000,
      icon: <MoonIcon />,
      richColors: true,
      className: "bg-amber-500",
    });
  });

  return null;
}
