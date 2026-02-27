import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, EllipsisVerticalIcon, Menu, Trash } from "lucide-react";

const HabitMenu = () => {
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
          <DropdownMenuItem className={` cursor-pointer`}>
            <Edit />
            Edit Habit
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
