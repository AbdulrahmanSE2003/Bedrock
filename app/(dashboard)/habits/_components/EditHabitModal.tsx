"use client";

import { editHabit } from "@/actions/habits";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { bell } from "@/lib/utils";
import { Habit } from "@/types/habits";
import {
  Dispatch,
  SetStateAction,
  useOptimistic,
  useState,
  useTransition,
} from "react";
import { toast } from "sonner";

type EditHabitModalProps = {
  habit: Habit;
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
};

const EditHabitModal = ({ habit, open, onOpenChange }: EditHabitModalProps) => {
  const [isPending, startTransition] = useTransition();
  const [habitName, setHabitName] = useState(habit.name);
  const [habitColor, setHabitColor] = useState(habit.color);

  const [optimisticHabit, addOptimisticHabit] = useOptimistic(
    habit,
    (state, newUpdate: { name: string; color: string }) => ({
      ...state,
      name: newUpdate.name,
      color: newUpdate.color,
    }),
  );

  const onConfirm = async () => {
    startTransition(async () => {
      addOptimisticHabit({ name: habitName, color: habitColor });
      onOpenChange(false); // Close immediately before server action to avoid revalidatePath flicker

      const res = await editHabit(habit.id, habitName, habitColor);

      if (res?.error) {
        onOpenChange(true); // Re-open on error so user can retry
        toast.error("Failed updating habit data.");
      } else {
        toast.success("Habit data changed successfully!");
        bell();
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Habit</DialogTitle>
          <DialogDescription>
            Update your habit&apos;s name or color to keep your tracker
            organized.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <Field>
            <Label htmlFor="habitName">Habit Name</Label>
            <Input
              onKeyDown={(e) => {
                if (e.key === " ") {
                  e.stopPropagation();
                }
              }}
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
              onKeyDown={(e) => {
                if (e.key === " ") {
                  e.stopPropagation();
                }
              }}
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
          <DialogClose asChild>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={onConfirm} disabled={isPending}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditHabitModal;
