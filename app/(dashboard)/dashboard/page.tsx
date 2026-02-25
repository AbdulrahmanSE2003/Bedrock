import CardHeading from "@/app/_components/CardHeading";
import DigitalClock from "@/app/_components/DigitalClock";
import GmailOverview from "@/app/_components/GmailOverview";
import PageHeading from "@/app/_components/PageHeading";
import PomodoroWidget from "@/app/_components/PomodoroWidget";
import TimeProgress from "@/app/_components/TimeProgress";
import { auth } from "@/auth";
import { Command, Repeat2Icon } from "lucide-react";

const page = async () => {
  const session = await auth();

  return (
    <div>
      {/* Dashboard Intro */}
      <div className={`flex justify-between items-center`}>
        <PageHeading title={`Welcome, ${session?.user?.name}` || "Guest"} />
        {/* Digital Clock */}
        <DigitalClock />
      </div>

      {/* Dashboard Cards */}
      <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6`}>
        {/* Gmail Overview*/}
        <GmailOverview />
        {/* Life Pace */}
        <TimeProgress />

        {/* Pomodoro Widget  */}
        <PomodoroWidget />

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
