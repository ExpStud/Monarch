import { exitAnimation } from "@constants";
import { AnimatePresence, motion, useInView, useScroll } from "framer-motion";
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useWindowSize } from "@hooks";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { LandingHeader } from "..";

interface Assets {
  src: string;
}
const _assets: Assets[] = [
  {
    src: "/videos/landing_animation.mp4", //`/videos/1.mp4`,
  },
  {
    src: `/videos/final.mp4`,
  },
  {
    src: `/videos/2.mp4`,
  },
  {
    src: `/videos/2.mp4`,
  },
];

interface Props {
  setShowSite: any;
  fullpageApi: any;
}

const LandingView: FC<Props> = ({ setShowSite, fullpageApi }) => {
  const [didRender, setDidRender] = useState<boolean | null>(null);

  const [winWidth] = useWindowSize();
  const mobileView = winWidth <= 1024;
  //refs
  const scrollRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLVideoElement>(null);

  // const isInView = useInView(scrollRef);
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
  });

  //handles only showing video on first render
  useEffect(() => {
    const rendered = sessionStorage.getItem("didRender");

    if (rendered) {
      setAnimationEnded(true);
      setDidRender(true);
    } else {
      setDidRender(false);
    }

    return () => {
      sessionStorage.setItem("didRender", "true");
    };
  }, []);

  return (
    <div className="h-[100vh] overflow-hidden">
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
        ref={scrollRef}
      >
        {/* desktop */}
        {!didRender ? (
          <motion.video
            ref={introRef}
            autoPlay
            muted
            playsInline
            key="intro desktop"
            className={`h-full w-screen absolute inset-0 -z-10 ${
              !showLoop ? "visible" : "invisible"
            }`}
            style={{ objectFit: "cover" }}
            onEnded={() => {
              // setShowLoop(true);
              setAnimationEnded(true);
            }}
            {...exitAnimation}
          >
            <source src={_assets[0].src} type="video/mp4" />
          </motion.video>
        ) : (
          <motion.div {...exitAnimation}>
            <Image
              src="/images/logo-lg.png"
              width={458 * 1.2}
              height={354 * 1.2}
              alt="Monarch Logo"
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-10"
            />
          </motion.div>
        )}

        <div
          className={
            (animationEnded ? "opacity-100 " : "opacity-0 ") +
            "transition-opacity ease-in duration-500 relative"
          }
        >
          <div className="lg:flex justify-center text-xs tracking-[2px] w-full pb-4 max-md:mt-10 px-4 sm:px-6">
            KEEP SCROLLING
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingView;
