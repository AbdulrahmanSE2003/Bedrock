"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVerticalIcon, Trash } from "lucide-react";
import EditHabitModal from "./EditHabitModal";
import { Habit } from "@/types/habits";
import { useState } from "react";

const HabitMenu = ({ habit }: { habit: Habit }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <EllipsisVerticalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel className={`opacity-50`}>
            Habit Actions
          </DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => setShowEditModal(true)}
            onSelect={(e) => e.preventDefault()}
            className={` cursor-pointer`}
          >
            <EditHabitModal
              habit={habit}
              open={showEditModal}
              onOpenChange={setShowEditModal}
            />
          </DropdownMenuItem>
          <DropdownMenuItem className={`cursor-pointer`} variant="destructive">
            <Trash />
            Delete Habit
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HabitMenu;
