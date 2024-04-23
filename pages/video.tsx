import { PageLayout, BackButton, HeaderContent, PlayIcon } from "@components";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { NEWS_ARTICLES } from "src/constants";
import { NewsArticle, VideoContent } from "src/types";
import Image from "next/image";

const Video: NextPage = () => {
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [content, setContent] = useState<VideoContent | null>(null);
  const router = useRouter();

  //set article data
  useEffect(() => {
    if (router.query?.id && !isNaN(router.query.id as unknown as number)) {
      setArticle(NEWS_ARTICLES[router.query.id as unknown as number]);
    }
  }, [router.query.id]);

  //set article content data to avoid TS errors for other content types
  useEffect(() => {
    if (article && article?.content) {
      setContent(article?.content as VideoContent);
    }
  }, [article]);

  //browser back button
  useEffect(() => {
    const handlePopState = () => {
      router.push({ pathname: "/", query: { to: "news" } }, "/");
    };

    window.onpopstate = handlePopState;

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.onpopstate = null;
    };
  }, []);

  return (
    <PageLayout section={1} footer={true}>
      {/* <HeaderContent pageIndex={3} section={-1} /> */}
      <div className="mt-32 flex flex-col items-center px-20 max-md:px-6 tracking-widest">
        <BackButton className="self-start mt-[2rem] " />

        {article && content && (
          <div className="flex flex-col gap-3 pb-[80px] pt-[60px] max-md:pt-[30px] px-20 max-md:px-1 tracking-widest min-w-[85vw]">
            <div className="font-mon-bold text-3xl  text-center">
              {article.title}
            </div>

            <div className="flex self-center max-lg:flex-col items-start max-md:text-sm max-md:gap-2 max-md:w-[100%] justify-around w-[90%] mt-6 tracking-[2px] whitespace-nowrap">
              <div className="flex items-center">
                {article.readTime} MIN VIDEO
                <div className="ml-1 mr-2 pb-5 w-4 h-4">
                  <PlayIcon
                    stroke="black"
                    strokeWidth={1}
                    height={20}
                    width={20}
                  />
                </div>
              </div>
              <div className="flex lg:pl-2">
                WRITTEN BY:
                <div className="underline ml-2 uppercase">
                  {article.content.author}
                </div>
              </div>
              <div className="lg:pl-2">{article.content.date}</div>
            </div>

            <iframe
              className="w-full aspect-[16/8] mt-3"
              src="https://www.youtube.com/embed/KnumAWWWgUE?si=Sf5Y9SltT-HCZfDz"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </PageLayout>
  );
};
export default Video;
