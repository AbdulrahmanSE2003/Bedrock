"use client";

import PageHeading from "@/app/_components/PageHeading";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const page = () => {
  return (
    <div>
      <PageHeading title={`Settings`} />

      <Button onClick={() => toast("تجربة الذكر")}>Test Dhikr Toast</Button>
    </div>
  );
};

export default page;
