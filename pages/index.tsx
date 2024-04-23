import {
  LandingView,
  Footer,
  Header,
  NewsView,
  MeetTheTeamView,
  PageHead,
  PageLayout,
} from "@components";
import { useInView } from "framer-motion";
import { NextPage } from "next";
import { useRef, useState } from "react";
import { useScrollDirection } from "src/hooks";

const Home: NextPage = () => {
  const [showSite, setShowSite] = useState(false);

  const newsRef = useRef<HTMLDivElement>(null);
  const newsInView = useInView(newsRef);

  const scrollDirection = useScrollDirection();

  return (
    <PageLayout
      // header={!isInView && scrollDirection === "up"}
      // header={true}
      headerType="fixed"
      pageIndex={0}
      section={newsInView ? 1 : 0}
    >
      <LandingView setShowSite={setShowSite} />
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
        {/* <Header menuType="relative" pageIndex={0} section={1} /> */}
        <div ref={newsRef}>
          <NewsView />
        </div>
        {/* <Footer page="landing" /> */}
      </div>
    </PageLayout>
  );
};
export default Home;
