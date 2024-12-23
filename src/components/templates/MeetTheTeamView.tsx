import { FC } from "react";
import { Card } from "@components";
import { motion } from "framer-motion";
import { enterAnimation } from "src/constants";

interface Props {}

const MeetTheTeamView: FC<Props> = (props: Props) => {
  const {} = props;
  return (
    <motion.div
      className=" flex flex-col items-center mt-10 pb-[100px]"
      {...enterAnimation}
    >
      <div className="flex flex-col items-center gap-1 py-10 md:py-20">
        <h1 className="text-3xl tracking-[6px]">OUR TEAM</h1>
        <div className="w-full h-0.5 bg-mon-purple" />
      </div>

      <div className="h-full flex flex-col md:flex-row flex-wrap w-[90%] gap-10 xl:gap-8 text-[#FAF6EE] justify-center items-center lg:items-start mx-32">
        <Card
          image="/images/woman-1.png"
          position="Managing Partner"
          name="Kara Nortman"
          description="Kara is Managing Partner of Monarch Collective, the first investment platform exclusively dedicated to investing in women's sports. Kara is a co-founder of Angel City Football Club, which has quickly risen to become the most valuable women's soccer team in the world. Prior to Monarch, Kara was a Managing Partner at Upfront Ventures, where she worked for eight years. Before joining Upfront, Kara spent close to seven years at IAC where she co-headed the M&A group and later served in operating capacities as the SVP and General Manager of Urbanspoon and Citysearch. She served on the board of IAC's mobile technology incubator (Hatch Labs), where she incubated Tinder in their seed round. Earlier in her career Kara worked at Battery Ventures, Microsoft and Morgan Stanley. Kara is also a founding member of All Raise, a VC-led Nonprofit dedicated to increased diversity in funders and founders, and she advised the Women’s National Soccer Team Players Association during their pay equity fight. Kara earned an AB in Politics from Princeton University and an MBA from Stanford University. Kara resides in Los Angeles with her husband and three daughters."
          interests={[
            "Favorite Sneaker",
            "Favorite Song",
            "Favorite Book ",
            "Best Enneagram Test",
          ]}
          interestsUrl={[
            "https://www.nikesb.com/the-vault/sail-box-era/rayssa",
            "https://open.spotify.com/track/6oJ6le65B3SEqPwMRNXWjY?si=0737a5c765de4692",
            "https://www.amazon.com/15-Commitments-Conscious-Leadership-Sustainable-ebook/dp/B00R3MHWUE",
            "https://tests.enneagraminstitute.com/",
          ]}
          linkedin="https://www.linkedin.com/in/karanortman/"
          spotify="https://open.spotify.com/playlist/0bnRvoIhusZO9nWQwKRQIp"
        />
        <Card
          image="/images/woman-3.png"
          position="Managing Partner"
          name="Jasmine Robinson"
          description="Jasmine is a Managing Partner at Monarch Collective, a fund investing in women's sports teams, leagues, and rights. Prior to Monarch, Jasmine was a Partner at Causeway, a growth stage fund investing in sports, media, gaming and fitness. While at Causeway, Jasmine partnered with companies including Tracksmith, Niantic, Volley, FloSports, and QuintEvents. Prior to Causeway, Jasmine held investing and strategy roles at the San Francisco 49ers, Bain & Company, and The Raine Group. Jasmine received her BA from Harvard University, graduating Magna Cum Laude, and her MBA from Stanford University where she was an Arjay Miller Scholar."
          interests={[
            "Favorite Activity",
            "Favorite Restaurant",
            "Favorite Sport",
            "Favorite Travel Destination",
          ]}
          interestsUrl={[
            "https://www.lpga.com/",
            "https://www.macchialina.com/",
            "https://nfl.com/",
            "https://meetpiemonte.com/en/blog/the-piedmont-region-of-italy",
          ]}
          linkedin="https://www.linkedin.com/in/jasmine-robinson-b3950813/"
          spotify="https://open.spotify.com/playlist/0bnRvoIhusZO9nWQwKRQIp"
        />
        <Card
          image="/images/christine-2.png"
          position="Investor"
          name="Christine Jiang"
          description="Christine is an Investor at Monarch Collective, an investment platform dedicated to accelerating equity in global sport. Previously, Christine was Director of Media at Major League Soccer where she supported all aspects of MLS's landmark partnership with Apple TV in her role as lead project manager for broadcast production and content. Prior to that, she worked on MLS's League Growth & Operations team where she focused on league expansion via new teams, stadiums, and properties, including the launch of MLS NEXT Pro, MLS's professional development league. Before MLS, Christine held strategy roles at the Premier Lacrosse League, the Philadelphia 76ers/HBSE, and Bain & Company. Christine received her MBA from Harvard Business School and her BS from MIT, where she was a member of the varsity women's lacrosse team. Originally from Michigan, she now resides in Brooklyn, New York."
          interests={[
            "Favorite Movie",
            "Favorite Restaurant",
            "Favorite Sport",
            "Favorite Travel Destination",
          ]}
          interestsUrl={[
            "https://www.imdb.com/title/tt0349825/",
            "https://www.pammyscambridge.com/",
            "https://angelcity.com/",
            "https://www.gohawaii.com/islands/maui",
          ]}
          linkedin="https://www.linkedin.com/in/christinejiang0/"
          spotify="https://open.spotify.com/playlist/0bnRvoIhusZO9nWQwKRQIp"
        />
        <Card
          image="/images/unnamed.jpg"
          position="Head of Operations"
          name="Caitlin McGrath"
          description='Caitlin is the Head of Operations at Monarch Collective. Caitlin was a Managing Director and Head of Fund Allocations at Schusterman Interests LLC, the investment office for the Schusterman family as well as for Charles and Lynn Schusterman. Prior to joining the Schusterman Family, she worked at Soros Fund Management LLC ("SFM") for almost a decade. Caitlin was a member of the Manager Selection Team at SFM where she performed due diligence on and allocated to external funds varying in strategy and asset classes.Caitlin graduated from Princeton University in 2009 where she earned an AB in History. She currently resides is New York City with her husband and four young children.'
          interests={[
            "Favorite Sneaker",
            "Favorite Song",
            "Favorite Book ",
            "Best Enneagram Test",
          ]}
          interestsUrl={["", "", "", ""]}
          linkedin="https://www.linkedin.com/in/caitlin-mcgrath-142036a6/"
          // spotify="https://open.spotify.com/playlist/0bnRvoIhusZO9nWQwKRQIp"
        />
      </div>
      {/* <div className="flex justify-center text-[12px] sm:text-xs md:text-sm tracking-[2px] w-full pb-4 max-md:mt-10 px-4 sm:px-6">
        KEEP SCROLLING
      </div> */}
    </motion.div>
  );
};

export default MeetTheTeamView;
