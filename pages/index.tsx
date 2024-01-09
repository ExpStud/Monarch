import { PageLayout, LandingView, Footer, Header, NewsView, MeetTheTeamView } from "@components";
import { NextPage } from "next";
import { useState } from "react";
import ReactFullpage from '@fullpage/react-fullpage';

const Home: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false]);
  const [showSite, setShowSite] = useState(false);

  return (
    <ReactFullpage
      licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={1000}
      credits={{ enabled: false }}

      render={fullpageApi => {
        return (
          <ReactFullpage.Wrapper>
            <section className="section overflow-hidden">
              <LandingView fullpageApi={fullpageApi} setShowSite={setShowSite}></LandingView>
            </section>

            <div style={{ opacity: (showSite ? "1" : "0") }} className="section overflow-x-hidden">
              <Header menuType="fixed" pageIndex={0} />
              <div className="mt-28 max-md:mt-10"></div>
              <MeetTheTeamView></MeetTheTeamView>
              <NewsView></NewsView>
              <Footer></Footer>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
export default Home;
