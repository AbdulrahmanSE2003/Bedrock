export type Habit = {
  id: string;
  name: string;
  color: string;
  habit_logs: { completed_at: string }[];
  created_at: string;
  user_id: string;
};

/*
color
: 
"#10b981"
created_at
: 
"2026-02-27T07:19:21.228548+00:00"
habit_logs
: 
(5) [{…}, {…}, {…}, {…}, {…}]
id
: 
"bcfb0b54-e19b-49cd-9dfe-fdb5614cb979"
name
: 
"Reading Quran"
user_id
: 
"9339bbd9-6bbb-43ab-8709-383ab0884dc6"
[[Prototype]]
: 
Object */
