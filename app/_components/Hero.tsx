"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import lightPreview from '@/public/preview-light.png' 
import darkPreview from '@/public/preview-dark.png' 
import { useTheme } from "next-themes";


export default function HeroSection() {
  const {theme} = useTheme()
  const previewImage = theme=== 'dark' ? darkPreview : lightPreview
  return (
    <section
      id="hero"
      className="relative mt-20 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-6"
    >
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">
            Beta Version
          </span>
        </motion.div>

        {/* Main Title - The "Big" Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-8xl lg:text-[120px] font-bold tracking-tight text-zinc-900 dark:text-white leading-[0.9]"
        >
          Ship your ideas <br />
          <span>faster than ever.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl  dark:text-zinc-400 font-medium leading-relaxed"
        >
          A minimal workspace for developers. <br className="hidden md:block" />
          Focus on building, we’ll handle the flow.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link href={"/dashboard"}>
            <Button
              size="lg"
              className="h-12 px-8 rounded-full  hover:opacity-90 transition-all font-semibold"
            >
              Get Started Free
            </Button>
          </Link>
          <a href={"#features"}>
            <Button
              variant="ghost"
              size="lg"
              className="h-12 px-8 rounded-full gap-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              View Features <ArrowRight size={16} />
            </Button>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }} // استخدم whileInView عشان يشتغل لما تعمل سكرول
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="relative mt-20 w-full max-w-6xl aspect-video rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] mx-auto overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-br from-zinc-50/50 to-white dark:from-zinc-900 dark:to-[#030303] flex items-center justify-center">
          <div className="relative w-full h-full bg-linear-to-br from-zinc-50/50 to-white dark:from-zinc-900 dark:to-[#030303]">
            <Image src={previewImage} alt="Application Preview" fill priority className="object-cover object-top opacity-90 dark:opacity-100 transition-opacity" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
