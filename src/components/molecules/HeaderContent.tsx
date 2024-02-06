import { FC, useEffect, useRef, useState } from "react";
import { CloseIcon, LandingHeader, Logo, Menu, MenuIcon } from "@components";
import Link from "next/link";
import { useWindowSize } from "@hooks";
import { AnimatePresence, Variants, motion, useInView } from "framer-motion";
import { enterAnimation } from "src/constants";
import { useRouter } from "next/router";

const HeaderContent = ({
  pageIndex,
  menuType,
  fullpageApi,
  section,
}: {
  pageIndex: number | undefined;
  menuType: any;
  fullpageApi?: any;
  section?: number;
}) => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [winWidth] = useWindowSize();

  const router = useRouter();

  const ref = useRef(null);
  // const isInView = useInView(ref);

  // if (winWidth > 680 && navbarActive) {
  //   setNavbarActive(false);
  // }

  // useEffect(() => {
  //   console.log("isInView ", section, isInView);
  // }, [isInView, section]);

  // const headerVariants: Variants = {
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       delay: 0.25,
  //       duration: 0.5,
  //       ease: "easeInOut",
  //     },
  //   },
  //   hidden: {
  //     opacity: 0,
  //     transition: {
  //       delay: 0.25,
  //       duration: 0.5,
  //       ease: "easeInOut",
  //     },
  //   },
  // };

  const navigate = (pageId: number) => {
    //from landing page
    if (pageIndex !== undefined && pageIndex < 3 && fullpageApi) {
      fullpageApi.fullpageApi.moveTo(pageId);
    } else {
      //from news item page
      router.push(
        { pathname: "/", query: { to: pageId === 2 ? "team" : "news" } },
        "/"
      );
    }
  };

  const handleLogoClick = () => {
    if (pageIndex !== undefined && pageIndex < 3 && fullpageApi) {
      fullpageApi.fullpageApi.moveTo(1);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="relative" ref={ref}>
      {winWidth < 768 ? (
        <LandingHeader fullpageApi={fullpageApi} callback={navigate} />
      ) : (
        <div className="w-screen gap-5 flex items-center justify-between px-5 md:px-10 py-6 z-20 relative">
          <Logo fullpageApi={fullpageApi} callback={() => handleLogoClick()} />

          <div className="max-md:hidden flex font-light tracking-[0.11rem] justify-center max-md:gap-4 gap-10 text-sm h-[100%] ">
            <div
              className={
                pageIndex == 0 && section === 0 ? "active-tab" : "inactive-tab"
              }
              onClick={() => navigate(2)}
            >
              MEET THE TEAM
            </div>
            <div
              className={
                pageIndex == 1 || (pageIndex == 0 && section === 1)
                  ? "active-tab"
                  : "inactive-tab"
              }
              onClick={() => navigate(3)}
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
        </div>
      )}
      <div className="absolute top-12 inset-x-0 lg:block  h-[1px] bg-black opacity-[20%] mx-3 lg:mx-10"></div>
    </div>
  );
};
export default HeaderContent;
