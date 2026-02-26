import PageHeading from "@/app/_components/PageHeading";
import Habits from "./_components/Habits";
import { Suspense } from "react";

const Page = async () => {
  return (
    <div className="p-8 space-y-8">
      <PageHeading title="Habit Tracker" />

      {/* Habits */}
      <Suspense fallback={<div>Loading...</div>}>
        <Habits />
      </Suspense>
    </div>
  );
};

export default Page;
