"use client";
import { useEffect } from "react";
import { Mail, useMailStore } from "@/store/useMailStore";
import MailCard from "./MailCard";

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
          <MailCard mail={mail} key={mail.id} />
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
