"use client";

import { motion } from "motion/react";
import {
  RefreshCw,
  Layout,
  Calendar,
  Github,
  Slack,
  Sparkle,
} from "lucide-react";

const integrations = [
  { icon: <Layout size={24} />, label: "Trello", status: "Live" },
  { icon: <Calendar size={24} />, label: "Google Tasks", status: "Live" },
  {
    icon: <Github size={24} className="opacity-40" />,
    label: "GitHub",
    status: "Soon",
  },
  {
    icon: <Sparkle size={24} className="opacity-40" />,
    label: "Gemini",
    status: "Soon",
  },
];

export function IntegrationSection() {
  return (
    <section className="py-20 bg-background px-6 overflow-hidden border-t border-zinc-100 dark:border-zinc-900">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-24">
        {/* Left Side: Big Typography */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-zinc-400">
              Integrations
            </h2>
            <p className="text-4xl md:text-6xl font-medium tracking-tight text-zinc-500 leading-[1.1]">
              Everything in one place. <br />
              <span className="text-zinc-900 dark:text-white font-bold">
                No more tab switching.
              </span>
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8">
            {integrations.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="p-3 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold">{item.label}</h4>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                    {item.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: The Minimal Orbit */}
        <div className="relative flex items-center justify-center">
          {/* Inner Circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-64 h-64 rounded-full border border-zinc-100 dark:border-zinc-900"
          />
          {/* Outer Circle */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute w-112.5 h-112.5 rounded-full border border-dashed border-zinc-400/50 dark:border-zinc-800/50"
          />

          {/* Center Logo */}
          <div className="relative z-10 p-10 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-400/50 dark:border-zinc-800 shadow-2xl">
            <RefreshCw size={40} className="text-zinc-900 dark:text-white" />
          </div>

          {/* Floating Indicators */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full border border-zinc-100 dark:border-zinc-800 bg-background text-[10px] font-bold uppercase tracking-widest animate-">
            Real-time Sync
          </div>
        </div>
      </div>
    </section>
  );
}
