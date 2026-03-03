"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="py-24 bg-background px-6">
      <div className="w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
          {/* Big, Simple Typography */}
          <h2 className="text-6xl md:text-[10vw] font-bold tracking-tighter leading-none">
            Bedrock <br />{" "}
            <span className="text-zinc-400">build differently.</span>
          </h2>

          <p className="max-w-md mx-auto text-lg text-zinc-500 font-medium leading-relaxed">
            The minimalist workspace for those who value focus.
          </p>

          {/* Single Action */}
          <Link href={"/dashboard"}>
            <Button
              size="lg"
              className="font-bold rounded-full px-8 py-3 h-14 text-base hover:opacity-80 transition-opacity"
            >
              Get Started Free!
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
