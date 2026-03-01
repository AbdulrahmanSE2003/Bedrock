export type Task = {
  id: string;
  title: string;
  priority: "High" | "Medium" | "Low";
  source: "local" | "google" | "trello";
  status: "backlog" | "to-do" | "in-progress" | "done";
};
