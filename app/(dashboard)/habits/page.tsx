import PageHeading from "@/app/_components/PageHeading";
import Habits from "./_components/Habits";
import { Suspense } from "react";
import AddHabitModal from "./_components/AddHabitModal";

export type NewHabit = {
  name: string;
  color: string;
  id: string;
};

const Page = () => {
  return (
    <div className="p-8 space-y-8">
      <div className={`flex justify-between items-center`}>
        <PageHeading title="Habit Tracker" />

        <AddHabitModal />
      </div>

      {/* Habits */}
      <Suspense fallback={<div>Loading...</div>}>
        <Habits />
      </Suspense>
    </div>
  );
};

export default Page;
