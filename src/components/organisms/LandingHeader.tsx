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

interface Assets {
  src: string;
}
const _assets: Assets[] = [
  {
    src: "/videos/landing_animation.mp4", //`/videos/1.mp4`,
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
  fullpageApi: any;
  setDidRender?: Dispatch<SetStateAction<boolean | null>>;
}

const LandingHeader: FC<Props> = (props: Props) => {
  const { fullpageApi, setDidRender } = props;
  return (
    <div className="flex font-light tracking-[0.11rem] z-10 gap-2 sm:gap-4 md:gap-8 text-[10px] sm:text-xs justify-center mt-4 absolute w-screen text-center px-4">
      <div
        onClick={() => {
          setDidRender && setDidRender(true);
          fullpageApi.fullpageApi.moveTo(2);
        }}
        className="cursor-pointer md:ml-5 inactive-tab whitespace-nowrap"
      >
        MEET THE TEAM
      </div>
      <div
        onClick={() => {
          setDidRender && setDidRender(true);
          fullpageApi.fullpageApi.moveTo(3);
        }}
        className="inactive-tab"
      >
        NEWS
      </div>
      <Link target="_blank" href="https://monarch.arkpes.com/login">
        <div className="inactive-tab whitespace-nowrap">INVESTOR PORTAL</div>
      </Link>
    </div>
  );
};

export default LandingHeader;
