"use client";

import { useDhikr } from "@/hooks/useDhikr";
import { bell } from "@/lib/utils";
import { MoonIcon } from "lucide-react";
import { toast } from "sonner";

export default function DhikrProvider() {
  useDhikr((message) => {
    bell();
    toast.warning(message, {
      duration: 15000,
      icon: <MoonIcon />,
    });
  });

  return null;
}
