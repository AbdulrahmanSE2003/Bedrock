"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const ViewMode = () => {
  const router = useRouter();

  const searchParams = useSearchParams();

  // بنقرأ الـ View من اللينك مباشرة، ولو مش موجود بنفترض إنه kanban
  const currentView = searchParams.get("view") || "kanban";

  const handleViewChange = (newView: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("view", newView);

    router.push(`?${params.toString()}`);
  };

  return (
    <Select defaultValue={currentView} onValueChange={handleViewChange}>
      <SelectTrigger className="w-45">
        <SelectValue placeholder="Tasks View" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="kanban">Kanban</SelectItem>
          <SelectItem value="table">Table</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ViewMode;
