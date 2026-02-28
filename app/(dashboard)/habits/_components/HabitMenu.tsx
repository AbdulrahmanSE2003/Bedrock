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
import ConfirmDialog from "@/app/_components/ConfirmDialog";
import { deleteHabit } from "@/actions/habits";
import { toast } from "sonner";
import { bell } from "@/lib/utils";
import { useState } from "react";

const HabitMenu = ({ habit }: { habit: Habit }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

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
    <>
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
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
            onSelect={(e) => {
              e.preventDefault();
              // Close dropdown first, then open dialog to avoid Radix UI flickering bug
              setDropdownOpen(false);
              setTimeout(() => setEditOpen(true), 0);
            }}
            className={`cursor-pointer`}
          >
            <div className={`flex gap-2 items-center`}>
              <Edit />
              Edit Habit
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
            className={`cursor-pointer`}
            variant="destructive"
          >
            <ConfirmDialog toDelete="habit" onConfirm={onDelete}>
              <Trash className={`stroke-red-500 dark:stroke-red-400/70 `} />
              Delete Habit
            </ConfirmDialog>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    <EditHabitModal habit={habit} open={editOpen} onOpenChange={setEditOpen} />
    </>
  );
};

export default HabitMenu;
