"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const LandingNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 px-6 flex items-center justify-center",
        isScrolled
          ? "h-14 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50"
          : "h-20 bg-transparent",
      )}
    >
      <div className="max-w-7xl w-full flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Logo />
          <span className="text-xl font-black tracking-tighter">Bedrock.</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {["Vision", "Features"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button
              size="sm"
              className="rounded-lg px-5 h-9 font-semibold text-sm uppercase tracking-wider"
            >
              Sign In
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full w-8 h-8"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <MoonIcon className="absolute h-4 w-4 " />
            ) : (
              <Sun className="h-4 w-4 " />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};
