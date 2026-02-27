import PageHeading from "@/app/_components/PageHeading";
import Habits from "./_components/Habits";
import { Suspense } from "react";
import { DynamicModal } from "@/app/_components/DynamicDialog";
import { PlusCircle } from "lucide-react";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import { addHabit } from "@/actions/supabase/data";
import { revalidatePath } from "next/cache";
import { toast } from "sonner";

export type NewHabit = {
  name: string;
  color: string;
  id: string;
};

const Page = async () => {
  const addNewHabit = async (formData: FormData) => {
    "use server";
    const habitName = String(formData.get("habitName"));
    const color = String(formData.get("habitColor"));
    const session = await auth();
    const id = session?.user?.id;
    if (!id) return;
    if (!habitName.split(" ") || !color) return;

    await addHabit(habitName, color, id!);

    revalidatePath("/habits");
  };

  return (
    <div className="p-8 space-y-8">
      <div className={`flex justify-between items-center`}>
        <PageHeading title="Habit Tracker" />

        <DynamicModal
          Icon={<PlusCircle />}
          btnTitle="Add Habit"
          title="Create New Habit"
          description="Start a new journey today"
        >
          <form action={addNewHabit}>
            <FieldGroup>
              <Field>
                <Label htmlFor="habitName">Habit Name</Label>
                <Input
                  id="habitName"
                  name="habitName"
                  placeholder="Add new habit..."
                />
              </Field>
              <Field>
                <Label htmlFor="habitColor">Habit Name</Label>
                <Input
                  id="habitColor"
                  name="habitColor"
                  type="color"
                  className={`max-w-20`}
                  defaultValue={"#37ea93"}
                />
              </Field>
            </FieldGroup>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DynamicModal>
      </div>

      {/* Habits */}
      <Suspense fallback={<div>Loading...</div>}>
        <Habits />
      </Suspense>
    </div>
  );
};

export default Page;
