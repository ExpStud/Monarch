import { FC, useState } from "react";
import { CloseIcon, Logo, Menu, MenuIcon } from "@components";
import Link from "next/link";
import { useWindowSize } from "@hooks";
import { AnimatePresence } from "framer-motion";

const HeaderContent = ({
  pageIndex,
  menuType,
}: {
  pageIndex: Number | undefined;
  menuType: any;
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
        <Logo />

        <div className="max-[680px]:hidden  flex font-light tracking-[0.11rem] justify-center max-md:gap-4 gap-12  text-sm h-[100%]">
          <div className={pageIndex == 0 ? activePageClasses : ""}>
            MEET THE TEAM
          </div>
          <div className={pageIndex == 1 ? activePageClasses : ""}>NEWS</div>
          <div>
            <Link target="_blank" href="https://monarch.arkpes.com/login">
              INVESTOR PORTAL
            </Link>
          </div>
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
        />
      </div>
      <div className="h-[1.5px] bg-black opacity-[20%] mx-10 mt-2"></div>
    </div>
  );
};
export default HeaderContent;
