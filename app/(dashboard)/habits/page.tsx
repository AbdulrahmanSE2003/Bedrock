import PageHeading from "@/app/_components/PageHeading";
import Habits from "./_components/Habits";
import { Suspense } from "react";
import AddHabitModal from "./_components/AddHabitModal";
import { Skeleton } from "@/components/ui/skeleton";

export type NewHabit = {
  name: string;
  color: string;
  id: string;
};

const Page = () => {
  return (
    <div className="space-y-8">
      <div className={`flex justify-between items-center`}>
        <PageHeading title="Habit Tracker" />

        <AddHabitModal />
      </div>

      {/* Habits */}
      <Suspense
        fallback={
          <div className="grid md:grid-cols-2 gap-6 w-full">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="p-6 border rounded-2xl bg-background shadow-sm flex flex-col gap-3 items-start justify-between"
              >
                <div className={`flex justify-between items-center w-full`}>
                  <Skeleton className="h-3 w-40 rounded-full" />
                  <div className={`flex gap-4`}>
                    <Skeleton className="h-3 w-30 rounded-full" />
                    <Skeleton className="h-3 w-15 rounded-full" />
                  </div>
                </div>
                <Skeleton className="h-3 w-20 rounded-full" />
                <Skeleton className="h-3 w-20 rounded-full" />
                <div className={`w-full flex flex-col gap-2`}>
                  <Skeleton className="h-40 w-full rounded-md" />
                </div>
              </div>
            ))}
          </div>
        }
      >
        <Habits />
      </Suspense>
    </div>
  );
};

export default Page;
