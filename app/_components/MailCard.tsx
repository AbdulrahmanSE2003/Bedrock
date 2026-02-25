import { Mail } from "@/store/useMailStore";

const MailCard = ({ mail }: { mail: Mail }) => {
  return (
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
  );
};

export default MailCard;
