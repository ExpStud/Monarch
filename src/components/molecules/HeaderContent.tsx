import { FC, useState } from "react";
import { CloseIcon, Logo, Menu, MenuIcon } from "@components";

const HeaderContent: FC = ({pageIndex} : any) => {
  const activePageClasses = "text-[#CDB7F6] bg-black px-[16px] py-[3px] rounded-[4px]";

  return (
    <div>
      <div className="w-screen max-md:flex-col gap-5 flex items-center justify-between px-4 md:px-10 py-4 z-20">
        <Logo />

        <div className="flex items-center flex-wrap justify-center max-md:gap-4 gap-12 tracking-[1.6px] text-sm h-[100%]">
          <div className={pageIndex == 0 ? activePageClasses : ""}>
            <a href="/meet-the-team">MEET THE TEAM</a>
          </div>
          <div className={pageIndex == 1 ? activePageClasses : ""}>
            <a href="/news">NEWS</a>
          </div>
          <div>
            <a href="/">INVESTOR PORTAL</a>
          </div>
        </div>
      </div>

      <div className="h-[1.5px] bg-black opacity-[20%] mx-10 mt-2"></div>
    </div>
  );
};
export default HeaderContent;
