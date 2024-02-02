import { exitAnimation } from "@constants";
import { AnimatePresence, motion, useInView, useScroll } from "framer-motion";
import { Dispatch, FC, SetStateAction } from "react";
import Link from "next/link";

interface Props {
  fullpageApi: any;
  setDidRender?: Dispatch<SetStateAction<boolean | null>>;
}

const LandingHeader: FC<Props> = (props: Props) => {
  const { fullpageApi, setDidRender } = props;
  return (
    <div className="flex font-light tracking-[0.11rem] z-10 gap-2 sm:gap-4 md:gap-8  text-[10px] sm:text-xs md:text-sm justify-center mt-4 absolute w-screen text-center px-4">
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
