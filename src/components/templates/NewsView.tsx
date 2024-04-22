import { FC } from "react";
import { NEWS_ARTICLES, enterAnimation } from "@constants";
import { Footer, NewsItem } from "@components";
import { motion } from "framer-motion";

const NewsView: FC = () => {
  return (
    <motion.div className="flex flex-col items-center" {...enterAnimation}>
      <h1 className="text-3xl tracking-[6px] py-10 md:py-20 lg:mt-20">NEWS</h1>
      <div className="w-[90%] flex gap-3 max-[1100px]:flex-col justify-center items-center  text-[#CDB7F6] text-xl lg:text-[28px] pb-[100px]">
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

      {/* <Footer /> */}
    </motion.div>
  );
};

export default NewsView;
