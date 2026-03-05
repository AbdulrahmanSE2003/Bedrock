"use client";

import { TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, Save } from "lucide-react";
import { Input } from "@/components/ui/input";
import { BACKGROUND_MAP, SOUNDS } from "@/lib/utils";
import { usePreferences } from "@/store/usePreferences";
import { toast } from "sonner";
import { usePomodoroStore } from "@/store/usePomodoroStore";

const Preferences = () => {
  const { tasksView, timerSound, timerBg, setView, setTimerBg, setTimerSound } =
    usePreferences();
  const { isActive } = usePomodoroStore();

  const backgroundKeys = Object.keys(BACKGROUND_MAP);

  return (
    <TabsContent value="preferences" className="outline-none">
      <Card className="border-zinc-200 dark:border-zinc-800 shadow-sm">
        <CardHeader>
          <CardTitle>System Preferences</CardTitle>
          <CardDescription>
            Tailor your experience to your workflow.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 1. Tasks View Logic */}
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Default Tasks View</Label>
              <p className="text-[10px] text-muted-foreground">
                Which view to show when you open the app.
              </p>
            </div>
            <Select onValueChange={setView} defaultValue={tasksView}>
              <SelectTrigger className="w-32 h-9 bg-muted/50 border-none shadow-inner capitalize">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kanban">Kanban</SelectItem>
                <SelectItem value="table">Table</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator className="bg-zinc-100 dark:bg-zinc-800" />

          {/* 2. Background Logic */}
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Default Timer Background</Label>
              <p className="text-[10px] text-muted-foreground">
                Choose the ambiance for your focus sessions.
              </p>
            </div>
            <Select
              disabled={isActive}
              onValueChange={setTimerBg}
              defaultValue={timerBg}
            >
              <SelectTrigger className="w-40 h-9 bg-muted/50 border-none shadow-inner capitalize">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {backgroundKeys.map((key) => (
                  <SelectItem className="capitalize" key={key} value={key}>
                    {key}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Separator className="bg-zinc-100 dark:bg-zinc-800 my-4" />

          {/* 3. Sound Logic */}
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Default Timer Sound</Label>
              <p className="text-[10px] text-muted-foreground">
                The sound that will play during your Pomodoro.
              </p>
            </div>
            <Select
              disabled={isActive}
              onValueChange={setTimerSound}
              defaultValue={timerSound}
            >
              <SelectTrigger className="w-32 h-9 bg-muted/50 border-none shadow-inner capitalize">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {SOUNDS.map((sound) => (
                  <SelectItem className="capitalize" key={sound} value={sound}>
                    {sound}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Separator className="bg-zinc-100 dark:bg-zinc-800 my-4" />

          {/* 4. Dhikr Logic */}
          <div className="flex items-center justify-between gap-6 pt-2">
            <div className="space-y-2 w-full">
              <Label htmlFor="dhikr" className="text-xs font-bold">
                Add custom Dhikr
              </Label>
              <div className="flex justify-between gap-2 w-full">
                <Input
                  id="dhikr"
                  placeholder="اللهم صلى وسلم وبارك على نبينا محمد"
                  className="h-10 bg-muted/50 max-w-2xl border-none shadow-inner focus-visible:ring-1"
                />
                <Button className="shrink-0">
                  <Plus size={18} />
                  Add Dhikr
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default Preferences;
