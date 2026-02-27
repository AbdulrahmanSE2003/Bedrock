"use client";

import { editHabit } from "@/actions/habits";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Habit } from "@/types/habits";
import { Edit } from "lucide-react";
import { useRef } from "react";
import { toast } from "sonner";

const EditHabitModal = ({
  habit,
  open,
  onOpenChange,
}: {
  habit: Habit;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  const clientAction = async (formData: FormData) => {
    const res = await editHabit(habit.id, formData);

    if (res?.error) {
      toast.error("Failed to update habit.");
      console.error(res.error);
    } else {
      onOpenChange(false);
      toast.success("Habit changed successfully!");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {" "}
      <DialogTrigger asChild>
        <div className={`flex gap-2 items-center`}>
          <Edit />
          Edit Habit
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            Update your habit&apos;s name or color to keep your tracker
            organized.
          </DialogDescription>
        </DialogHeader>
        <form action={clientAction}>
          <FieldGroup>
            <Field>
              <Label htmlFor="habitName">Habit Name</Label>
              <Input
                id="habitName"
                name="habitName"
                defaultValue={habit.name}
                placeholder="Add new habit..."
                required
              />
            </Field>
            <Field>
              <Label htmlFor="habitColor">Habit Color</Label>
              <Input
                id="habitColor"
                name="habitColor"
                type="color"
                className="max-w-20"
                defaultValue={habit.color}
              />
            </Field>
          </FieldGroup>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button ref={closeRef} variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditHabitModal;
