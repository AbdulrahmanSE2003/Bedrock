"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/router";
const ViewMode = () => {
  // const router = useRouter();
  // console.log(router);
  return (
    <Select>
      <SelectTrigger className="w-45">
        <SelectValue placeholder="View" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="kanban">Kanban</SelectItem>
          <SelectItem value="database">Database</SelectItem>
          <SelectItem value="table">Table</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ViewMode;
