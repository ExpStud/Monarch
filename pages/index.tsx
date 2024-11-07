import {
  LandingView,
  NewsView,
  MeetTheTeamView,
  PageLayout,
  JobsView,
  PortfolioView,
} from "@components";
import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [showSite, setShowSite] = useState(false);

  return (
    <PageLayout headerType="fixed" section={0}>
      <div>
        <LandingView setShowSite={setShowSite} />
      </div>
      <div className="section" id="team">
        <MeetTheTeamView />
      </div>
      <div className="section" id="news">
        <NewsView />
      </div>
      <div className="section" id="jobs">
        <JobsView />
      </div>
      <div className="section" id="portfolio">
        <PortfolioView />
      </div>
    </PageLayout>
  );
};
export default Home;
