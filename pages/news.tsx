import { PageLayout, LandingView, NewsView } from "@components";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

const News: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false]);

  return (
    <PageLayout pageIndex={1}>
      <NewsView />
    </PageLayout>
  );
};
export default News;
