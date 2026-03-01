import { fetchAllTasks } from "@/actions/tasks";
import TaskView from "./TaskView";

const TasksList = async () => {
  const tasks = await fetchAllTasks();
  console.log(tasks);

  return (
    <>
      <TaskView tasks={tasks} />
    </>
  );
};

export default TasksList;
