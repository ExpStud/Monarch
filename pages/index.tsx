import {
  LandingView,
  Footer,
  Header,
  NewsView,
  MeetTheTeamView,
  PageHead,
} from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false]);
  const [showSite, setShowSite] = useState(false);

  return (
    <>
      <PageHead
        title="Monarch"
        description="Accelerating Equity in Global Sports"
        url="https://addurl.xyz" // no backslash at the end
        twitter="Monarch_Coll"
      />
      <section className="section overflow-hidden">
        <LandingView setShowSite={setShowSite} />
      </section>
      <div
        style={{ opacity: showSite ? "1" : "0" }}
        className="section"
        id="team"
      >
        <MeetTheTeamView />
      </div>
      <div
        style={{ opacity: showSite ? "1" : "0" }}
        className="section"
        id="news"
      >
        <Header menuType="relative" pageIndex={0} section={1} />
        <NewsView />
        <Footer page="landing" />
      </div>
    </>
  );
};
export default Home;
