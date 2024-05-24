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
  interestsUrl: string[];
  linkedin: string;
  spotify: string;
}

const Card: FC<Props> = ({
  image,
  position,
  name,
  description,
  interests,
  interestsUrl,
  linkedin,
  spotify,
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
      className="flip-card min-w-[320px] max-lg:max-w-[340px]  xl:w-[360px] h-[470px] xl:h-[487px] rounded-md cursor-pointer"
      onClick={() => handleFlip()}
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
        <div className="w-[100%] h-full flip-card-front border border-custom-black bg-mon-cream px-2.5 py-2.5 rounded-[4px] text-custom-black">
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
          <div className="h-[1px] bg-custom-black my-2"></div>
          <div className="flex gap-4 mt-3.5">
            <AnimatePresence>
              {!isFlipped && (
                <>
                  <motion.a
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.4 } }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <div className="h-8 w-8 border border-custom-black rounded-full p-1.5 flex items-center justify-center transition-300 hover:scale-110">
                      <img src="images/linkedIn-b.png" alt="Linkedin" />
                    </div>
                  </motion.a>
                  <motion.a
                    href={spotify}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.4 } }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <div className="h-8 w-8 border border-custom-black rounded-full p-1 flex items-center justify-center transition-300 hover:scale-110">
                      <img src="images/spotify-b.png" alt="Spotify" />
                    </div>
                  </motion.a>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* back side */}
        <div className="w-[100%] h-full flip-card-back border border-custom-black bg-mon-cream px-2.5 py-2.5 rounded-[4px] text-custom-black">
          <div
            className="flex cursor-pointer "
            // onClick={(event) => event.stopPropagation()}
          >
            <img className="w-[137px]" src={image} />

            <div className="grow flex flex-col items-start lg:items-center justify-center relative">
              <div className="h-[1px] w-[calc(100%-16px)] bg-custom-black ml-[16px] absolute top-0"></div>
              <div className="mt-4 pl-2">{position}</div>
              <div className="font-mon-bold text-base xl:text-[19px] pl-2  text-center">
                {name}
              </div>
            </div>

            <div className="h-auto mt-2.5 w-[1px] bg-custom-black"></div>
          </div>
          <div className="h-[1px] bg-custom-black my-3"></div>
          <div className=" text-lg">BACKSTORY</div>
          {/* <div className="text-xs mt-3 line-clamp-6 lg:line-clamp-4 xl:line-clamp-none xl:h-[145px]"> */}
          <div
            className="text-sm py-2 h-[150px] xl:h-[165px] overflow-y-auto pr-3 leading-5"
            onWheel={(event) => {
              event.stopPropagation();
            }}
          >
            {description}
          </div>
          <div className="h-[1px] bg-custom-black my-3"></div>
          <div className="flex items-center justify-center gap-2 mb-1 text-white">
            {/* 1st box */}
            <div
              className="flex cursor-pointer hover:underline"
              onClick={(event) => {
                event.stopPropagation();
                window.open(interestsUrl[0], "_blank");
              }}
            >
              <div className="h-[66] my-[4px] w-[1px] bg-custom-black"></div>

              <div className="border-y border-y-1 border-custom-black py-[4px] mx-1 w-[62px] xl:w-[69px] overflow-hidden">
                <div className="flex items-center justify-center h-[74px] text-[10px] lg:text-[11px] text-center bg-[#CDB7F6]">
                  {interests[0]}
                </div>
              </div>

              <div className="h-[66] my-[4px] w-[1px] bg-custom-black"></div>
            </div>

            {/* 2nd box */}
            <div
              className="flex cursor-pointer hover:underline"
              onClick={(event) => {
                event.stopPropagation();
                window.open(interestsUrl[1], "_blank");
              }}
            >
              <div className="h-[66] my-[4px] w-[1px] bg-custom-black"></div>

              <div className="border-y border-y-1 border-custom-black py-[4px] mx-1 w-[62px] xl:w-[69px] overflow-hidden">
                <div className="flex items-center justify-center h-[74px] text-[10px] lg:text-[11px] text-center bg-[#E1D6F7]">
                  {interests[1]}
                </div>
              </div>

              <div className="h-[66] my-[4px] w-[1px] bg-custom-black"></div>
            </div>

            {/* 3rd box */}
            <div
              className="flex cursor-pointer hover:underline"
              onClick={(event) => {
                window.open(interestsUrl[2], "_blank");
                event.stopPropagation();
              }}
            >
              <div className="h-[66] my-[4px] w-[1px] bg-custom-black"></div>

              <div className="border-y border-y-1 border-custom-black py-[4px] mx-1 w-[62px] xl:w-[69px] overflow-hidden">
                <div className="flex items-center justify-center h-[74px] text-[10px] lg:text-[11px] text-center bg-[#CDB7F6]">
                  {interests[2]}
                </div>
              </div>

              <div className="h-[66] my-[4px] w-[1px] bg-custom-black"></div>
            </div>

            {/* 4th box */}
            <div
              className="flex cursor-pointer hover:underline"
              onClick={(event) => {
                window.open(interestsUrl[3], "_blank");
                event.stopPropagation();
              }}
            >
              <div className="h-[66] my-[4px] w-[1px] bg-custom-black"></div>

              <div className="border-y border-y-1 border-custom-black py-[4px] mx-1 w-[62px] xl:w-[69px]">
                <div className="flex items-center justify-center h-[74px] text-[10px] lg:text-[11px] text-center bg-[#E1D6F7]">
                  {interests[3]}
                </div>
              </div>

              <div className="h-[66] my-[4px] w-[1px] bg-custom-black"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
