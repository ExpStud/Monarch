/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { NewsArticle, NewsLayout } from "@types";
import { capitalizeFirstLetter } from "@utils";

interface Props {
  layout: NewsLayout;
  article: NewsArticle;
}

const NewsItem: FC<Props> = (props: Props) => {
  const { layout, article } = props;
  const router = useRouter();

  const [didHover, setDidHover] = useState(false);

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
      <Image
        src={`/images/${article.image}`}
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        className={`transition-500 ${didHover ? "scale-110" : ""}`}
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
        <p className="line-clamp-2">
          {layout === 2 ? capitalizeFirstLetter(article.type) : article.title}
        </p>
      </div>
      <div className="flex w-full justify-between absolute bottom-0 rounded-[4px] bg-black py-2 px-4">
        <div className="text-[15px] font-mon-semibold tracking-[2px]">
          {article.readTime} MIN
        </div>
        <div className="flex items-center">
          <img src={`images/${article.type}.png`} alt="Icon" />
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
