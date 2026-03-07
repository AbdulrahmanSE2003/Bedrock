export type TaskPriority = "high" | "medium" | "low";
export type TaskSource = "local" | "google" | "trello";
export type TaskStatus = "backlog" | "to-do" | "in-progress" | "done";

export type Task = {
  id: string;
  title: string;
  priority: TaskPriority;
  source: TaskSource;
  status: TaskStatus;
  external_id?: string;
  due_date?: string;
};
