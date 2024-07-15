import { PageLayout, JobsView } from "@components";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <PageLayout headerType="fixed" section={3}>
      <div className="mt-20 md:mt-10 lg:mt-0" />
      <JobsView />
    </PageLayout>
  );
};
export default Home;
