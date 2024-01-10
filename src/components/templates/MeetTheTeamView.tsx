import { motion } from "framer-motion";
import { Dispatch, SetStateAction, FC, useContext } from "react";
import { ViewContext, slideLeft, slideRight } from "@constants";
import { handleAssetLoad } from "@utils";
import Image from "next/image";
import {Card} from "@components";

const MeetTheTeamView: FC= () => {
  return (
    <>
    <div className="flex flex-col items-center mt-6">
            <h1 className="text-3xl tracking-[6px]">OUR TEAM</h1>
            
            <div className="flex w-[90%] gap-10 mt-8 text-[#FAF6EE] justify-center flex-wrap pb-20">
                <Card image="/images/woman-1.png" position="Founder" name="Kara Nortman"></Card>
                <Card image="/images/woman-2.png" position="Loremip" name="Lorem Ipsum"></Card>
                <Card image="/images/woman-3.png" position="Managing Partner" name="Jasmine Robinson"></Card>
            </div>
         {/* Welcome developers! */}
    </div>
    </>
  );
};

export default MeetTheTeamView;

