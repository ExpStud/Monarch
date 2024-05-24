import { exitAnimation, longExitAnimation } from "@constants";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
import { useWindowSize } from "@hooks";
import { useRouter } from "next/router";
import Image from "next/image";
import { scrollToSection } from "@utils";

interface Props {
  setShowSite: any;
}

const LandingView: FC<Props> = ({ setShowSite }) => {
  const [winWidth] = useWindowSize();
  const mobileView = winWidth <= 1024;
  //refs
  const mainRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLVideoElement>(null);

  const isInView = useInView(mainRef);
  const [animationEnded, setAnimationEnded] = useState(false);

  const { query } = useRouter();

  //stay on news page if from news item
  useEffect(() => {
    if (query?.to === "home") {
    } else if (query?.to === "team") {
      scrollToSection("team");
    } else if (query?.to === "news") {
      scrollToSection("news");
    }
  }, [query]);

  useEffect(() => {
    if (animationEnded) {
      setShowSite(true);

      sessionStorage.setItem("didRender", "true");
    }
  }, [animationEnded, setShowSite]);

  //handles only showing video on first render
  useEffect(() => {
    const rendered = sessionStorage.getItem("didRender");
    // console.log("didRender ", rendered);
    if (rendered) {
      setAnimationEnded(true);
    }

    return () => {
      // sessionStorage.setItem("didRender", "true");
    };
  }, [isInView]);

  return (
    <div className="h-screen overflow-hidden" ref={mainRef}>
      <motion.div
        key="landing"
        className={`relative w-full ${
          mobileView ? "h-screen" : "h-screen"
        } flex flex-col items-center justify-end`}
      >
        <AnimatePresence mode="wait">
          {!animationEnded && (
            <motion.video
              ref={introRef}
              autoPlay
              muted
              playsInline
              key="video"
              className={`h-full w-[100vw] inset-0 -z-10 scale-[1.5] absolute `}
              style={{ objectFit: "contain" }}
              onEnded={() => {
                setAnimationEnded(true);
              }}
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
          {animationEnded && (
            <motion.div
              className="absolute left-1/2 top-[54.5%] transform -translate-x-1/2 -translate-y-1/2 col-centered gap-14 lg:gap-8"
              key="image"
              {...longExitAnimation}
            >
              <Image
                src="/images/logo-mission-bold.svg"
                width={458}
                height={354}
                alt="Monarch Logo"
                className="scale-125 md:scale-100 lg:px-6 -z-[11]"
              />
              <p className="text-center text-sm lg:text-[14px]  tracking-[2px] w-full  min-w-[300px] max-w-[750px]">
                Our mission is to build women&apos;s sports institutions as
                modern communities with the belief that we can learn from sports
                best practices while building electrifying experiences that feel
                different and representative of this time in history.{" "}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default LandingView;
