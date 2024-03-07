import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import SpaceCity from "../assets/SpaceCity.jpg";
import SpaceCity1 from "../assets/SpaceCity1.jpg";
import Image from "next/image";

interface Props {
  image: string;
  position: string;
  name: string;
  description: string;
  interests: string[];
  linkedin: string;
}

const Card: FC<Props> = ({
  image,
  position,
  name,
  description,
  interests,
  linkedin,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }
  return (
    <div
      className="flip-card min-w-[320px] max-lg:max-w-[340px]  xl:w-[360px] h-[470px]  xl:h-[487px] rounded-md cursor-pointer"
      onClick={() => handleFlip()}
      // onMouseEnter={() => handleFlip()}
      // onMouseLeave={() => handleFlip()}
    >
      <motion.div
        className="flip-card-inner w-[100%] h-[100%]"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{
          duration: 0.6,
          animationDirection: "normal",
          ease: "linear",
        }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        {/* front side */}
        <div className="w-[100%] h-full flip-card-front bg-black px-2.5 py-2.5 rounded-[4px]">
          {/* <img className="w-full" src={image} /> */}
          <Image src={image} width={500} height={500} alt={name} />
          <div className="mt-4 text-[15px]">{position}</div>
          <div className="flex justify-between items-end mt-[-2px]">
            <div className="font-mon-bold text-xl text-ellipsis ">{name}</div>
            <div
              className="font-light text-[15px]"
              onClick={() => handleFlip()}
            >
              click to flip
            </div>
          </div>
          <div className="h-[1px] bg-white my-2"></div>
          <div className="flex gap-5 mt-3.5">
            <AnimatePresence>
              {!isFlipped && (
                <motion.a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.4 } }}
                  exit={{ opacity: 0, transition: { duration: 0.4 } }}
                >
                  <div className="h-8 w-8 bg-white rounded-full p-1 flex items-center justify-center">
                    <img src="images/linkedIn.png" alt="" />
                  </div>
                </motion.a>
              )}
            </AnimatePresence>
            {/* <div className="h-8 w-8 bg-white rounded-full p-1 flex items-center justify-center">
              <img src="images/spotify.png" alt="" />
            </div>
            <div className="h-8 w-8 bg-white rounded-full p-1 flex items-center justify-center">
              <img src="images/heart.png" alt="" />
            </div> */}
          </div>
        </div>

        {/* back side */}
        <div className="w-[100%] h-full flip-card-back bg-black px-2.5 py-2.5 rounded-[4px]">
          <div className="flex">
            <img className="w-[137px]" src={image} />

            <div className="grow flex flex-col items-start lg:items-center justify-center relative">
              <div className="h-[1px] w-[calc(100%-16px)] bg-white ml-[16px] absolute top-0"></div>
              <div className="mt-4 pl-2">{position}</div>
              <div className="font-mon-bold text-xl pl-2 ">{name}</div>
            </div>

            <div className="h-auto mt-2.5 w-[1px] bg-white"></div>
          </div>
          <div className="h-[1px] bg-white my-3"></div>
          <div className="font-light text-sm">BACKSTORY</div>
          {/* <div className="text-xs mt-3 line-clamp-6 lg:line-clamp-4 xl:line-clamp-none xl:h-[145px]"> */}
          <div className="text-xs mt-3 pb-3 h-[240px] lg:h-[252px] overflow-y-auto pr-3">
            {description}
          </div>
          <div className="h-[1px] bg-white my-5"></div>
          <div className="flex gap-2 mb-1">
            {/* 1st box */}
            {/* <div className="flex">
              <div className="h-[66] my-[4px] w-[1px] bg-white"></div>

              <div className="border-y border-y-1 py-[4px] mx-1 w-[69px] overflow-hidden">
                <div className="flex items-center justify-center h-[74px] text-[9px] lg:text-xs text-center bg-[#4A0A8A]">
                  {interests[0]}
                </div>
              </div>

              <div className="h-[66] my-[4px] w-[1px] bg-white"></div>
            </div> */}

            {/* 2nd box */}
            {/* <div className="flex">
              <div className="h-[66] my-[4px] w-[1px] bg-white"></div>

              <div className="border-y border-y-1 py-[4px] mx-1 w-[69px] overflow-hidden">
                <div className="flex items-center justify-center h-[74px] text-[9px] lg:text-xs text-center bg-[#87817B]">
                  {interests[1]}
                </div>
              </div>

              <div className="h-[66] my-[4px] w-[1px] bg-white"></div>
            </div> */}

            {/* 3rd box */}
            {/* <div className="flex">
              <div className="h-[66] my-[4px] w-[1px] bg-white"></div>

              <div className="border-y border-y-1 py-[4px] mx-1 w-[69px] overflow-hidden">
                <div className="flex items-center justify-center h-[74px] text-[9px] lg:text-xs text-center bg-[#006388]">
                  {interests[2]}
                </div>
              </div>

              <div className="h-[66] my-[4px] w-[1px] bg-white"></div>
            </div> */}

            {/* 4th box */}
            {/* <div className="flex">
              <div className="h-[66] my-[4px] w-[1px] bg-white"></div>

              <div className="border-y border-y-1 py-[4px] mx-1">
                <div className="flex items-center justify-center h-[74px] text-[9px] lg:text-xs text-center bg-[#87817B]">
                  {interests[3]}
                </div>
              </div>

              <div className="h-[66] my-[4px] w-[1px] bg-white"></div>
            </div> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
