import { fetchGoogleTasks } from "@/actions/tasks";
import PageHeading from "@/app/_components/PageHeading";

const page = async () => {
  // const tasks = await fetchGoogleTasks();
  // console.log(tasks);

  return (
    <div>
      <PageHeading title="Kanban Board" />
    </div>
  );
};

export default page;
