import { PageLayout, LandingView } from "@components";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

const Video: NextPage = () => {
    const [assets, setAssets] = useState<boolean[]>([false]);

    return (
        <PageLayout pageIndex={1} footer={true}>
            <div className="mt-10 flex flex-col items-center px-20 max-md:px-6">
                <div className="w-full text-sm">
                    <Link className="flex items-center" href="/news">
                        <div className="mr-2">
                            <img className="w-4" src="images/back.png" />
                        </div>
                        BACK
                    </Link>
                </div>

                <div className="flex flex-col gap-3 pb-[80px] pt-[60px] max-md:pt-[30px] px-20 max-md:px-1">
                    <div className="font-bold text-3xl">
                        First came Angel City FC. Now, meet Monarch Collective, a new way to invest in women’s sports
                    </div>

                    <div className="flex max-md:flex-col max-md:text-sm max-md:gap-2 max-md:justify-start max-md:w-[100%] justify-around w-[90%] self-center mt-6 tracking-[2px] whitespace-nowrap">
                        <div className="flex items-center">
                            10 MIN READ
                            <div className="ml-2">
                                <img src="images/article-black.png" alt="" />
                            </div>
                        </div>
                        <div className="flex">
                            WRITTEN BY: 
                            <div className="underline ml-2">
                                SAMANTHA MASUNAGA
                            </div>
                        </div>
                        <div>
                            03/27/2023
                        </div>
                    </div>

                    <iframe className="w-full aspect-[16/8] mt-3" src="https://www.youtube.com/embed/KnumAWWWgUE?si=Sf5Y9SltT-HCZfDz" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </PageLayout>
    );
};
export default Video;

