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
    } else if (query?.to === "jobs") {
      scrollToSection("jobs");
    } else if (query?.to === "portfolio") {
      scrollToSection("portfolio");
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
              className="absolute left-1/2 top-[54.5%] transform -translate-x-1/2 -translate-y-1/2 col-centered gap-10 lg:gap-8"
              key="image"
              {...longExitAnimation}
            >
              <Image
                src="/images/logo-m.png"
                width={458}
                height={354}
                alt="Monarch Logo"
                className="scale-100 lg:px-6 -z-[11] px-12 lg:px-0"
              />
              <p className="row-centered gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mon-medium">
                PLAY THE GAME{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="2"
                  viewBox="0 0 2 2"
                  fill="none"
                >
                  <circle cx="1" cy="1" r="1" fill="black" />
                </svg>{" "}
                CHANGE THE GAME{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="2"
                  viewBox="0 0 2 2"
                  fill="none"
                >
                  <circle cx="1" cy="1" r="1" fill="black" />
                </svg>{" "}
                GROW THE GAME
              </p>
              <p className="text-center text-sm lg:text-[14px]  tracking-[2px] w-[90vw] md:w-[750px]">
                Monarch&apos;s mission is to build leading women&apos;s sports
                institutions that inspire and unite, powered by communities that
                feel representative of this time in history.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default LandingView;
