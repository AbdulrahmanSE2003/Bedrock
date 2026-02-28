import { unstable_noStore as noStore } from "next/cache";
import { Inbox } from "lucide-react";
import CardHeading from "./CardHeading";
import { fetchRecentEmails } from "@/actions/gmail";
import MailsList from "./MailsList";

export const revalidate = 900;

const GmailOverview = async () => {
  // noStore();
  const mails = await fetchRecentEmails();

  return (
    <div
      className={`max-md:min-h-100 h-96 bg-sidebar-primary-foreground dark:bg-sidebar-border dark:shadow-zinc-800/25  shadow-zinc-300/50 shadow-lg border border-zinc-400/40 dark:border-zinc-600/50 rounded-xl p-6 grow md:col-span-3 space-y-4`}
    >
      <CardHeading Icon={Inbox}>Gmail Overview</CardHeading>

      {/* mails cards */}
      {mails ? <MailsList mails={mails} /> : <p>loading...</p>}
    </div>
  );
};

export default GmailOverview;
