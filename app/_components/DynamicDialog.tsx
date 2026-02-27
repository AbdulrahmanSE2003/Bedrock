"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { ReactNode, useState } from "react";

interface ModalProps {
  Icon: ReactNode;
  btnTitle: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function DynamicModal({
  Icon,
  btnTitle,
  title,
  description,
  children,
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={`capitalize`}>
          {btnTitle}
          {Icon}
        </Button>
      </DialogTrigger>
      <DialogContent onSubmit={() => setIsOpen(false)} className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        <div className="py-4">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
