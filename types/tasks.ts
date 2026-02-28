export type Task = {
  id: string;
  title: string;
  priority: "High" | "Medium" | "Low";
  source: "local" | "Google" | "Trello";
  status: "backlog" | "TO-DO" | "In-Progress" | "Done";
};
