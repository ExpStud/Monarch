import {
  PageLayout,
  BackButton,
  HeaderContent,
  PodcastIcon,
  PlayIcon,
} from "@components";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { NEWS_ARTICLES } from "src/constants";
import { NewsArticle, PodcastContent } from "src/types";

const Podcast: NextPage = () => {
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [content, setContent] = useState<PodcastContent | null>(null);
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
      setContent(article?.content as PodcastContent);
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
    <PageLayout footer={true} headerType="fixed">
      {/* <HeaderContent pageIndex={3} section={-1} /> */}
      <div className="mt-20 flex flex-col items-center px-20 max-lg:px-6 tracking-widest max-w-[1800px] self-center">
        <BackButton className="self-start mt-[2rem] " />
        {article && content && (
          <div className="flex flex-col gap-3 pb-[80px] pt-[60px] max-lg:pt-[30px] w-full px-20 max-lg:px-1 tracking-widest">
            <div className="flex sm:items-center max-lg:flex-col max-lg:text-sm max-lg:gap-2 max-lg:justify-start max-lg:w-[100%] justify-around w-[90%] self-center mt-6 tracking-[2px] whitespace-nowrap">
              <div className="flex items-center">
                {article.readTime} MIN PODCAST
                <div className="ml-2">
                  <PodcastIcon
                    stroke="black"
                    strokeWidth={1}
                    height={18}
                    width={18}
                  />
                </div>
              </div>
              <div className="flex">
                CREATED BY:
                <a
                  href={article.externalUrl}
                  rel="noreferrer"
                  target="_blank"
                  className="hover:underline"
                >
                  <div className="underline ml-2 uppercase">
                    {" "}
                    {article.content.author}
                  </div>
                </a>
              </div>
              <div>{article.content.date}</div>
            </div>

            <div className="flex max-lg:flex-col max-lg:items-center mt-10 px-6 max-lg:px-0 gap-4">
              <div className="shrink-0 max-lg:mb-3">
                <img
                  className="w-[400px] lg:w-[300px]"
                  src={`/images/${content.image}`}
                  alt="Podcast"
                />
                <iframe
                  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                  frameBorder="0"
                  height="175"
                  // style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;"
                  className="w-full h-full max-h-[225px]  mt-4"
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                  src={content.podcastEmbed}
                ></iframe>
                <div className="flex text-xs tracking-[2px] mt-1.5">
                  {/* <div className="grow">10 MIN</div>
                  <div className="flex items-center">
                    PLAY
                    <PlayIcon
                      stroke="black"
                      strokeWidth={1}
                      height={16}
                      width={16}
                    />
                  </div> */}
                </div>
              </div>

              <div className="flex flex-col border-x border-custom-black border-opacity-[30%] px-4 max-lg:px-2 py-1">
                {/* top border */}
                <div className="w-[103%] right-[1.5%] h-[1px] opacity-[30%] bg-custom-black relative bottom-3"></div>

                <div className="font-mon-bold text-xl ">{article.title}</div>
                <div className="text-[#4A0A8A] font-mon-semibold">
                  {content.subTitle}
                </div>
                <div className="h-[1px] opacity-[10%] bg-custom-black my-3"></div>
                <div className="flex-grow">
                  {content?.paragraphs?.map((p, i) => (
                    <p
                      key={i}
                      className="mb-5"
                      dangerouslySetInnerHTML={{ __html: p }}
                    ></p>
                  ))}
                </div>
                <div className="h-[1px] opacity-[30%] bg-custom-black my-3"></div>
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
                <div className="h-[1px] opacity-[30%] bg-custom-black my-3"></div>
                <a
                  href={content?.url2}
                  rel="noreferrer"
                  target="_blank"
                  className="text-[#4A0A8A] font-mon-semibold"
                >
                  More Episodes
                </a>

                {/* bottom border */}
                <div className="w-[103%] right-[1.5%] h-[1px] opacity-[10%] bg-custom-black relative top-3"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};
export default Podcast;
