import { FC, useState } from "react";
import { CloseIcon, Logo, Menu, MenuIcon } from "@components";
import Link from "next/link";
import { useWindowSize } from "@hooks";
import { AnimatePresence, motion } from "framer-motion";

const HeaderContent = ({
  pageIndex,
  menuType,
  fullpageApi,
}: {
  pageIndex: Number | undefined;
  menuType: any;
  fullpageApi: any;
}) => {
  const activePageClasses =
    "text-[#CDB7F6] bg-black px-[16px] py-[3px] rounded-[4px]";
  const [navbarActive, setNavbarActive] = useState(false);
  const [winWidth] = useWindowSize();

  if (winWidth > 680 && navbarActive) {
    setNavbarActive(false);
  }

  return (
    <div>
      <div className="w-screen gap-5 flex items-center justify-between px-5 md:px-10 py-3 z-20 relative">
        <Logo fullpageApi={fullpageApi} />

        <div className="max-[680px]:hidden flex font-light tracking-[0.11rem] justify-center max-md:gap-4 gap-10 text-sm h-[100%]">
          <motion.div
            className={
              pageIndex == 0
                ? activePageClasses
                : "cursor-pointer px-[16px] py-[3px] rounded-[4px]"
            }
            onClick={() => fullpageApi.fullpageApi.moveTo(2)}
            whileHover={{
              backgroundColor: pageIndex !== 0 ? "#CDB7F6" : "",
            }}
          >
            MEET THE TEAM
          </motion.div>
          <motion.div
            className={
              pageIndex == 1
                ? activePageClasses
                : "cursor-pointer px-[16px] py-[3px] rounded-[4px]"
            }
            onClick={() => fullpageApi.fullpageApi.moveTo(3)}
            whileHover={{
              backgroundColor: pageIndex !== 1 ? "#CDB7F6" : "",
              border: pageIndex !== 1 ? "black" : "",
            }}
          >
            NEWS
          </motion.div>
          <motion.div
            whileHover={{
              backgroundColor: pageIndex !== 2 ? "#CDB7F6" : "",
            }}
            className="px-[16px] py-[3px] rounded-[4px]"
          >
            <Link target="_blank" href="https://monarch.arkpes.com/login">
              INVESTOR PORTAL
            </Link>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {winWidth < 680 && (
            <div>
              {!navbarActive ? (
                <div
                  key="menu-icon"
                  onClick={() => setNavbarActive(true)}
                  className="cursor-pointer"
                >
                  <MenuIcon onClick={() => setNavbarActive(true)}></MenuIcon>
                </div>
              ) : (
                <div
                  onClick={() => setNavbarActive(false)}
                  className="cursor-pointer z-50 relative"
                >
                  <CloseIcon />
                </div>
              )}
            </div>
          )}
        </AnimatePresence>

        <Menu
          menuType={menuType}
          toggleMenu={setNavbarActive}
          open={navbarActive}
          fullpageApi={fullpageApi}
        />
      </div>
      <div className="h-[1.5px] bg-black opacity-[20%] mx-10 mt-2"></div>
    </div>
  );
};
export default HeaderContent;
