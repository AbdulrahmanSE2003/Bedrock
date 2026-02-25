"use client";
import { useEffect } from "react";
import { Mail, useMailStore } from "@/store/useMailStore";

const MailsList = ({ mails }: { mails: Mail[] }) => {
  const { setMails } = useMailStore();

  useEffect(() => {
    if (mails) {
      setMails(mails);
    }
  }, [mails, setMails]);

  const displayMails = mails.length > 0 ? mails.slice(0, 10) : mails;

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto pr-2 space-y-2 max-h-72 scrollbar-thin scrollbar-thumb-zinc-800">
        {displayMails?.map((mail) => (
          <a
            key={mail.id}
            href={`https://mail.google.com/mail/u/0/#inbox/${mail.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 bg-background border rounded-xl Border hover:border-foreground/50 hover:bg-zinc-50/5 dark:hover:bg-zinc-800/50 transition-all cursor-pointer group"
          >
            <h5 className="text-sm font-medium  transition-colors truncate">
              {mail.from.split("<")[0]}
            </h5>
            <p className="text-xs text-accent-foreground/75 truncate mt-1">
              {mail.subject}
            </p>
          </a>
        ))}

        {displayMails?.length === 0 && (
          <p className="text-xs text-center text-zinc-500 py-10">
            No messages yet
          </p>
        )}
      </div>
    </div>
  );
};

export default MailsList;
