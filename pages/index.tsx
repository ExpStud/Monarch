import {
  PageLayout,
  LandingView,
  Footer,
  Header,
  NewsView,
  MeetTheTeamView,
  PageHead,
} from "@components";
import { NextPage } from "next";
import { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const Home: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false]);
  const [showSite, setShowSite] = useState(false);

  return (
    <>
      <PageHead
        title="Monarch"
        description="Description"
        url="https://addurl.xyz" // no backslash at the end
        twitter="Monarch_Coll"
      />
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
                // className="section overflow-x-hidden xl:h-screen xl:overflow-y-hidden"
                className="section xl:h-screen xl:overflow-hidden"
              >
                <Header
                  menuType="absolute"
                  pageIndex={0}
                  section={0}
                  fullpageApi={fullpageApi}
                />
                <MeetTheTeamView />
              </div>
              <div
                style={{ opacity: showSite ? "1" : "0" }}
                className="section overflow-x-hidden"
              >
                <Header
                  menuType="relative"
                  pageIndex={0}
                  section={1}
                  fullpageApi={fullpageApi}
                />
                <NewsView />
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};
export default Home;
