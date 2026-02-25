import CardHeading from "@/app/_components/CardHeading";
import DigitalClock from "@/app/_components/DigitalClock";
import TimeProgress from "@/app/_components/TimeProgress";
import { auth } from "@/auth";
import { Command, Inbox, Repeat2Icon, Terminal, Timer } from "lucide-react";

const page = async () => {
  const session = await auth();

  return (
    <div>
      {/* Dashboard Intro */}
      <div className={`flex justify-between items-center`}>
        <h2 className={`text-3xl font-semibold mb-4`}>
          Welcome, {session?.user?.name}
        </h2>

        {/* Digital Clock */}
        <DigitalClock />
      </div>

      {/* Dashboard Cards */}
      <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6`}>
        <div
          className={`max-md:min-h-100 bg-sidebar-primary-foreground dark:bg-sidebar-border dark:shadow-zinc-800/25  shadow-zinc-300/50 shadow-lg border border-zinc-400/40 dark:border-zinc-600/50 rounded-xl p-6 h-64 grow md:col-span-3`}
        >
          <CardHeading Icon={Inbox}>Gmail Overview</CardHeading>
        </div>
        {/* Life Pace */}
        <TimeProgress />

        <div
          className={`max-md:min-h-100 bg-primary-foreground dark:-sidebar-border dark:shadow-zinc-800/25  shadow-zinc-300/50 shadow-lg border border-zinc-400/40 dark:border-zinc-600/50 rounded-xl p-6 h-64`}
        >
          <CardHeading Icon={Timer}>Focus Mode</CardHeading>
        </div>
        <div
          className={`max-md:min-h-100 bg-primary-foreground dark:-sidebar-border dark:shadow-zinc-800/25  shadow-zinc-300/50 shadow-lg border border-zinc-400/40 dark:border-zinc-600/50 rounded-xl p-6 h-64`}
        >
          <CardHeading Icon={Command}>Quick actions</CardHeading>
        </div>
        <div
          className={`max-md:min-h-100 bg-primary-foreground dark:-sidebar-border  dark:shadow-zinc-800/25  shadow-zinc-300/50 shadow-lg border border-zinc-400/40 dark:border-zinc-600/50 rounded-xl p-6 h-64 md:col-span-2`}
        >
          <CardHeading Icon={Repeat2Icon}>Daily Habits</CardHeading>
        </div>
      </div>
    </div>
  );
};

export default page;
