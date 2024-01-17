import { motion } from "framer-motion";
import { Dispatch, SetStateAction, FC, useContext } from "react";
import { ViewContext, slideLeft, slideRight } from "@constants";
import { handleAssetLoad } from "@utils";
import Image from "next/image";
import { Card } from "@components";
import Link from "next/link";

const MeetTheTeamView: FC = () => {
  return (
    <div className="flex flex-col items-center mt-6">
      <h1 className="text-3xl tracking-[6px] pb-10">NEWS</h1>

      <div className="w-[90%] flex gap-3 max-[1100px]:flex-col justify-center items-center pb-[100px] pt-[45px] text-[#CDB7F6] text-xl lg:text-[28px]">
        <div className="relative">
          <img
            className="object-cover max-md:max-w-[500px] w-[100%]"
            src="images/n-1.png"
            alt=""
          />
          <div className="absolute top-8 left-8 rounded-[4px] bg-black py-2 px-4 w-[80%] tracking-wider leading-tight">
            <div className="line-clamp-3 font-mon-semibold">
              Announcing Monarch’s first investment...
            </div>
          </div>
          <div className="flex justify-between absolute w-[98.3%] left-[1%] bottom-2 rounded-[4px] bg-black py-2 px-4">
            <div className="text-[15px] font-mon-semibold tracking-[2px]">
              10 MIN READ
            </div>
            <div className="flex items-center">
              <img src="images/article.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center relative bottom-1">
          <div className="relative max-md:max-w-[500px]">
            <img
              className="max-md:min-h-[300px] object-cover"
              src="images/n-2.png"
              alt=""
            />

            <div className="absolute top-8 left-8 rounded-[4px] bg-black py-2 px-4 w-[70%]">
              <div className="line-clamp-3 font-mon-semibold tracking-wider leading-tight">
                First came Angel City FC. Now, meet Monarch Collective...
              </div>
            </div>
            <div className="flex justify-between absolute w-full bottom-0 rounded-[4px] bg-black py-2 px-4">
              <div className="text-[15px] font-mon-semibold tracking-[2px]">
                10 MIN READ
              </div>
              <div className="flex items-center">
                <img src="images/article.png" alt="" />
              </div>
            </div>
          </div>
          <div className="flex gap-3 max-md:flex-col w-full justify-center">
            <Link href="/podcast">
              <div className="relative">
                <img
                  className="object-cover max-md:max-w-[500px] w-[100%]"
                  src="images/n-3.png"
                  alt=""
                />

                <div className="absolute font-mon-semibold tracking-[2px] top-4 left-4 rounded-[4px] bg-black py-2 px-4">
                  Podcast
                </div>
                <div className="flex justify-between absolute w-full bottom-0 rounded-[4px] bg-black py-2 px-4">
                  <div className="text-[15px] font-mon-semibold tracking-[2px]">
                    15:34 MIN
                  </div>
                  <div className="flex items-center">
                    <img src="images/podcast.png" alt="" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/video">
              <div className="relative">
                <img
                  className="object-cover max-md:max-w-[500px] w-[100%]"
                  src="images/n-4.png"
                  alt=""
                />

                <div className="absolute font-mon-semibold tracking-[2px] top-4 left-4 rounded-[4px] bg-black py-2 px-4">
                  Video
                </div>
                <div className="flex justify-between absolute w-full bottom-0 rounded-[4px] bg-black py-2 px-4">
                  <div className="text-[15px] font-mon-semibold tracking-[2px]">
                    15:34 MIN
                  </div>
                  <div className="flex items-center">
                    <img src="images/video.png" alt="" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/article">
              <div className="relative">
                <img
                  className="object-cover max-md:max-w-[500px] w-[100%]"
                  src="images/n-5.png"
                  alt=""
                />

                <div className="absolute font-mon-semibold tracking-[2px] top-4 left-4 rounded-[4px] bg-black py-2 px-4">
                  Article
                </div>
                <div className="flex justify-between absolute w-full bottom-0 rounded-[4px] bg-black py-2 px-4">
                  <div className="text-[15px] font-mon-semibold tracking-[2px]">
                    10 MIN READ
                  </div>
                  <div className="flex items-center">
                    <img src="images/article.png" alt="" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeamView;
