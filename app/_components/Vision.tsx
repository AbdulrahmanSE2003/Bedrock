"use client";

import { motion } from "motion/react";

const visionPoints = [
  {
    text: "Stop scattering your progress across dozens of tabs. We bring your **Trello boards and Google Tasks** into one single, unified source of truth.",
  },
  {
    text: "We believe tools shouldn’t compete for your attention. **No clunky UI, no unnecessary pings.** Just a calm environment for deep work.",
  },
  {
    text: "Engineered to be **lighter than your favorite IDE.** Fast, responsive, and optimized for developers who value every millisecond of their flow.",
  },
];

export const Vision = () => {
  return (
    <section className="py-24 bg-background px-6">
      <div className=" mx-auto space-y-10">
        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-[6vw] mb-4 font-bold capitalize tracking-tight text-center leading-[1.1]"
        >
          Pure<span className="text-zinc-400"> flow state.</span>
        </motion.h2>

        {/* The 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12 pt-20 dark:border-zinc-900">
          {visionPoints.map((point, index) => (
            <motion.div
              key={point.text}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.25 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl font-medium leading-snug text-zinc-500 dark:text-zinc-400">
                {point.text.split("**").map((part, i) => (
                  <span
                    key={i}
                    className={
                      i % 2 === 1 ? "text-zinc-900 dark:text-white" : ""
                    }
                  >
                    {part}
                  </span>
                ))}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
