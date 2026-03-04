import { Logo } from "@/components/ui/Logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-20 w-11/12 bg-background border-t border-zinc-400/50 dark:border-zinc-900 px-6">
      <div className=" mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-6 max-w-sm">
          <a
            href={"#hero"}
            className={`flex w-fit justify-start items-center gap-3`}
          >
            <Logo />
            <h2 className="text-2xl font-black tracking-tighter">
              Bedrock<span className="text-zinc-400">.</span>
            </h2>
          </a>
          <p className="text-sm text-zinc-500 leading-relaxed">
            The minimalist workspace for developers.
            <br /> Built for speed, privacy, and focus.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              Product
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <a
                  href="#"
                  className="hover:text-primary/75 transition-colors duration-200"
                >
                  Changelog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary/75 transition-colors duration-200"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              Social
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-400/50 dark:border-zinc-900 flex flex-col md:flex-row justify-between gap-4">
        <p className="text-[10px] text-zinc-400 uppercase tracking-widest">
          © 2026 Bedrock. All rights reserved. For{" "}
          <a
            target="_blank"
            className={`underline underline-offset-2 hover:text-zinc-100 transition-colors duration-500`}
            href="https://mnmlst-nine.vercel.app/"
          >
            Mnmlst
          </a>
        </p>
      </div>
    </footer>
  );
}
