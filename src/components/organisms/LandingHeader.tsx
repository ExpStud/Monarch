import { FC } from "react";
import Link from "next/link";
import { scrollToSection } from "@utils";

interface Props {
  callback?: (id: number) => void;
}

const LandingHeader: FC<Props> = (props: Props) => {
  const { callback } = props;

  return (
    <div className="flex font-light tracking-[0.11rem] z-10 gap-2 sm:gap-4 md:gap-8  text-[12px] sm:text-xs md:text-sm justify-center mt-4 absolute w-screen text-center px-4">
      <div
        onClick={() => {
          if (callback) {
            callback(2);
          } else {
            scrollToSection("team");
          }
        }}
        className="cursor-pointer md:ml-5 inactive-tab whitespace-nowrap"
      >
        MEET THE TEAM
      </div>
      <div
        onClick={() => {
          if (callback) {
            callback(3);
          } else {
            scrollToSection("news");
          }
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
