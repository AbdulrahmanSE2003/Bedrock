"use client";

import { useRef } from "react";
import { PlusCircle } from "lucide-react";
import { DynamicModal } from "@/app/_components/DynamicDialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { addNewHabit } from "@/actions/habits";

export default function AddHabitModal() {
  const closeRef = useRef<HTMLButtonElement>(null);

  const clientAction = async (formdata: FormData) => {
    const res = await addNewHabit(formdata);
    if (res?.error) {
      toast.error(res.error);
    } else {
      toast.success("Habit created successfully!");
      closeRef.current?.click();
    }
  };

  return (
    <DynamicModal
      Icon={<PlusCircle />}
      btnTitle="Add Habit"
      title="Create New Habit"
      description="Start a new journey today"
    >
      <form action={clientAction}>
        <FieldGroup>
          <Field>
            <Label htmlFor="habitName">Habit Name</Label>
            <Input
              id="habitName"
              name="habitName"
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
              defaultValue="#37ea93"
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
    </DynamicModal>
  );
}
