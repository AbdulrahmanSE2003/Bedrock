import CardHeading from "@/app/_components/CardHeading";
import DigitalClock from "@/app/_components/DigitalClock";
import TimeProgress from "@/app/_components/TimeProgress";
import { auth } from "@/auth";

const page = async () => {
  const session = await auth();

  return (
    <div>
      <div className={`flex justify-between items-center`}>
        <h2 className={`text-3xl font-semibold mb-4`}>
          Welcome, {session?.user?.name}
        </h2>

        {/* Digital Clock */}
        <DigitalClock />
      </div>
      <div className={`grid grid-cols-4 gap-4 gap-y-6`}>
        <div
          className={`bg-sidebar-border dark:shadow-sidebar-border shadow-zinc-300/50 shadow-lg border border-zinc-400/40 dark:border-zinc-600/50 rounded-xl p-4 h-64 grow col-span-3`}
        >
          <CardHeading>Progress-Bar</CardHeading>
        </div>
        {/* Life Pace */}
        <TimeProgress />

        <div
          className={`bg-sidebar-border dark:shadow-sidebar-border shadow-zinc-300/50 shadow-lg border border-zinc-400/40 dark:border-zinc-600/50 rounded-xl p-4 h-64`}
        >
          <CardHeading>Progress-Bar</CardHeading>
        </div>
      </div>
    </div>
  );
};

export default page;
