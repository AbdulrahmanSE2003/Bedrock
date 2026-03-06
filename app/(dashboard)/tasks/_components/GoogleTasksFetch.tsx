"use client";

import { bulkInsert, fetchGoogleTasks } from "@/actions/tasks";
import { Button } from "@/components/ui/button";
import { bell } from "@/lib/utils";
import { Task } from "@/types/tasks";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface GoogleTasksInterface {
  kind: string;
  id: string;
  etag: string;
  title: string;
  updated: string;
  selfLink: string;
  position: string;
  status: string;
  due: string;
  links: [];
  webViewLink: string;
}

const GoogleTasksFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleGoogleTasks = async () => {
    setIsLoading(true);
    const res = await fetchGoogleTasks();

    const tasksToUpload: Task[] = res.tasks.map(
      ({ title, id, due }: GoogleTasksInterface) => ({
        title,
        due_date: due,
        status: "backlog",
        source: "google",
        external_id: id,
      }),
    );

    const resUpload = await bulkInsert(tasksToUpload);
    if (resUpload?.error) {
      toast.error(resUpload?.error || "Failed to sync tasks");
    } else {
      toast.success("Tasks synced successfully!");
      bell();
    }
    setIsLoading(false);
  };
  return (
    <Button onClick={handleGoogleTasks}>
      {isLoading ? (
        <>
          <Loader2 className={`animate-spin`} />
          <span>Loading...</span>
        </>
      ) : (
        <>
          <CheckCircle />
          <span>Sync with Tasks</span>
        </>
      )}
    </Button>
  );
};

export default GoogleTasksFetch;
