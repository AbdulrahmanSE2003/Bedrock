import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Task } from "@/types/tasks";
import { Button } from "@/components/ui/button";
import { Trash2, Save, Edit } from "lucide-react";

const TaskModal = ({ task }: { task?: Task }) => {
  return (
    <DialogContent className="sm:max-w-120 p-0 overflow-hidden border-none shadow-2xl">
      <DialogHeader className="p-6 pb-0">
        <div className="flex items-center justify-between">
          <DialogTitle className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Edit size={20} />
            </div>
            Edit Task
          </DialogTitle>
        </div>
      </DialogHeader>

      <form className="p-6 space-y-6">
        <div className="grid gap-5">
          {/* Title Field */}
          <div className="grid gap-2">
            <Label htmlFor="title" className="text-sm font-semibold ml-1">
              Task Title
            </Label>
            <Input
              id="title"
              name="title"
              defaultValue={task?.title || "Enter Task Title"}
              className="h-11 bg-muted/50 focus-visible:ring-primary border-none shadow-inner"
              placeholder="What needs to be done?"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Priority Field */}
            <div className="w-full space-y-2">
              <Label htmlFor="priority" className="text-sm font-semibold ml-1">
                Priority Level
              </Label>
              <Select defaultValue={task?.priority.toLowerCase() || "Priority"}>
                <SelectTrigger className="h-11 w-full bg-muted/50 border-none shadow-inner capitalize">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent className={`w-full`}>
                  <SelectItem value="low"> Low</SelectItem>
                  <SelectItem value="medium"> Medium</SelectItem>
                  <SelectItem value="high"> High</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full space-y-2">
              <Label htmlFor="status" className="text-sm font-semibold ml-1">
                Current Status
              </Label>
              <Select defaultValue={task?.status || "backlog"}>
                <SelectTrigger className="h-11 w-full bg-muted/50 border-none shadow-inner capitalize text-muted-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="backlog">Backlog</SelectItem>
                  <SelectItem value="to-do">To Do</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="done">Done</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </form>

      {/* Footer بستايل منفصل خفيف */}
      <DialogFooter className="bg-muted/30 p-4 gap-2 sm:gap-0 border-t">
        {task && (
          <Button
            type="button"
            variant="ghost"
            className="text-destructive hover:bg-destructive/10 hover:text-destructive flex items-center gap-2"
          >
            <Trash2 size={16} />
            Delete Task
          </Button>
        )}
        <div className="flex-1" />
        <Button type="submit" className="flex items-center gap-2 px-6">
          <Save size={16} />
          Save Changes
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default TaskModal;
