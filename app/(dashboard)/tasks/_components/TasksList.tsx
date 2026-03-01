import { fetchAllTasks } from "@/actions/tasks";
import TaskView from "./TaskView";

const TasksList = async () => {
  const tasks = await fetchAllTasks();

  return (
    <>
      <TaskView tasks={tasks} />
    </>
  );
};

export default TasksList;
