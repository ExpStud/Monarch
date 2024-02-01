import { PageLayout, NewsView } from "@components";
import { NextPage } from "next";

const News: NextPage = () => {
  return (
    <PageLayout pageIndex={1}>
      <NewsView />
    </PageLayout>
  );
};
export default News;
