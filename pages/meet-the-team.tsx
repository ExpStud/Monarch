import { PageLayout, LandingView } from "@components";
import { NextPage } from "next";
import { useState } from "react";
import {Card} from "@components";

const MeetTheTeam: NextPage = () => {

  return (
        <div className="flex flex-col items-center mt-24 max-[770px]:mt-32 max-[440px]:mt-44 max-[255px]:mt-48">
            <h1 className="text-3xl tracking-[6px]">OUR TEAM</h1>
            
            <div className="flex w-[90%] gap-10 mt-8 text-[#FAF6EE] justify-center flex-wrap pb-20">
                <Card image="/images/woman-1.png" position="Founder" name="Kara Nortman"></Card>
                <Card image="/images/woman-2.png" position="Loremip" name="Lorem Ipsum"></Card>
                <Card image="/images/woman-3.png" position="Managing Partner" name="Jasmine Robinson"></Card>
            </div>
        </div>
  );
};
export default MeetTheTeam;
