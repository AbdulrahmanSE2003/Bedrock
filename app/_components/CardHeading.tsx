import { ReactNode } from "react";

type CardHeadingProps = {
  children: ReactNode;
};

const CardHeading = ({ children }: CardHeadingProps) => {
  return <h4 className={`font-semibold text-xl capitalize`}>{children}</h4>;
};

export default CardHeading;
