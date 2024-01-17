import {
  PageLayout,
  LandingView,
  Footer,
  Header,
  NewsView,
  MeetTheTeamView,
} from "@components";
import { NextPage } from "next";
import { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const Home: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false]);
  const [showSite, setShowSite] = useState(false);

  return (
    <ReactFullpage
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000}
      credits={{ enabled: false }}
      render={(fullpageApi) => {
        return (
          <ReactFullpage.Wrapper>
            <section className="section overflow-hidden">
              <LandingView
                fullpageApi={fullpageApi}
                setShowSite={setShowSite}
              />
            </section>

            <div
              style={{ opacity: showSite ? "1" : "0" }}
              className="section overflow-x-hidden h-[110vh] "
            >
              <Header
                menuType="absolute"
                pageIndex={0}
                fullpageApi={fullpageApi}
              />
              <div className="mt-28 max-md:mt-10" />
              <MeetTheTeamView />
            </div>
            <div
              style={{ opacity: showSite ? "1" : "0" }}
              className="section overflow-x-hidden"
            >
              <NewsView />
              <Footer />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
export default Home;
