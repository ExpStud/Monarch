import { FC } from "react";
import { Card, Header } from "@components";
import { motion } from "framer-motion";
import { enterAnimation } from "src/constants";

interface Props {
  fullpageApi: any;
}
const MeetTheTeamView: FC<Props> = (props: Props) => {
  const { fullpageApi } = props;
  return (
    <motion.div
      className=" flex flex-col items-center min-h-screen lg:h-screen"
      {...enterAnimation}
    >
      <Header
        menuType="relative"
        pageIndex={0}
        section={0}
        fullpageApi={fullpageApi}
      />
      <h1 className="text-3xl tracking-[6px] py-10 md:py-20">OUR TEAM</h1>

      <div className="h-full flex flex-col lg:flex-row w-[90%] gap-10 text-[#FAF6EE] justify-center items-center lg:items-start pb-10">
        <Card
          image="/images/woman-1.png"
          position="Founder"
          name="Kara Nortman"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in.
          Lorem ipsum dolor sit amet, consectetur adipisn."
        />
        <Card
          image="/images/woman-2.png"
          position="Loremip"
          name="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        />
        <Card
          image="/images/woman-3.png"
          position="Managing Partner"
          name="Jasmine Robinson"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
      </div>
      <div className="flex justify-center text-xs tracking-[2px] w-full pb-4 max-md:mt-10 px-4 sm:px-6">
        KEEP SCROLLING
      </div>
    </motion.div>
  );
};

export default MeetTheTeamView;
