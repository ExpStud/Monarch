import { PageLayout, BackButton } from "@components";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { NEWS_ARTICLES } from "src/constants";
import { NewsArticle, PodcastContent } from "src/types";
import Image from "next/image";

const Podcast: NextPage = () => {
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [content, setContent] = useState<PodcastContent | null>(null);
  const { query } = useRouter();

  //set article data
  useEffect(() => {
    if (query?.id && !isNaN(query.id as unknown as number)) {
      setArticle(NEWS_ARTICLES[query.id as unknown as number]);
    }
  }, [query.id]);

  //set article content data to avoid TS errors for other content types
  useEffect(() => {
    if (article && article?.content) {
      setContent(article?.content as PodcastContent);
    }
  }, [article]);

  return (
    <PageLayout pageIndex={1} footer={true}>
      <div className="mt-10 flex flex-col items-center px-20 max-md:px-6 tracking-widest">
        <BackButton className="self-start mt-[2rem] " />
        {article && content && (
          <div className="flex flex-col gap-3 pb-[80px] pt-[60px] max-md:pt-[30px] w-full px-20 max-md:px-1 tracking-widest">
            <div className="flex max-md:flex-col max-md:text-sm max-md:gap-2 max-md:justify-start max-md:w-[100%] justify-around w-[90%] self-center mt-6 tracking-[2px] whitespace-nowrap">
              <div className="flex items-center">
                {article.readTime} MIN PODCAST
                <div className="ml-2">
                  <Image
                    src="/images/podcast-black.png"
                    alt="Article"
                    height={17}
                    width={17}
                  />
                </div>
              </div>
              <div className="flex">
                CREATED BY:
                <div className="underline ml-2"> {article.content.author}</div>
              </div>
              <div>{article.content.date}</div>
            </div>

            <div className="flex max-md:flex-col max-md:items-center mt-10 px-6 max-md:px-0 gap-4">
              <div className="shrink-0 max-md:mb-3">
                <img
                  className="w-[300px]"
                  src={`/images/${content.image}`}
                  alt="Podcast"
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

                <div className="font-mon-bold text-xl">{article.title}</div>
                <div className="text-[#4A0A8A] font-mon-semibold">
                  {content.subTitle}
                </div>
                <div className="h-[1px] opacity-[10%] bg-black my-3"></div>
                <div>
                  {content.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="mb-5"
                      dangerouslySetInnerHTML={{ __html: p }}
                    ></p>
                  ))}
                </div>
                <div className="h-[1px] opacity-[30%] bg-black my-3"></div>
                <a
                  href={content?.url}
                  rel="noreferrer"
                  target="_blank"
                  className="text-[#4A0A8A] font-mon-semibold flex items-center"
                >
                  Listen on Apple Podcasts
                  <div className="ml-1">
                    <img src="images/link.png" alt="" />
                  </div>
                </a>
                <div className="h-[1px] opacity-[30%] bg-black my-3"></div>
                <a
                  href={content?.url2}
                  rel="noreferrer"
                  target="_blank"
                  className="text-[#4A0A8A] font-mon-semibold"
                >
                  More Episodes
                </a>

                {/* bottom border */}
                <div className="w-[103%] right-[1.5%] h-[1px] opacity-[10%] bg-black relative top-3"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};
export default Podcast;
