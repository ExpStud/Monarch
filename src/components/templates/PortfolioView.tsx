import { FC, useState } from "react";
import { portfolioData, enterAnimation } from "@constants";
import { motion } from "framer-motion";
import Image from "next/image";

const PortfolioView: FC = () => {
  // const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  // const handleClick = (index: number) => {
  //   setClickedIndex(index);
  // };

  return (
    <motion.div
      className="flex flex-col items-center min-h-screen 3xl:min-h-0 pb-[100px] lg:pb-[250px] pc-10"
      {...enterAnimation}
    >
      <div className="flex flex-col items-center gap-1 pt-10 md:pt-20 lg:mt-20">
        <h1 className="text-3xl tracking-[6px] uppercase">Portfolio</h1>
        <div className="w-full h-0.5 bg-mon-purple" />
      </div>
      <hr className="pb-10 md:pb-14 mt-5 mx-5" />
      <div className="w-[90%] flex gap-10 lg:gap-6 xl:gap-10 max-[1100px]:flex-col justify-center items-center">
        {portfolioData.map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            rel="noreferrer"
            target="_blank"
            className="portfolio-border flex flex-col items-center justify-end gap-3 max-md:w-full max-md:min-w-[280px] max-md:max-w-[320px] md:w-[368px] h-[329px] pb-3"
            // onMouseDown={() => handleClick(index)}
            // onMouseOut={() => setClickedIndex(null)}
            // onMouseLeave={() => setClickedIndex(null)}
            animate={{
              boxShadow:
                // clickedIndex === index
                //   ? "4px 4px 4px 0px rgba(0, 0, 0, 0)" :
                "4px 4px 4px 0px rgba(0, 0, 0, 0.15",
            }}
            // whileHover={{
            //   boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0)",
            //   transition: { duration: 0.5 },
            // }}
            // transition={{ duration: 0.25 }}
          >
            <Image
              src={item.image.src}
              width={item.image.width}
              height={item.image.height}
              alt={item.name}
              className={`${index === 0 ? "mb-2" : ""}`}
            />
            <p className="text-xl md:text-2xl font-mon-bold pb-2">
              {item.name}
            </p>
            <GlobeIcon />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 0.524171C5.6724 0.524171 0.524202 5.67221 0.524202 12C0.524281 18.3278 5.67233 23.476 11.9999 23.476C18.3277 23.476 23.4757 18.3278 23.4757 12C23.4758 5.67216 18.3276 0.524203 12 0.524171ZM12 24.0001C8.79443 24.0001 5.78094 22.7518 3.51471 20.4852C1.2486 18.2188 0.000244141 15.2053 0.000244141 12.0001C0.000244141 8.79476 1.24851 5.78141 3.51471 3.51497C5.78095 1.24845 8.79439 0.000244141 11.9999 0.000244141C15.205 0.000228463 18.2184 1.24848 20.4852 3.51497C22.7514 5.78136 23.9997 8.79478 23.9997 12.0001C23.9997 15.2053 22.7514 18.2188 20.4852 20.4852C18.2185 22.7518 15.205 24.0001 12 24.0001Z"
      fill="#707070"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21.1417 19.6242C21.0975 19.6242 21.0528 19.613 21.0118 19.5895C18.8074 18.3251 15.5226 17.5999 11.9999 17.5999C8.47727 17.5999 5.1925 18.3251 2.98797 19.5895C2.8625 19.6614 2.70249 19.6181 2.63047 19.4926C2.55841 19.367 2.60153 19.207 2.72708 19.135C5.00857 17.8264 8.38825 17.0759 11.9999 17.0759C15.6116 17.0759 18.9912 17.8264 21.2722 19.135C21.3978 19.2069 21.4414 19.3671 21.3693 19.4926C21.3208 19.577 21.2323 19.6242 21.1417 19.6242Z"
      fill="#707070"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.9998 0.524171C10.3919 0.524171 8.86739 1.69662 7.70754 3.82545C6.52049 6.00466 5.86652 8.90774 5.86652 12C5.86655 15.0922 6.5204 17.9953 7.70754 20.1746C8.86749 22.3036 10.3918 23.476 11.9998 23.476C13.6079 23.476 15.1317 22.3036 16.2916 20.1746C17.4788 17.9953 18.1326 15.0923 18.1326 12C18.1326 8.90772 17.4787 6.00466 16.2916 3.82545C15.1318 1.69662 13.6078 0.524203 11.9998 0.524171ZM11.9998 24.0001C10.191 24.0001 8.50335 22.7305 7.24742 20.4253C6.01944 18.1705 5.34253 15.1784 5.34253 12.0001C5.34253 8.82178 6.01933 5.82966 7.24742 3.57484C8.50337 1.26975 10.191 0.000244141 11.9998 0.000244141C13.8082 0.000228463 15.4958 1.26975 16.7517 3.57484C17.9803 5.82963 18.6566 8.82174 18.6566 12.0001C18.6567 15.1783 17.9803 18.1705 16.7517 20.4253C15.4958 22.7305 13.8081 24.0001 11.9998 24.0001Z"
      fill="#707070"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.9999 23.9998C11.8554 23.9998 11.7379 23.8825 11.7379 23.7378L11.738 0.261948C11.738 0.117287 11.8552 1.57097e-09 11.9999 1.57097e-09C12.1446 -1.56764e-05 12.2619 0.117318 12.2619 0.261995L12.262 23.7377C12.262 23.8823 12.1445 23.9998 11.9999 23.9998Z"
      fill="#707070"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.9998 7.01481C8.35655 7.01481 4.95822 6.25352 2.67563 4.92622C2.55067 4.85345 2.50862 4.69311 2.58121 4.56806C2.65384 4.4429 2.81426 4.4006 2.93926 4.4733C5.1439 5.75546 8.44596 6.49079 11.9998 6.49079C15.5531 6.49079 18.8557 5.75546 21.0603 4.4733C21.1853 4.4006 21.3452 4.44296 21.4183 4.568C21.491 4.69306 21.4484 4.85346 21.3233 4.92622C19.0413 6.25352 15.6431 7.01483 11.9998 7.01481Z"
      fill="#707070"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M23.7375 12.2618H0.262089C0.117428 12.2618 0 12.1445 0 11.9998C0 11.8551 0.11735 11.7378 0.261979 11.7378L23.7374 11.7378C23.8821 11.7378 23.9994 11.8551 23.9994 11.9998C23.9994 12.1445 23.8821 12.2618 23.7375 12.2618Z"
      fill="#707070"
    />
  </svg>
);

export default PortfolioView;
