"use client";

import { motion } from "motion/react";
import { Zap, Shield, Sparkles, Layout } from "lucide-react";

const features = [
  {
    title: "Instant Workflow",
    desc: "Experience the speed of a native app with zero latency transitions.",
    icon: <Zap size={20} />,
    className: "md:col-span-2",
  },
  {
    title: "AI Strategy",
    desc: "Gemini-powered task prioritization at your fingertips.",
    icon: <Sparkles size={20} />,
    className: "md:col-span-1",
  },
  {
    title: "Secure by Default",
    desc: "Your data is encrypted and synced with Supabase.",
    icon: <Shield size={20} />,
    className: "md:col-span-1",
  },
  {
    title: "Deep Focus Mode",
    desc: "Eliminate distractions with a workspace designed for high-performance deep work.",
    icon: <Layout size={20} />,
    className: "md:col-span-2",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-400">
            Features
          </h2>
          <p className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Everything you need. <br /> Nothing you don&apos;t.
          </p>
        </div>

        {/* Feature wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Feature */}
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.25 }}
              className={`p-8 rounded-3xl border border-zinc-400/50 dark:border-zinc-900 bg-zinc-50/50 hover:border-zinc-500 dark:hover:border-zinc-700 dark:bg-zinc-900/30 backdrop-blur-sm flex flex-col justify-between min-h-58 ${f.className} group transform-border duration-300`}
            >
              <div className="p-3 w-fit rounded-xl bg-transparent dark:bg-zinc-80 border border-zinc-400 dark:border-zinc-700 text-zinc-900 dark:text-white group-hover:shadow-lg group-hover:shadow-foreground/20 dark:group-hover:shadow-foreground/10 transition-shadow duration-500">
                {f.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
