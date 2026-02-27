import ComingSoon from "../../_components/ComingSoon";
import PageHeading from "../../_components/PageHeading";

const page = () => {
  return (
    <div className="h-full space-y-10">
      <PageHeading title="Content Assistant" />
      <div className="w-3/4 mx-auto mt-20">
        <ComingSoon featureName="Content Assistant" />
      </div>
    </div>
  );
};

export default page;
