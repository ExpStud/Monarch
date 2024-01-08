import { PageLayout, LandingView } from "@components";
import { NextPage } from "next";
import { useState } from "react";

const News: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl tracking-[6px]">NEWS</h1>

      <div className="w-[90%] flex gap-3 max-[1100px]:flex-col justify-center items-center text-[#FAF6EE] pb-[100px] pt-[60px] text-[#CDB7F6] text-xl">
        <div className="relative">
          <img className="object-cover max-md:max-w-[400px] w-[100%]" src="images/n-1.png" alt="" />
          <div className="absolute font-semibold top-8 left-8 rounded-[4px] bg-black py-2 px-4 w-[75%]">
            <div className="line-clamp-3">
              Announcing Monarch’s first investment...
            </div>
          </div>
          <div className="flex justify-between absolute w-[98%] left-[1%] bottom-2 rounded-[4px] bg-black py-2 px-4">
            <div className="text-sm font-bold tracking-[2px]">
              10 MIN READ
            </div>
            <div className="flex items-center">
              <img src="images/article.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center relative bottom-1">
          <div className="relative max-md:max-w-[500px]">
            <img className="max-md:min-h-[300px] object-cover" src="images/n-2.png" alt="" />

            <div className="absolute font-semibold top-8 left-8 rounded-[4px] bg-black py-2 px-4 w-[65%]">
              <div className="line-clamp-3">
                First came Angel City FC. Now, meet Monarch Collective...
              </div>
            </div>
            <div className="flex justify-between absolute w-full bottom-0 rounded-[4px] bg-black py-2 px-4">
              <div className="text-sm font-bold tracking-[2px]">
                10 MIN READ
              </div>
              <div className="flex items-center">
                <img src="images/article.png" alt="" />
              </div>
            </div>
          </div>
          <div className="flex gap-3 max-md:flex-wrap justify-center">
            <a href="/podcast">
              <div className="relative">
                <img className="grow" src="images/n-3.png" alt="" />

                <div className="absolute font-semibold tracking-[2px] top-4 left-4 rounded-[4px] bg-black py-2 px-4">
                  Podcast
                </div>
                <div className="flex justify-between absolute w-full bottom-0 rounded-[4px] bg-black py-2 px-4">
                  <div className="text-sm font-bold tracking-[2px]">
                    15:34 MIN
                  </div>
                  <div className="flex items-center">
                    <img src="images/podcast.png" alt="" />
                  </div>
                </div>
              </div>
            </a>

            <a href="/video">
              <div className="relative">
                <img className="grow" src="images/n-4.png" alt="" />

                <div className="absolute font-semibold tracking-[2px] top-4 left-4 rounded-[4px] bg-black py-2 px-4">
                  Video
                </div>
                <div className="flex justify-between absolute w-full bottom-0 rounded-[4px] bg-black py-2 px-4">
                  <div className="text-sm font-bold tracking-[2px]">
                    15:34 MIN
                  </div>
                  <div className="flex items-center">
                    <img src="images/video.png" alt="" />
                  </div>
                </div>
              </div>
            </a>

            <a href="/article">
              <div className="relative">
                <img className="grow" src="images/n-5.png" alt="" />

                <div className="absolute font-semibold tracking-[2px] top-4 left-4 rounded-[4px] bg-black py-2 px-4">
                  Article
                </div>
                <div className="flex justify-between absolute w-full bottom-0 rounded-[4px] bg-black py-2 px-4">
                  <div className="text-sm font-bold tracking-[2px]">
                    10 MIN READ
                  </div>
                  <div className="flex items-center">
                    <img src="images/article.png" alt="" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default News;

