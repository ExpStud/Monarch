import { PageLayout, LandingView, BackButton } from "@components";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

const Article: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false]);

  return (
    <PageLayout pageIndex={1} footer={true}>
      <div className="mt-10 flex flex-col items-center px-20 max-md:px-6 tracking-widest">
        <BackButton className="self-start mt-[2rem] " />

        <div className="flex flex-col gap-3 pb-[80px] pt-[60px] max-md:pt-[30px] px-20 max-md:px-1 tracking-widest">
          <div className="font-mon-bold text-3xl">
            First came Angel City FC. Now, meet Monarch Collective, a new way to
            invest in women’s sports
          </div>

          <div className="flex max-md:flex-col font-light max-md:text-sm max-md:gap-2 max-md:justify-start max-md:w-[100%] justify-around w-[90%] self-center mt-6 tracking-[2px] whitespace-nowrap">
            <div className="flex font-light items-center">
              10 MIN READ
              <div className="ml-2">
                <img src="images/article-black.png" alt="" />
              </div>
            </div>
            <div className="flex">
              WRITTEN BY:
              <div className="underline ml-2">SAMANTHA MASUNAGA</div>
            </div>
            <div>03/27/2023</div>
          </div>

          <img className="mt-3" src="images/article-image.png" alt="" />

          <div className="text-xs font-light mt-[-2px]">
            NJ/NY Gotham FC forward Ifeoma Onumonu, center left, and Angel City
            FC defender Vanessa Gilles battle for the ball during the second
            half of a 2022 NWSL soccer match in Los Angeles.
          </div>

          <div className="border-x border-x-[1.5px] px-10 max-md:px-3 mt-10 border-black border-opacity-[20%]">
            Los Angeles venture capitalist Kar a Nortman spent eight years
            researching what she saw as a massive missed opportunity — investing
            in women’s sports.
            <br />
            <br />
            Her research led to her involvement with L.A.’s Angel City Football
            Club, of which Nortman is a co-founder, and now, to a new sports
            fund called Monarch Collective with investors that include tennis
            legend Billie Jean King.
            <br />
            <br />
            The $100-million fund led by Nortman and Miami venture capitalist
            Jasmine Robinson is focused on investing in women’s sports teams,
            leagues and related revenue streams, such as media. The idea is to
            prove that more funding for women’s sports will drive greater
            returns on investment and spur additional financing.
            <br />
            <br />
            “This is sort of a joyful way to get people to pay attention to DEI
            and to put your money where your mouth is,” said Nortman, a former
            managing partner at L.A.’s Upfront Ventures, referring to diversity,
            equity and inclusion.
            <br />
            <br />
            Added Robinson, “Our investment can really prove out the quality and
            returns that you can drive in this category, and hopefully bring a
            lot more capital to start paying attention.”
            <br />
            <br />
            Already, professional women’s sports teams around the world are
            bringing in fans and big bucks.
            <br />
            <br />
            New Zealand’s national women’s rugby team attracted a sell-out crowd
            during last year’s Rugby World Cup Final. British fans packed the
            stadium for the debut of a women’s soccer club. In India,
            broadcasting rights to air the new Women’s Indian Premier League
            cricket games went for about $1 million per game
            <br />
            <br />
            “I’ve spent a lot of time thinking about where is the right place to
            put capital now in this ecosystem,” Robinson said. “Over the past
            couple of years, I just kept coming back to women’s sports.”
            <br />
            <br />
            Additional investors in the fund include Laela Sturdy, who runs
            Alphabet’s venture capital arm, and Cindy Holland, a former Netflix
            vice president.
            <br />
            <br />
            “Historically there has been chronic under-investment in and woeful
            distribution and coverage of women’s sports,” Holland said in an
            email. “The time to change that is now.”
            <br />
            <br />
            Investors and researchers say women’s sports is at an inflection
            point.
            <br />
            <br />
            The landmark Title IX law mandating equal opportunities in sports
            for women and girls has been in effect for 50 years, resulting in
            scores of female athletes and more interest in watching women
            compete at professional levels.
            <br />
            <br />
            Additionally, cord-cutting has given women’s sports more
            opportunities to be broadcast on digital media platforms, rather
            than just relying on traditional broadcast television. That has made
            games more accessible, said Ceyda Mumcu, chair of the sport
            management department and an associate professor at the University
            of New Haven.
            <br />
            <br />
            “That has been the major challenge for women’s sports,” she said.
            “If you can’t find it on a media outlet, if you can’t find it in
            your local, geographic region to go attend, then how can an audience
            be aware of this product?”
            <br />
            <br />
            Holland remembered learning that the National Women’s Soccer League
            was the first professional sport to get back to competition during
            the early days of the pandemic in 2020. But only “superfans” like
            her and her partner Annie even knew that the league was back, much
            less where games were being broadcast. Holland later became an early
            investor in Angel City.
            <br />
            <br />
            “I have been a lifelong sports fan, but as a viewer, it has always
            been hard to find out where to watch women’s sports, if they have
            been available to watch at all,” Holland wrote in her email.
            <br />
            <br />
            Already, investment in professional women’s sports is increasing.
            Last year, the WNBA raised $75 million in its first-ever funding
            round, and Angel City’s star-studded lineup of owners and investors
            — including Natalie Portman, Serena Williams, Candace Parker and
            Gabrielle Union — pushed the team’s valuation to $100 million before
            it had even played its first game.
            <br />
            <br />
            “There’s this impression that these folks know what good sports are.
            So if they’re investing in it, they must know something I don’t
            know, so I want to check this out,” said Lisa Kaplowitz, assistant
            professor at the Rutgers Business School and executive director of
            the Rutgers Center for Women in Business.
            <br />
            <br />
            “You’re also investing in the marketing, of telling that ‘why’ to
            get that fanbase. And then it becomes this virtuous cycle where
            you’re going to make money off of it,” she said.
            <br />
            <br />
            Nortman said Monarch Collective is interested in sports with a large
            global or domestic audience, including women’s soccer and
            basketball. The fund is also interested in using sports teams and
            team ownership to build communities and leaders.
            <br />
            <br />
            “If you go back in time on the men’s side, how would you grow
            ownership groups in these markets so you can have different types of
            people as community leaders in their hometown?” Nortman said.
          </div>

          <div className="flex items-center mt-8 tracking-[2px] w-[90%] self-center">
            <img className="w-28 h-28" src="images/pfp.png" alt="" />

            <div className="flex flex-col justify-center ml-6 gap-4">
              <div>SAMANTHA MASUNGA</div>
              <div className="flex text-xs max-md:gap-2 gap-8 whitespace-nowrap flex-wrap">
                <Link href="">TWITTER</Link>
                <Link href="">LINKED-IN</Link>
                <Link href="">INSTAGRAM</Link>
                <Link href="">EMAIL</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
export default Article;
