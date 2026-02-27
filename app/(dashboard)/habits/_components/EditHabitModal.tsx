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
import { bell } from "@/lib/utils";
import { Habit } from "@/types/habits";
import { Edit } from "lucide-react";
import { ReactNode, useRef, useState } from "react";
import { toast } from "sonner";

type EditHabitModalProps = {
  children: ReactNode;
  habit: Habit;
};

const EditHabitModal = ({ children, habit }: EditHabitModalProps) => {
  const [habitName, setHabitName] = useState(habit.name);
  const [habitColor, setHabitColor] = useState(habit.color);

  const closeRef = useRef<HTMLButtonElement>(null);

  const onConfirm = async () => {
    const res = await editHabit(habit.id, habitName, habitColor);

    if (res?.error) {
      toast.error("Failed updating habit data.");
      console.error(res.error);
      return;
    } else {
      closeRef.current?.click();
      toast.success("Habit data changed successfully!");
      bell();
    }
  };

  return (
    <Dialog>
      {" "}
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            Update your habit&apos;s name or color to keep your tracker
            organized.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <Field>
            <Label htmlFor="habitName">Habit Name</Label>
            <Input
              id="habitName"
              name="habitName"
              defaultValue={habitName}
              onChange={(e) => setHabitName(e.target.value)}
              placeholder="Add new habit..."
              required
            />
          </Field>
          <Field>
            <Label htmlFor="habitColor">Habit Color</Label>
            <Input
              id="habitColor"
              name="habitColor"
              defaultValue={habitColor}
              onChange={(e) => setHabitColor(e.target.value)}
              type="color"
              className="max-w-20"
            />
          </Field>
        </FieldGroup>
        <DialogFooter className="mt-4">
          <DialogClose ref={closeRef} asChild>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={onConfirm}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditHabitModal;
