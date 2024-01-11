import { exitAnimation } from "@constants";
import { AnimatePresence, motion, useInView, useScroll } from "framer-motion";
import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from "react";
import { useWindowSize } from "@hooks";
import Link from "next/link";

interface Assets {
  src: string;
}
const _assets: Assets[] = [
  {
    src: `/videos/1.mp4`,
  },
  {
    src: `/videos/1.mp4`,
  },
  {
    src: `/videos/2.mp4`,
  },
  {
    src: `/videos/2.mp4`,
  },
];

interface Props {
  // setAssets?: Dispatch<SetStateAction<boolean[]>>;
  // setIsInView: Dispatch<SetStateAction<boolean>>;
  // id: string;
  // setCurrentPage: Dispatch<SetStateAction<string>>;
  // showLoop: boolean;
  // setShowLoop: Dispatch<SetStateAction<boolean>>;
  setShowSite: any
  fullpageApi: any
}

const LandingView: FC<Props> = ({ setShowSite, fullpageApi }) => {
  const [winWidth] = useWindowSize();
  const mobileView = winWidth <= 1024;
  //refs
  const scrollRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLVideoElement>(null);
  const loopRef = useRef<HTMLVideoElement>(null);
  const introRefMobile = useRef<HTMLVideoElement>(null);
  const loopRefMobile = useRef<HTMLVideoElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // const isInView = useInView(scrollRef);
  const [animationEnded, setAnimationEnded] = useState(false);
  const showLoop = false;

  useEffect(() => {
    if (animationEnded) {
      setShowSite(true);
      if (fullpageApi.fullpageApi) {
        fullpageApi.fullpageApi.setAllowScrolling(true);
      }
    } else {
      if (fullpageApi.fullpageApi) {
        fullpageApi.fullpageApi.setAllowScrolling(false);
      }
    }
  });

  // useEffect(() => {
  //   setIsInView(isInView);
  // }, [isInView, setIsInView]);

  // useEffect(() => {
  //   if (showLoop && loopRef.current && introRef.current) {
  //     loopRef.current.play();
  //     introRef.current.pause();
  //   }

  //   if (showLoop && loopRefMobile.current && introRefMobile.current) {
  //     loopRefMobile.current.play();
  //     introRefMobile.current.pause();
  //   }
  // }, [showLoop]);

  return (
    <div className="h-[100vh] overflow-hidden">
      <div className={(animationEnded ? "opacity-100 " : "opacity-0 ") + "transition-opacity ease-in duration-500"}>
        <div className="flex text-sm font-light  tracking-[1px] z-10 gap-16 max-md:gap-6 max-md:text-[10px] justify-center mt-4 absolute w-screen">
          <div onClick={() => fullpageApi.fullpageApi.moveTo(2)} className="cursor-pointer">MEET THE TEAM</div>
          <div onClick={() => fullpageApi.fullpageApi.moveTo(2)} className="cursor-pointer">NEWS</div>
          <Link target="_blank" href="https://monarch.arkpes.com/login">
            <div className="cursor-pointer">INVESTOR PORTAL</div></Link>
        </div>
      </div>

      <motion.div
        key="landing"
        className={`relative w-full ${mobileView ? "h-[82vh]" : "h-screen"} 
      flex flex-col items-center justify-end`}
        {...exitAnimation}
        ref={scrollRef}
      >
        {/* desktop */}
        <motion.video
          ref={introRef}
          autoPlay
          muted
          playsInline
          key="intro desktop"
          className={`${mobileView && "hidden"
            } h-full w-screen absolute inset-0 -z-10 ${!showLoop ? "visible" : "invisible"
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
        <motion.video
          ref={loopRef}
          muted
          playsInline
          key="loop desktop"
          loop
          className={`${mobileView && "hidden"
            } h-full w-screen absolute inset-0 -z-20 ${showLoop ? "visible" : "invisible"
            }`}
          style={{ objectFit: "cover" }}
        >
          <source src={_assets[1].src} type="video/mp4" />
        </motion.video>

        {/* mobile */}
        <AnimatePresence mode="wait">
          {!showLoop && (
            <motion.video
              ref={introRefMobile}
              muted
              autoPlay
              playsInline
              key="intro-mobile"
              className={`${!mobileView && "hidden"
                } md:pt-16 h-3/4 w-screen absolute overflow-visible inset-x-0 top-[55%] transform -translate-y-1/2 -z-10 max-w-[600px] mx-auto ${!showLoop ? "visible" : "invisible"
                }`}
              style={{ objectFit: "cover" }}
              onEnded={() => {
                // setShowLoop(true)
                setAnimationEnded(true);
              }}
              {...exitAnimation}
            >
              <source src={_assets[2].src} type="video/mp4" />
            </motion.video>
          )}
        </AnimatePresence>
        <motion.video
          ref={loopRefMobile}
          muted
          playsInline
          key="loop-mobile"
          loop
          className={`${!mobileView && "hidden"
            } h-3/4 w-screen absolute overflow-visible inset-x-0 top-[55%] transform -translate-y-1/2 -z-20 max-w-[600px] mx-auto ${showLoop ? "visible" : "invisible"
            }`}
          style={{ objectFit: "cover" }}
        // {...exitAnimation}
        >
          <source src={_assets[3].src} type="video/mp4" />
        </motion.video>

        <div className={(animationEnded ? "opacity-100 " : "opacity-0 ") + "transition-opacity ease-in duration-500 relative"}>
          <div className="lg:flex justify-center text-xs tracking-[2px] w-full pb-4 max-md:mt-10 px-4 sm:px-6">
            KEEP SCROLLING
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingView;
