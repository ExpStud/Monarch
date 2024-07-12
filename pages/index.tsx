import {
  LandingView,
  NewsView,
  MeetTheTeamView,
  PageLayout,
  JobsView,
} from "@components";
import { NextPage } from "next";
import { useRef, useState } from "react";

const Home: NextPage = () => {
  const [showSite, setShowSite] = useState(false);

  const homeRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);
  const jobsRef = useRef<HTMLDivElement>(null);

  return (
    <PageLayout
      headerType="fixed"
      section={0}
      // section={getSection()}
    >
      <div ref={homeRef}>
        <LandingView setShowSite={setShowSite} />
      </div>
      <div className="section" id="team" ref={teamRef}>
        <MeetTheTeamView />
      </div>
      <div className="section" id="news" ref={newsRef}>
        <NewsView />
      </div>
      <div className="section" id="jobs" ref={newsRef}>
        <JobsView />
      </div>
    </PageLayout>
  );
};
export default Home;
