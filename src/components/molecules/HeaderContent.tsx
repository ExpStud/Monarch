import { FC, useState } from "react";
import { CloseIcon, LandingHeader, Logo, Menu, MenuIcon } from "@components";
import Link from "next/link";
import { useWindowSize } from "@hooks";
import { AnimatePresence, motion } from "framer-motion";

const HeaderContent = ({
  pageIndex,
  menuType,
  fullpageApi,
  section,
}: {
  pageIndex: Number | undefined;
  menuType: any;
  fullpageApi: any;
  section?: number;
}) => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [winWidth] = useWindowSize();

  if (winWidth > 680 && navbarActive) {
    setNavbarActive(false);
  }

  return (
    <div className="relative">
      {winWidth < 768 ? (
        <LandingHeader fullpageApi={fullpageApi} />
      ) : (
        <div className="w-screen gap-5 flex items-center justify-between px-5 md:px-10 py-3 z-20 relative">
          <Logo fullpageApi={fullpageApi} />

          <div className="max-md:hidden flex font-light tracking-[0.11rem] justify-center max-md:gap-4 gap-10 text-sm h-[100%] ">
            <div
              className={
                pageIndex == 0 && section === 0 ? "active-tab" : "inactive-tab"
              }
              onClick={() => fullpageApi.fullpageApi.moveTo(2)}
            >
              MEET THE TEAM
            </div>
            <div
              className={
                pageIndex == 1 || (pageIndex == 0 && section === 1)
                  ? "active-tab"
                  : "inactive-tab"
              }
              onClick={() => fullpageApi.fullpageApi.moveTo(3)}
            >
              NEWS
            </div>
            <Link
              target="_blank"
              href="https://monarch.arkpes.com/login"
              className="inactive-tab"
            >
              INVESTOR PORTAL
            </Link>
          </div>
          {/* {winWidth < 680 && ( */}
          {/* <div className="md:hidden">
            <AnimatePresence mode="wait">
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
            </AnimatePresence>
          </div> */}
          {/* )} */}

          {/* <Menu
            menuType={menuType}
            toggleMenu={setNavbarActive}
            open={navbarActive}
            fullpageApi={fullpageApi}
          /> */}
        </div>
      )}
      <div className="h-[1.5px] bg-black opacity-[20%] mx-10 mt-2"></div>
    </div>
  );
};
export default HeaderContent;
