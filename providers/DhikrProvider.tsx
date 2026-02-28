"use client";

import { useDhikr } from "@/hooks/useDhikr";
import { bell } from "@/lib/utils";
import { MoonIcon } from "lucide-react";
import { toast } from "sonner";

export default function DhikrProvider() {
  useDhikr((message) => {
  bell();
    toast.warning(message, {
      duration: 10000,
      icon: <MoonIcon />,
      richColors: true,
      className: "bg-amber-500",
    });
  });

  return null;
}
