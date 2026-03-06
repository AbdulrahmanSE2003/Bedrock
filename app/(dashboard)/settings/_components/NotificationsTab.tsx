"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { Sparkles } from "lucide-react";

const NotificationsTab = () => {
  return (
    <TabsContent value="notifications" className="outline-none">
      <Card className="border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden relative">
        {/* Decorative background element */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />

        <CardHeader>
          <CardTitle>Communication</CardTitle>
          <CardDescription>
            Manage your email and sound preferences.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col items-center justify-center py-12 space-y-4">
          <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary animate-pulse">
            <Sparkles size={24} />
          </div>

          <div className="text-center space-y-1">
            <h3 className="font-semibold text-lg tracking-tight">
              Coming Soon
            </h3>
            <p className="text-sm text-muted-foreground max-w-[240px]">
              We&apos;re currently building a more advanced notification system
              for your tasks.
            </p>
          </div>

          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-medium text-primary uppercase tracking-widest">
            Work in progress
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default NotificationsTab;
