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

  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef);
  const scrollDirection = useScrollDirection();

  return (
    <PageLayout
      // header={!isInView && scrollDirection === "up"}
      // header={true}
      headerType="fixed"
    >
      <div ref={inViewRef}>
        <LandingView setShowSite={setShowSite} />
      </div>
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
        <NewsView />
        {/* <Footer page="landing" /> */}
      </div>
    </PageLayout>
  );
};
export default Home;
