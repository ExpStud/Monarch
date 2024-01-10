import { PageLayout, MeetTheTeamView } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const MeetTheTeam: NextPage = () => {
  return (
    <PageLayout pageIndex={0}>
      <MeetTheTeamView></MeetTheTeamView>
    </PageLayout>
  );
};
export default MeetTheTeam;
