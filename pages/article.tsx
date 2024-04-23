/* eslint-disable @next/next/no-img-element */
import { PageLayout, BackButton, HeaderContent, BookIcon } from "@components";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ArticleContent, NewsArticle } from "@types";
import { NEWS_ARTICLES } from "@constants";
import Image from "next/image";

const Article: NextPage = () => {
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [content, setContent] = useState<ArticleContent | null>(null);
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
      setContent(article?.content as ArticleContent);
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
    <PageLayout pageIndex={1} footer={true}>
      {/* <HeaderContent pageIndex={3} section={-1} /> */}
      {content && (
        <div className="relative w-screen h-auto mt-[77px] aspect-[3.5/1]">
          <Image
            src={`/images${content.image}`}
            alt="Article"
            fill
            className="object-cover z-10"
          />
        </div>
      )}
      <div className="flex flex-col items-center px-20 max-md:px-6 tracking-widest max-w-[1600px] self-center">
        {/* <BackButton className="self-start mt-[2rem] " /> */}
        {article && content && (
          <div className="flex flex-col gap-3 pb-[80px] pt-[60px] max-md:pt-[30px] px-20 max-md:px-1 tracking-widest">
            <div className="font-mon-bold text-3xl lg:text-center">
              <a
                href={article.externalUrl}
                rel="noreferrer"
                target="_blank"
                className="hover:underline"
              >
                {article.title}
              </a>
            </div>

            <div className="flex max-md:flex-col font-light max-md:text-sm max-md:gap-2 max-md:justify-start  w-[100%] justify-around  self-center mt-6 tracking-[2px] whitespace-nowrap">
              <div className="flex font-light items-center">
                {article.readTime} MIN READ
                <div className="ml-2">
                  <BookIcon
                    stroke="black"
                    strokeWidth={1}
                    height={17}
                    width={17}
                  />
                </div>
              </div>
              <div className="flex">
                WRITTEN BY:
                <a
                  href={content.linkedin}
                  rel="noreferrer"
                  target="_blank"
                  className="hover:underline"
                >
                  <div className="underline ml-2 uppercase">
                    {article.content.author}
                  </div>
                </a>
              </div>
              <div>{article.content.date}</div>
            </div>

            {/* <div className="text-xs font-light mt-[-2px]">
              {content.imageCaption}
            </div> */}

            <div className="border-x-[1.5px] px-10 max-md:px-3 mt-10 border-black border-opacity-[20%]">
              {content?.paragraphs?.map((p, i) => (
                <p key={i} className="mb-5">
                  {p}
                </p>
              ))}
            </div>

            {/* <div className="flex items-center mt-8 tracking-[2px] w-[90%] self-center">
              <img className="w-28 h-28" src={content.pfp} alt="" />

              <div className="flex flex-col justify-center ml-6 gap-4">
                <div>{content.author}</div>
                <div className="flex text-xs max-md:gap-2 gap-8 whitespace-nowrap flex-wrap">
                  {content?.twitter && (
                    <a href={content.twitter} rel="noreferrer" target="_blank">
                      TWITTER
                    </a>
                  )}
                  {content?.linkedin && (
                    <a
                      href={content?.linkedin}
                      rel="noreferrer"
                      target="_blank"
                    >
                      LINKED-IN
                    </a>
                  )}
                  {content?.instagram && (
                    <a
                      href={content?.instagram}
                      rel="noreferrer"
                      target="_blank"
                    >
                      INSTAGRAM
                    </a>
                  )}
                  {content?.email && (
                    <a href={`mailto:${content.email}`}>EMAIL</a>
                  )}
                </div>
              </div>
            </div> */}
          </div>
        )}
      </div>
    </PageLayout>
  );
};
export default Article;
