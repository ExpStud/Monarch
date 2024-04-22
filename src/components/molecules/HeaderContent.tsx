import { useRef, useState } from "react";
import { Logo, Menu, MenuIcon } from "@components";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderContent = ({
  pageIndex,
  fullpageApi,
  section,
}: {
  pageIndex: number | undefined;
  fullpageApi?: any;
  section?: number;
}) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const router = useRouter();
  const ref = useRef(null);

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
    if (pageIndex === 3) {
      router.push({ pathname: "/", query: { to: "home" } }, "/");
    } else {
      fullpageApi.fullpageApi.moveTo(1);
    }
  };

  return (
    <div className="relative bg-mon-cream " ref={ref}>
      <div className="w-screen gap-5 flex items-center justify-between px-5 md:px-10 py-3 md:py-6 z-20 relative">
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

        <div
          onClick={() => setOpenMenu(true)}
          className="cursor-pointer md:hidden z-100"
        >
          <MenuIcon />
        </div>
        <Menu
          toggleMenu={setOpenMenu}
          open={openMenu}
          navigate={navigate}
          currentPage={pageIndex == 0 && section === 0 ? "team" : "news"}
        />
      </div>

      <div className=" md:top-auto md:relative  h-[1px] bg-black opacity-[20%] mx-3 lg:mx-10"></div>
    </div>
  );
};
export default HeaderContent;
