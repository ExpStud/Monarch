import { FC } from "react";
import { NEWS_ARTICLES, enterAnimation } from "@constants";
import { NewsItem } from "@components";
import { motion } from "framer-motion";

const NewsView: FC = () => {
  return (
    <motion.div className="flex flex-col items-center" {...enterAnimation}>
      <div className="flex flex-col items-center gap-1 pt-10 md:pt-20 lg:mt-20">
        <h1 className="text-3xl tracking-[6px] uppercase">Jobs</h1>
        <div className="w-full h-0.5 bg-mon-purple" />
      </div>
      <p className="pb-10 md:pb-20 mt-5 tracking-wider">
        Take a look at some of our available careers and opportunities.
      </p>
      <div className="w-[90%] flex gap-3 max-[1100px]:flex-col justify-center items-center  text-[#CDB7F6] text-xl lg:text-[28px] pb-[100px]"></div>
    </motion.div>
  );
};

export default NewsView;
