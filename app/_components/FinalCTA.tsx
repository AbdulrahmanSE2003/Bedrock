"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export function FinalCTA() {
  return (
    <section className="py-40 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative p-12 md:p-24 rounded-[3rem] border border-zinc-100 dark:border-zinc-900 bg-zinc-50/30 dark:bg-zinc-900/10 flex flex-col items-center text-center space-y-10">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none" />

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase italic"
          >
            Ready to <br />
            <span className="text-zinc-400">Build?</span>
          </motion.h2>

          <p className="max-w-md text-zinc-500 font-medium text-lg leading-relaxed">
            Join a community of developers who value speed, simplicity, and
            focus.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="rounded-full h-14 px-10 text-sm font-bold uppercase tracking-widest bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition-transform"
            >
              Get Started Now
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="rounded-full h-14 px-10 text-sm font-bold uppercase tracking-widest gap-2"
            >
              Talk to Sales <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
