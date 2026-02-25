import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type CardHeadingProps = {
  children: ReactNode;
  Icon?: LucideIcon;
};

const CardHeading = ({ children, Icon }: CardHeadingProps) => {
  return (
    <div className={`flex gap-2 justify-start items-center`}>
      {Icon && <Icon />}
      <h4 className={`font-semibold text-xl capitalize`}>{children}</h4>
    </div>
  );
};

export default CardHeading;
