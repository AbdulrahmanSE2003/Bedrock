export type Habit = {
  id: string;
  name: string;
  color: string;
  habit_logs: { completed_at: string }[];
};
