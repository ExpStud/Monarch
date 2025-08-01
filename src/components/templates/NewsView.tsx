import { FC } from "react";
import { NEWS_ARTICLES, enterAnimation } from "@constants";
import { NewsItem } from "@components";
import { motion } from "framer-motion";

const NewsView: FC = () => {
  return (
    <div className="flex flex-col items-center" {...enterAnimation}>
      <div className="flex flex-col items-center gap-1 py-10 md:py-20 lg:mt-20">
        <h1 className="text-3xl tracking-[6px]">NEWS</h1>
        <div className="w-full h-0.5 bg-mon-purple" />
      </div>
      <div className="w-[90%] flex gap-3 max-[1100px]:flex-col justify-center items-center  text-[#CDB7F6] text-xl lg:text-[28px] pb-[15px]">
        <NewsItem layout={0} article={NEWS_ARTICLES[0]} />
        <div className="flex flex-col gap-3 items-center relative">
          <NewsItem layout={1} article={NEWS_ARTICLES[1]} />
          <div className="flex gap-3 max-md:flex-col w-full justify-center">
            <NewsItem layout={2} article={NEWS_ARTICLES[2]} />
            <NewsItem layout={2} article={NEWS_ARTICLES[3]} />
            <NewsItem layout={2} article={NEWS_ARTICLES[4]} />
          </div>
        </div>
      </div>
      <div className="w-[90%] flex gap-3 max-[1100px]:flex-col justify-center items-center  text-[#CDB7F6] text-xl lg:text-[28px] pb-[100px]">
        <div className="flex flex-col gap-3 items-center relative">
          <NewsItem layout={1} article={NEWS_ARTICLES[5]} />
          <div className="flex gap-3 max-md:flex-col w-full justify-center">
            <NewsItem layout={2} article={NEWS_ARTICLES[6]} />
            <NewsItem layout={2} article={NEWS_ARTICLES[7]} />
            <NewsItem layout={2} article={NEWS_ARTICLES[8]} />
          </div>
        </div>
        <NewsItem layout={0} article={NEWS_ARTICLES[9]} />
        </div>
    </div>
  );
};

export default NewsView;
