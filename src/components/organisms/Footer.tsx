import { FC, useState } from "react";
import { ExpIcon, IconBar } from "@components";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { enterAnimation } from "@constants";

const Footer: FC = () => {
  const [animate, setAnimate] = useState<boolean>(false);

  //exp hover animation
  const containerAnimation = {
    animate: {
      opacity: 1,
      rotate: animate ? -90 : 0,
    },
    exit: { opacity: 0 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <footer className="px-24 w-full bg-black z-0 text-[#CDB7F6] py-20 text-sm" key="footer">
      <div className="flex max-[1000px]:flex-wrap max-[1000px]:gap-10 gap-36 pl-16 max-[1000px]:pl-0">
        <div className="flex flex-col">
          <div className="font-bold mb-4">
            <a href="">ABOUT</a>
          </div>
          <div className="tracking-[2px] font-light">
            <a href="">MEET THE TEAM</a>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="font-bold mb-4">
            <a href="">PORTAL</a>
          </div>
          <div className="tracking-[2px] font-light">
            <a href="">INVESTOR PORTAL</a>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="font-bold mb-4">
            <a href="">CONTACT</a>
          </div>
          <div className="tracking-[2px] font-light">
            <a href="">INQUIRY FORM</a>
          </div>
        </div>

        <div className="flex grow max-[1000px]:justify-start justify-end items-end tracking-[2px] font-bold whitespace-nowrap">
          <a href="">POWERED BY EXP</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
