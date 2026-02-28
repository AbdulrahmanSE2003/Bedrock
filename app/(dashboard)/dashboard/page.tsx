import { getUserId } from "@/actions/supabase/data";
import CardHeading from "@/app/(dashboard)/_components/CardHeading";
import DigitalClock from "@/app/(dashboard)/_components/DigitalClock";
import GmailOverview from "@/app/(dashboard)/_components/GmailOverview";
import HabitsStats from "@/app/(dashboard)/_components/HabitsStats";
import PageHeading from "@/app/_components/PageHeading";
import PomodoroWidget from "@/app/(dashboard)/_components/PomodoroWidget";
import TimeProgress from "@/app/(dashboard)/_components/TimeProgress";
import { auth } from "@/auth";
import { ChartBarIcon, Command } from "lucide-react";
import { Suspense } from "react";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (!session?.user) redirect("/");

  return (
    <div>
      {/* Dashboard Intro */}
      <div className={`flex justify-between items-center mb-2`}>
        <PageHeading title={`Welcome, ${session?.user?.name}` || "Guest"} />
        {/* Digital Clock */}
        <DigitalClock />
      </div>

      {/* Dashboard Cards */}
      <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6`}>
        {/* Gmail Overview*/}
        <Suspense
          fallback={
            <div className="max-md:min-h-100 h-96 bg-sidebar-primary-foreground dark:bg-sidebar-border dark:shadow-zinc-800/25 shadow-zinc-300/50 shadow-lg border border-zinc-400/40 dark:border-zinc-600/50 rounded-xl p-6 grow md:col-span-3 animate-pulse" />
          }
        >
          <GmailOverview />
        </Suspense>
        {/* Life Pace */}
        <TimeProgress />

        {/* Pomodoro Widget  */}
        <PomodoroWidget />

        <div
          className={`max-md:min-h-100 bg-primary-foreground dark:-sidebar-border dark:shadow-zinc-800/25  shadow-zinc-300/50 shadow-lg border border-zinc-400/40 dark:border-zinc-600/50 rounded-xl p-6 h-64`}
        >
          <CardHeading Icon={ChartBarIcon}>Radar Chart</CardHeading>
        </div>

        {/* Habits Stats */}

        <Suspense
          fallback={
            <div
              className={`max-md:min-h-100 bg-primary-foreground dark:-sidebar-border  dark:shadow-zinc-800/25  shadow-zinc-300/50 shadow-lg border border-zinc-400/40 dark:border-zinc-600/50 rounded-xl p-6 h-64 md:col-span-2 flex flex-col gap-3 animate-pulse`}
            ></div>
          }
        >
          <HabitsStats />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
