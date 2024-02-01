import { PageLayout, BackButton } from "@components";
import { NextPage } from "next";
import Link from "next/link";

const Podcast: NextPage = () => {
  return (
    <PageLayout pageIndex={1} footer={true}>
      <div className="mt-10 flex flex-col items-center px-20 max-md:px-6 tracking-widest">
        <BackButton className="self-start mt-[2rem] " />

        <div className="flex flex-col gap-3 pb-[80px] pt-[60px] max-md:pt-[30px] w-full px-20 max-md:px-1 tracking-widest">
          <div className="flex max-md:flex-col max-md:text-sm max-md:gap-2 max-md:justify-start max-md:w-[100%] justify-around w-[90%] self-center mt-6 tracking-[2px] whitespace-nowrap">
            <div className="flex items-center">
              10 MIN PODCAST
              <div className="ml-2">
                <img src="images/podcast-black.png" alt="" />
              </div>
            </div>
            <div className="flex">
              CREATED BY:
              <div className="underline ml-2">SAMANTHA MASUNAGA</div>
            </div>
            <div>03/27/2023</div>
          </div>

          <div className="flex max-md:flex-col max-md:items-center mt-10 px-6 max-md:px-0 gap-4">
            <div className="shrink-0 max-md:mb-3">
              <img
                className="w-[300px]"
                src="images/podcast-image.png"
                alt=""
              />
              <div className="flex text-xs tracking-[2px] mt-1.5">
                <div className="grow">10 MIN</div>
                <div className="flex items-center">
                  PLAY
                  <img className="h-3 ml-1" src="images/play.png" alt="" />
                </div>
              </div>
            </div>

            <div className="flex flex-col border-x border-black border-opacity-[30%] px-4 max-md:px-2 py-1">
              {/* top border */}
              <div className="w-[103%] right-[1.5%] h-[1px] opacity-[30%] bg-black relative bottom-3"></div>

              <div className="font-mon-bold text-xl">Abundance, Not Fear</div>
              <div className="text-[#4A0A8A] font-mon-semibold">
                Full Time with Meg Linehan: A Show about women's soccer
              </div>
              <div className="h-[1px] opacity-[10%] bg-black my-3"></div>
              <div>
                Meg is joined by Angel City FC co-founder Kara Nortman to talk
                about her recent column on Yahoo Sports, With the Women's World
                Cup now over, here are 5 big soccer predictions.
                <br />
                <br />
                Takeaways from the World Cup, the future of the NWSL, and the
                current situation with the Spanish Football Federation.
                <br />
                <br />
                With the Women's World Cup now over, here are 5 big soccer
                predictions:
                <a
                  href="https://sports.yahoo.com/op-ed-with-the-womens-world-cup-now-over-here-are-5-big-soccer-predictions-195900905.html"
                  className="underline cursor-pointer"
                  rel="noreferrer"
                  target="_blank"
                >
                  https://sports.yahoo.com/op-ed-with-the-womens-world-cup-now-over-here-are-5-big-soccer-predictions-195900905.html
                </a>
                Learn more about your ad choices. Visit megaphone.fm/adchoices
              </div>
              <div className="h-[1px] opacity-[30%] bg-black my-3"></div>
              <Link
                href={"/"}
                className="text-[#4A0A8A] font-mon-semibold flex items-center"
              >
                Listen on Apple Podcasts
                <div className="ml-1">
                  <img src="images/link.png" alt="" />
                </div>
              </Link>
              <div className="h-[1px] opacity-[30%] bg-black my-3"></div>
              <Link href={"/"} className="text-[#4A0A8A] font-mon-semibold">
                More Episodes
              </Link>

              {/* bottom border */}
              <div className="w-[103%] right-[1.5%] h-[1px] opacity-[10%] bg-black relative top-3"></div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
export default Podcast;
