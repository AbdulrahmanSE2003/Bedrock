export type Task = {
  id: string;
  title: string;
  priority: "high" | "medium" | "low";
  source: "local" | "google" | "trello";
  status: "backlog" | "to-do" | "in-progress" | "done";
  external_id?: string;
  due_date?: string;
};
