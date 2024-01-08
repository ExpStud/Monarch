import { PageLayout, LandingView, Footer, Header } from "@components";
import { NextPage } from "next";
import { useState } from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import MeetTheTeam from "./meet-the-team";
import News from "./news";

const Home: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false]);

  function listenScrollEvent() {
    console.log('Scroll event detected!');
  }

  return (
    <ReactFullpage
      licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={1000}
      setAllowScrolling={false}


      render = { fullpageApi => {
        // console.log(fullpageApi.fullpageApi.getFullpageData().options.setAllowScrolling);
        // onScrollOverflow: function( section, slide, position, direction){
        //   console.log(section);
        //   console.log("position: " + position);
        // }

        if(fullpageApi.fullpageApi){
            console.log(fullpageApi.fullpageApi.getScrollY());
        }

        return (
          <ReactFullpage.Wrapper>
            <section className="section">
              <LandingView fullpageApi={fullpageApi}></LandingView>
            </section>

            <div className="section" onScroll={(a)=> console.log(a)}>
              <Header pageIndex={0} />
              <MeetTheTeam></MeetTheTeam>
              <News></News>
              <Footer></Footer>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
export default Home;
