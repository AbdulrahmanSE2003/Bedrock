"use client";

import { LucideIcon, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState = ({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
  className,
}: EmptyStateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        "flex flex-col items-center justify-center py-16 px-6 border-2 border-dashed border-muted/50 rounded-[2rem] bg-muted/5 transition-all w-full",
        className,
      )}
    >
      {/* Icon Wrapper */}
      <div className="relative mb-6 group">
        <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-colors" />
        <div className="relative p-5 rounded-2xl bg-background border border-muted shadow-sm text-muted-foreground group-hover:text-primary transition-colors duration-200">
          <Icon size={32} strokeWidth={1.5} />
        </div>
      </div>

      {/* Typography */}
      <div className="text-center space-y-2 mb-8">
        <h3 className="text-xl font-bold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground max-w-70 mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      {/* Conditional Action Button */}
      {actionLabel && (
        <Button
          onClick={onAction}
          variant="outline"
          size="sm"
          className="gap-2 rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all px-8 h-10 font-medium"
        >
          <Plus size={16} />
          {actionLabel}
        </Button>
      )}
    </motion.div>
  );
};
