import { FC, useRef, useState } from "react";
import { Header, Logo, Menu, MenuIcon, Underline } from "@components";
import Link from "next/link";
import { useRouter } from "next/router";
import { scrollToSection } from "@utils";

const HeaderContent = ({ section }: { section: number }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const router = useRouter();
  const [pageIndex, setPageIndex] = useState<number>(
    router.pathname === "/" ? 0 : 1
  );

  const ref = useRef(null);

  const navigate = (pageId: number) => {
    //from landing page
    if (pageIndex === 0) {
      if (pageId === 1) {
      } else if (pageId === 2) {
        scrollToSection("team");
      } else if (pageId === 3) {
        scrollToSection("news");
      }
    } else {
      //from news item page
      router.push(
        { pathname: "/", query: { to: pageId === 2 ? "team" : "news" } },
        "/"
      );
    }
  };

  const handleLogoClick = () => {
    router.push({ pathname: "/", query: { to: "home" } }, "/");
  };

  console.log("pageIndex", pageIndex);
  console.log("section", section);

  return (
    <div className="relative bg-mon-cream " ref={ref}>
      <div className="w-screen gap-5 flex items-center justify-between px-5 md:px-10 py-3 md:py-6 z-20 relative">
        <Logo callback={() => handleLogoClick()} />

        <div className="max-md:hidden flex font-light tracking-[0.11rem] justify-center gap-2 lg:gap-10 text-sm h-[100%] ">
          <HeaderItem
            text="MEET THE TEAM"
            callback={() => navigate(2)}
            active={pageIndex == 0 && section === 0}
          />
          <HeaderItem
            text="NEWS"
            callback={() => navigate(3)}
            active={pageIndex == 1 || (pageIndex == 0 && section === 1)}
          />
          <HeaderItem
            text="INVESTOR PORTAL"
            callback={() => {
              window.open("https://monarch.arkpes.com/login", "_blank");
            }}
            active={false}
          />
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

interface Props {
  text: string;
  callback: () => void;
  active: boolean;
}

const HeaderItem: FC<Props> = (props: Props) => {
  const { text, callback, active } = props;

  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className={`cursor-pointer flex flex-col gap-1 mt-1 items-center ${
        active ? "" : ""
      }`}
      onClick={callback}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p>{text}</p>
      <Underline animate={active || hover} />
    </div>
  );
};

export default HeaderContent;
