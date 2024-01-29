import { FC } from "react";
import { Card } from "@components";

const MeetTheTeamView: FC = () => {
  return (
    <div className="flex flex-col items-center pb-20">
      <h1 className="text-3xl tracking-[6px] py-20">OUR TEAM</h1>

      <div className="flex w-[90%] gap-10 text-[#FAF6EE] justify-center flex-wrap ">
        <Card
          image="/images/woman-1.png"
          position="Founder"
          name="Kara Nortman"
        />
        <Card
          image="/images/woman-2.png"
          position="Loremip"
          name="Lorem Ipsum"
        />
        <Card
          image="/images/woman-3.png"
          position="Managing Partner"
          name="Jasmine Robinson"
        />
      </div>
    </div>
  );
};

export default MeetTheTeamView;
