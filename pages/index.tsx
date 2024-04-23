import {
  LandingView,
  NewsView,
  MeetTheTeamView,
  PageLayout,
} from "@components";
import { useInView } from "framer-motion";
import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { useScrollDirection } from "src/hooks";

const Home: NextPage = () => {
  const [showSite, setShowSite] = useState(false);
  const [inView, setInView] = useState<0 | 1 | 2>(0);

  const homeRef = useRef<HTMLDivElement>(null);
  const homeInView = useInView(homeRef);

  const teamRef = useRef<HTMLDivElement>(null);
  const teamInView = useInView(teamRef);

  const newsRef = useRef<HTMLDivElement>(null);
  const newsInView = useInView(newsRef);

  const scrollDirection = useScrollDirection();

  const getSection = (): number => {
    if (scrollDirection === "up") {
      return homeInView ? 0 : teamInView ? 1 : newsInView ? 2 : -1;
    } else {
      return newsInView ? 2 : teamInView ? 1 : homeInView ? 0 : -1;
    }
  };

  // useEffect(() => {
  //   if (scrollDirection === "down") {
  //     if (homeInView) {
  //       setInView(0);
  //     }
  //     if (teamInView) {
  //       setInView(1);
  //     }
  //     if (newsInView) {
  //       setInView(2);
  //     }
  //   } else {
  //     if (newsInView) {
  //       setInView(2);
  //     }
  //     if (teamInView) {
  //       setInView(1);
  //     }
  //     if (homeInView) {
  //       setInView(0);
  //     }
  //   }
  // }, [homeInView, teamInView, newsInView, scrollDirection]);

  console.log(homeInView, teamInView, newsInView);

  return (
    <PageLayout
      headerType="fixed"
      section={0}
      // section={getSection()}
    >
      <div ref={homeRef}>
        <LandingView setShowSite={setShowSite} />
      </div>
      <div
        style={{ opacity: showSite ? "1" : "0" }}
        className="section"
        id="team"
        ref={teamRef}
      >
        <MeetTheTeamView />
      </div>
      <div
        style={{ opacity: showSite ? "1" : "0" }}
        className="section"
        id="news"
        ref={newsRef}
      >
        <NewsView />
      </div>
    </PageLayout>
  );
};
export default Home;
