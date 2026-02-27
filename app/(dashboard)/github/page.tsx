import ComingSoon from "@/app/_components/ComingSoon";
import PageHeading from "@/app/_components/PageHeading";

const page = () => {
  return (
    <div className="h-full space-y-10">
      <PageHeading title="Github Progress" />
      <div className="w-3/4 mx-auto mt-20">
        <ComingSoon featureName="Github" />
      </div>
    </div>
  );
};

export default page;
