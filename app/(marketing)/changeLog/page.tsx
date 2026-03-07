"use client";

import {
  Rocket,
  Sparkles,
  Wrench,
  Zap,
  ChevronLeft,
  History,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const updates = [
  {
    version: "v1.0.0-beta",
    date: "March 7, 2026",
    status: "Initial Launch",
    changes: [
      {
        icon: <Sparkles size={16} />,
        text: "Launched Bedrock: The minimal Kanban workspace for developers.",
      },
      {
        icon: <Zap size={16} />,
        text: "Full integration with Google Tasks API for real-time syncing.",
      },
      {
        icon: <Rocket size={16} />,
        text: "Implemented drag-and-drop workflow for task management.",
      },
      {
        icon: <Wrench size={16} />,
        text: "Optimized Next.js 15 build performance and hydration logic.",
      },
    ],
  },
];

export default function Changelog() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6 min-h-screen">
      {/* Back to Home */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ChevronLeft size={16} />
        Back to Home
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-primary/10 text-primary">
            <History size={32} />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Changelog</h1>
        </div>
        <p className="text-muted-foreground max-w-xl">
          Tracking every step of Bedrock&apos;s journey. Here&apos;s what&apos;s
          new and improved.
        </p>
      </header>

      {/* Timeline of Updates */}
      <div className="space-y-12">
        {updates.map((update) => (
          <div
            key={update.version}
            className="relative pl-8 border-l-2 border-muted pb-4"
          >
            {/* Dot on Timeline */}
            <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
              <span className="text-xl font-bold">{update.version}</span>
              <span className="hidden md:block text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">
                {update.date}
              </span>
              <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider md:ml-2 w-fit">
                {update.status}
              </span>
            </div>

            <Card className="bg-card/50 border-muted">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {update.changes.map((change, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-0.5 text-primary">{change.icon}</span>
                      <span className="leading-relaxed">{change.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
