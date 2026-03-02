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

const SortBy = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const sortMethod = searchParams.get("sortBy") || "default";

  const handleSort = (sortBy: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sortBy", sortBy);

    router.push(`?${params.toString()}`);
  };
  return (
    <Select value={sortMethod} onValueChange={handleSort}>
      <SelectTrigger className="min-w-25">
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="default">Default</SelectItem>
          <SelectItem value="priority-asc">Priority Low : High</SelectItem>
          <SelectItem value="priority-desc">Priority High : Low</SelectItem>
          <SelectItem value="source">Source</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SortBy;
