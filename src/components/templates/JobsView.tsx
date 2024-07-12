import { FC } from "react";
import { jobPositions, enterAnimation } from "@constants";
import { motion } from "framer-motion";
import Image from "next/image";

const NewsView: FC = () => {
  return (
    <motion.div className="flex flex-col items-center" {...enterAnimation}>
      <div className="flex flex-col items-center gap-1 pt-10 md:pt-20 lg:mt-20">
        <h1 className="text-3xl tracking-[6px] uppercase">Jobs</h1>
        <div className="w-full h-0.5 bg-mon-purple" />
      </div>
      <p className="pb-10 md:pb-14 mt-5 tracking-wider text-center mx-5">
        Take a look at some of our available careers and opportunities.
      </p>
      <div className="w-[90%] flex gap-3 max-[1100px]:flex-col justify-center items-center  pb-[100px]">
        {jobPositions.map((job, index) => (
          <div
            className="flex flex-col justify-between lg:w-[425px] lg:h-[543px] min-h-[543px] max-w-[425px] rounded border border-black/40 p-4"
            key={index}
          >
            <div className="bg-[#E9DEFF] rounded flex flex-col gap-2 w-full px-5 py-8">
              <div className="flex justify-between w-full">
                <p className="rounded-3xl bg-white py-1 px-3 font-mon-regular tracking-wider">
                  {job.date}
                </p>
                <Image
                  src="/images/icons/monarch-sm.png"
                  width={43}
                  height={33}
                  alt="Monarch"
                />
              </div>
              <p className="font-mon-regular mt-4">Monarch Collective</p>
              <p className="text-2xl font-mon-bold -mt-2 mb-3">{job.title}</p>
              <div className="flex gap-2 mt-1">
                {job.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-black py-1 px-3 text-xs font-mon-regular"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <p className="mt-2 text-base font-mon-regular">Overview:</p>
              <p className="mt-2 line-clamp-6 text-base">{job.description}</p>
            </div>
            <a
              className="flex w-full self-end justify-end mt-3 hover:underline"
              href={job.url}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 12H20M20 12L14 6M20 12L14 18"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="font-mon-regular ">Interested in more details?</p>
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default NewsView;
