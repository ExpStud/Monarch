/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { NewsArticle, NewsLayout } from "@types";
import { capitalizeFirstLetter } from "@utils";
import { BookIcon, ImageShimmer, PlayIcon, PodcastIcon } from "@components";
import { imageLoadAnimation } from "src/constants";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  layout: NewsLayout;
  article: NewsArticle;
}

const NewsItem: FC<Props> = (props: Props) => {
  const { layout, article } = props;
  const router = useRouter();

  const [didHover, setDidHover] = useState(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const handleClick = () => {
    router.push({ pathname: `/${article.type}`, query: { id: article.id } });
  };

  return (
    <div
      className={`relative overflow-hidden cursor-pointer rounded-[4px] w-[90vw] h-[350px] ${
        layout === 0
          ? "md:w-[498px] md:h-[498px]"
          : layout === 1
          ? "md:w-[759px] md:h-[243px]"
          : "md:w-[243px] md:h-[243px]"
      }`}
      onClick={() => handleClick()}
      onMouseEnter={() => setDidHover(true)}
      onMouseLeave={() => setDidHover(false)}
    >
      <AnimatePresence mode="wait">
        {!imageLoaded && (
          <motion.div
            className="absolute top-0 inset-0 w-full h-full bg-gradient-to-r from-[#f4ecda] via-white to-[#f4ecda]"
            style={{
              backgroundSize: "200% 100%",
              animation: "shimmer 2s ease-in-out infinite",
            }}
            {...imageLoadAnimation(!imageLoaded)}
          />
        )}
      </AnimatePresence>
      <Image
        src={`/images/news/${article.image}`}
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        className={`transition-500 ${didHover ? "scale-110" : ""} ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadingComplete={() => setImageLoaded(true)}
      />
      <div
        className={`absolute font-mon-semibold tracking-[2px] top-4 left-4 rounded-[4px] bg-black py-2 px-4 text-[28px]  
          ${
            layout === 0
              ? "w-[90%] max-h-[721px]"
              : layout === 1
              ? "w-[80%] ] max-h-[721px]"
              : ""
          }`}
      >
        <p className="line-clamp-2 pb-0.5">
          {layout === 2 ? capitalizeFirstLetter(article.type) : article.title}
        </p>
      </div>
      <div className="flex w-full justify-between absolute bottom-0 rounded-[4px] bg-black py-2 px-4">
        <div className="text-[15px] font-mon-semibold tracking-[2px]">
          {article.readTime} MIN {article.type === "article" && "READ"}
        </div>
        <div className="flex items-center">
          {article.type === "video" && <PlayIcon />}
          {article.type === "article" && <BookIcon />}
          {article.type === "podcast" && <PodcastIcon />}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
