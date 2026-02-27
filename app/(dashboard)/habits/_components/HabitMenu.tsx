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
import { Edit, EllipsisVerticalIcon, Trash } from "lucide-react";
import EditHabitModal from "./EditHabitModal";
import { Habit } from "@/types/habits";
import { useState } from "react";
import ConfirmDialog from "@/app/_components/ConfirmDialog";
import { deleteHabit } from "@/actions/habits";
import { toast } from "sonner";
import { bell } from "@/lib/utils";

const HabitMenu = ({ habit }: { habit: Habit }) => {
  const onDelete = async () => {
    const res = await deleteHabit(habit.id);

    if (res.error) {
      toast.error("Failed to delete habit.");
    } else {
      toast.success("Habit deleted successfully!");
      bell();
    }
  };

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
            onSelect={(e) => e.preventDefault()}
            className={` cursor-pointer`}
          >
            <EditHabitModal habit={habit}>
              <div className={`flex gap-2 items-center`}>
                <Edit />
                Edit Habit
              </div>
            </EditHabitModal>
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
            className={`cursor-pointer`}
            variant="destructive"
          >
            <ConfirmDialog toDelete="habit" onConfirm={onDelete}>
              <Trash className={`stroke-red-400/70 `} />
              Delete Habit
            </ConfirmDialog>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HabitMenu;
