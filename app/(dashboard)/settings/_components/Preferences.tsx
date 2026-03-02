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
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Plus, Save } from "lucide-react";
import { Input } from "@/components/ui/input";

const Preferences = () => {
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
          {/* TODO: handle view logic */}
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Default Tasks View</Label>
              <p className="text-[10px] text-muted-foreground">
                Which view to show when you open the app.
              </p>
            </div>
            <Select defaultValue="kanban">
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

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Default Timer Background</Label>
              <p className="text-[10px] text-muted-foreground">
                Which view to show when you open the app.
              </p>
            </div>
            {/* TODO: handle background logic */}
            <Select defaultValue="kanban">
              <SelectTrigger className="w-32 h-9 bg-muted/50 border-none shadow-inner capitalize">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kanban">Kanban</SelectItem>
                <SelectItem value="table">Table</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator className="bg-zinc-100 dark:bg-zinc-800 my-4" />
          {/* TODO: handle sound logic */}

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Default Timer Sound</Label>
              <p className="text-[10px] text-muted-foreground">
                Which view to show when you open the app.
              </p>
            </div>
            <Select defaultValue="kanban">
              <SelectTrigger className="w-32 h-9 bg-muted/50 border-none shadow-inner capitalize">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kanban">Kanban</SelectItem>
                <SelectItem value="table">Table</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator className="bg-zinc-100 dark:bg-zinc-800 my-4" />

          <div className="flex items-center justify-between gap-6 pt-2">
            <div className="space-y-2 w-2/4">
              <Label htmlFor="dhikr" className="text-xs font-bold">
                Add custom Dhikr
              </Label>
              <Input
                id="dhikr"
                placeholder="Add more Adhkar"
                className="h-10 bg-muted/50 border-none shadow-inner focus-visible:ring-1"
              />
            </div>
            <Button>
              <Plus />
              <span>Add</span>
            </Button>
          </div>
        </CardContent>
        <CardFooter className="border-t flex justify-end">
          <Button size="sm" className="gap-2 px-6">
            {" "}
            <Save size={14} /> Update Preferences
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default Preferences;
