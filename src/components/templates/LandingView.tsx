import {
  exitAnimation,
  introVideoAnimation,
  introImageAnimation,
} from "@constants";
import { motion, useInView } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
import { useWindowSize } from "@hooks";
import { useRouter } from "next/router";
import { LandingHeader } from "@components";

interface Assets {
  src: string;
}

interface Props {
  setShowSite: any;
  fullpageApi: any;
}

const LandingView: FC<Props> = ({ setShowSite, fullpageApi }) => {
  const [didRender, setDidRender] = useState<boolean | null>(null);

  const [winWidth] = useWindowSize();
  const mobileView = winWidth <= 1024;
  //refs
  const mainRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLVideoElement>(null);

  const isInView = useInView(mainRef);
  const [animationEnded, setAnimationEnded] = useState(false);
  const showLoop = false;

  const { query } = useRouter();

  //stay on news page if from news item
  useEffect(() => {
    if (query?.to === "team") {
      fullpageApi.fullpageApi.moveTo(2);
    } else if (query?.to === "news") {
      fullpageApi.fullpageApi.moveTo(3);
    }
  }, [query]);

  // console.log("fullpageApi ", fullpageApi);

  useEffect(() => {
    // fullpageApi.fullpageApi.destroy("all");
    if (animationEnded) {
      setShowSite(true);
      if (fullpageApi.fullpageApi) {
        fullpageApi.fullpageApi.setAllowScrolling(true);
        fullpageApi.fullpageApi.setKeyboardScrolling(true);
        fullpageApi.fullpageApi.setAutoScrolling(true);
      }

      sessionStorage.setItem("didRender", "true");
    } else {
      if (fullpageApi.fullpageApi) {
        fullpageApi.fullpageApi.setAllowScrolling(false);
      }
    }
  }, [animationEnded, fullpageApi.fullpageApi, setShowSite]);

  //handles only showing video on first render
  useEffect(() => {
    // console.log("isInView ", isInView);
    const rendered = sessionStorage.getItem("didRender");
    // console.log("didRender ", rendered);
    if (rendered) {
      setAnimationEnded(true);
      setDidRender(true);
    } else {
      setDidRender(false);
    }

    // return () => {
    //   sessionStorage.setItem("didRender", "true");
    // };
  }, [isInView]);

  return (
    <div className="h-[100svh] overflow-hidden" ref={mainRef}>
      <div
        className={
          (animationEnded ? "opacity-100 " : "opacity-0 ") +
          "transition-opacity  ease-in duration-500 text-xl"
        }
      >
        <LandingHeader fullpageApi={fullpageApi} setDidRender={setDidRender} />
      </div>

      <motion.div
        key="landing"
        className={`relative w-full ${
          mobileView ? "h-[100svh]" : "h-screen"
        } flex flex-col items-center justify-end`}
        // {...exitAnimation}
      >
        {/* <AnimatePresence mode="wait"> */}
        {!didRender && (
          <motion.video
            ref={introRef}
            autoPlay
            muted
            playsInline
            key="video"
            className={`h-full w-[100vw] inset-0 -z-10 scale-[1.5] absolute `}
            style={{ objectFit: "contain" }}
            onEnded={() => {
              // setDidRender(true);
              setAnimationEnded(true);
            }}
            // {...introVideoAnimation}
            {...exitAnimation}
          >
            <source
              src={
                winWidth < 640
                  ? "/videos/intro/intro-sm.mov"
                  : "/videos/intro/intro.mov"
              }
              type="video/mp4"
            />
          </motion.video>
        )}
        {didRender && (
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            key="image"
            // {...exitAnimation}
          >
            <motion.img
              {...exitAnimation}
              src="/images/logo-lg.png"
              width={458 * 1}
              height={354 * 1}
              alt="Monarch Logo"
              className="a px-10 -z-[11]"
            />
            {/* <Image
              // {...introImageAnimation}
              src="/images/logo-lg.png"
              width={458 * 1.1}
              height={354 * 1.1}
              alt="Monarch Logo"
              className="a px-10 -z-[11]"
            /> */}
          </motion.div>
        )}
        {/* </AnimatePresence> */}

        <div
          className={
            (animationEnded ? "opacity-100 " : "opacity-0 ") +
            "transition-opacity ease-in duration-500 relative"
          }
        >
          <div className="lg:flex justify-center text-[12px] sm:text-xs md:text-sm tracking-[2px] w-full pb-4 max-md:mt-10 px-4 sm:px-6">
            KEEP SCROLLING
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingView;
