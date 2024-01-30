import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

export type NewsLayout = 0 | 1 | 2;
export type NewsArticleType = "article" | "video" | "podcast";
export interface NewsArticle {
  title: string;
  content: string;
  type: NewsArticleType;
  readTime: number;
  image: string;
}
export const NEWS_ARTICLES: NewsArticle[] = [
  {
    title: "Announcing Monarch's first investment...",
    content: "",
    type: "article",
    readTime: 10,
    image: "n-1.png",
  },
  {
    title:
      "First came Angel City FC. Now, meet Monarch Collective, a new way to invest in women's sports",
    content: "",
    type: "article",
    readTime: 10,
    image: "n-2.png",
  },
  {
    title: "",
    content: "",
    type: "podcast",
    readTime: 15.34,
    image: "n-3.png",
  },
  {
    title: "",
    content: "",
    type: "video",
    readTime: 15.34,
    image: "n-4.png",
  },
  {
    title: "",
    content: "",
    type: "article",
    readTime: 10,
    image: "n-5.png",
  },
];
interface Props {
  layout: NewsLayout;
  article: NewsArticle;
}

const NewsItem: FC<Props> = (props: Props) => {
  const { layout, article } = props;

  return (
    <Link href={`/${article.type}`}>
      <div className="relative">
        <img
          className="object-cover max-md:max-w-[500px] w-[100%]"
          src={`/images/${article.image}`}
          alt="Background"
        />

        <div className="absolute font-mon-semibold tracking-[2px] top-4 left-4 rounded-[4px] bg-black py-2 px-4">
          {layout === 2 ? article.type : article.title}
        </div>
        <div className="flex justify-between absolute w-full bottom-0 rounded-[4px] bg-black py-2 px-4">
          <div className="text-[15px] font-mon-semibold tracking-[2px]">
            {article.readTime} MIN
          </div>
          <div className="flex items-center">
            <img src={`images/${article.type}.png`} alt="Icon" />
          </div>
        </div>
      </div>
    </Link>
  );
};

const NewsView: FC = () => {
  return (
    <div className="flex flex-col items-center pb-[100px]">
      <h1 className="text-3xl tracking-[6px] py-20">NEWS</h1>

      <div className="w-[90%] flex gap-3 max-[1100px]:flex-col justify-center items-center  text-[#CDB7F6] text-xl lg:text-[28px]">
        {/* first square */}
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
        {/* col of images */}
        <div className="flex flex-col gap-3 items-center relative bottom-1">
          {/* first column (one img) */}
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
          {/* second columne (three imgs) */}
          <div className="flex gap-3 max-md:flex-col w-full justify-center">
            <NewsItem layout={2} article={NEWS_ARTICLES[2]} />

            <NewsItem layout={2} article={NEWS_ARTICLES[3]} />
            <NewsItem layout={2} article={NEWS_ARTICLES[4]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsView;
