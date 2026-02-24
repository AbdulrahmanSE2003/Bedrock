import { auth } from "@/auth";

const page = async () => {
  const session = await auth();
  console.log(session);

  return <div>{session?.user?.name}</div>;
};

export default page;
