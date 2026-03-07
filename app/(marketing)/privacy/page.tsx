"use client";

import { Lock, EyeOff, Server, FileText, ShieldCheck, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6 min-h-screen">
      {/* زرار الرجوع للهوم */}
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
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        </div>
        <p className="text-muted-foreground max-w-xl">
          We care about your privacy. This policy explains how Bedrock App handles your Google Tasks data securely.
        </p>
      </header>

      {/* Content Grid */}
      <div className="grid gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Section 1 */}
          <Card className="bg-card/50 border-muted">
            <CardHeader className="flex flex-row items-center gap-3 pb-2">
              <Lock size={20} className="text-primary" />
              <CardTitle className="text-lg">Data Collection</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              We only access your Google Tasks through the official API to visualize them in our dashboard. We don't read or store personal information beyond your tasks.
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card className="bg-card/50 border-muted">
            <CardHeader className="flex flex-row items-center gap-3 pb-2">
              <Server size={20} className="text-primary" />
              <CardTitle className="text-lg">Zero-Storage Policy</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              Your tasks are <strong>never stored</strong> on our servers. The app acts as a client that syncs directly between your browser and Google.
            </CardContent>
          </Card>
        </div>

        {/* Section 3 - Full Width */}
        <Card className="bg-card/50 border-muted">
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <EyeOff size={20} className="text-primary" />
            <CardTitle className="text-lg">No Third-Party Sharing</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground leading-relaxed">
            Bedrock App is built for productivity, not data harvesting. We do not share, sell, or provide your data to any third-party services or advertisers.
          </CardContent>
        </Card>

        {/* Footer info */}
        <div className="mt-8 pt-8 border-t border-muted flex justify-between items-center text-xs text-muted-foreground italic">
          <p>Last updated: March 2026</p>
          <p>© Bedrock App - Productivity First</p>
        </div>
      </div>
    </div>
  );
}
