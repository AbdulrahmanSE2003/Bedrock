"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DialogClose,
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
import { useRef, useState } from "react";
import { toast } from "sonner";
import { createTask, deleteTask, updateTask } from "@/actions/tasks";
import { bell } from "@/lib/utils";

const TaskModal = ({ task, col }: { task?: Task; col?: string }) => {
  const [priority, setPriority] = useState(task?.priority || "low");
  const [status, setStatus] = useState(task?.status || col || "backlog");
  const [title, setTitle] = useState(task?.title || "");

  console.log(task);

  const closeRef = useRef<HTMLButtonElement>(null);

  const handleSave = async (formData: FormData) => {
    if (!title?.trim() || !priority || !status) {
      toast.warning("Please enter needed fields.");
      return;
    }
    const newTitle = formData.get("title");
    const newPriority = formData.get("priority");
    const newStatus = formData.get("status");
    let res;

    // Handling creating update if existing task passed to modal
    if (task) {
      const id = formData.get("id");
      res = await updateTask(id, newTitle, newPriority, newStatus);
    } else {
      res = await createTask(newTitle, newPriority, newStatus);
    }

    if (res?.success) {
      closeRef.current?.click();

      setTimeout(() => {
        toast.success(task ? "Updated successfully!" : "Created successfully!");
        bell();

        if (!task) {
          setTitle("");
          setPriority("low");
          setStatus(col || "backlog");
        }
      }, 200);
    } else {
      toast.error(`Operation failed.`);
    }
  };

  const handleDelete = async () => {
    if (!task) return;
    const res = await deleteTask(task?.id);

    if (res?.success) {
      closeRef.current?.click();
      setTimeout(() => {
        toast.success("Task updated successfully!");
        bell();
      }, 300);
    } else {
      toast.error(`Failed to update task.`);
    }
  };

  return (
    <DialogContent className="sm:max-w-120 p-0 overflow-hidden border-none shadow-2xl">
      <DialogHeader className="p-6 pb-0">
        <div className="flex items-center justify-between">
          <DialogTitle className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Edit size={20} />
            </div>
            {task ? "Edit" : "Create"} Task
          </DialogTitle>
        </div>
      </DialogHeader>

      <form action={handleSave} className="space-y-6">
        <div className="grid gap-5 p-6 pt-0">
          <input type="hidden" name="id" value={task?.id} />
          {/* Title Field */}
          <div className="grid gap-2">
            <Label htmlFor="title" className="text-sm font-semibold ml-1">
              Task Title
            </Label>
            <Input
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="h-11 bg-muted  border-none shadow-inner"
              placeholder="What needs to be done?"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Priority Field */}
            <div className="w-full space-y-2">
              <Label htmlFor="priority" className="text-sm font-semibold ml-1">
                Priority Level
              </Label>
              <input type="hidden" name="priority" value={priority} />
              <Select value={priority} onValueChange={setPriority}>
                {" "}
                <SelectTrigger className="h-11 w-full bg-muted border-none shadow-inner capitalize">
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
              <input type="hidden" name="status" value={status} />
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="h-11 w-full bg-muted border-none shadow-inner capitalize">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="backlog">Backlog</SelectItem>
                  <SelectItem value="to-do">To Do</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Footer بستايل منفصل خفيف */}
        <DialogFooter className="bg-muted/30 p-4 gap-2 sm:gap-0 border-t">
          {task && (
            <Button
              onClick={handleDelete}
              type="button"
              variant="ghost"
              className="text-destructive hover:bg-destructive/10 hover:text-destructive flex items-center gap-2"
            >
              <Trash2 size={16} />
              Delete Task
            </Button>
          )}
          <div className="flex-1 gap-2" />
          <div className={`flex items-center gap-2`}>
            <DialogClose asChild>
              <Button
                ref={closeRef}
                variant={"outline"}
                className="flex items-center gap-2 px-6"
              >
                Close
              </Button>
            </DialogClose>
            <Button disabled={!title} className="flex items-center gap-2 px-6">
              <Save size={16} />
              Save Changes
            </Button>
          </div>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default TaskModal;
