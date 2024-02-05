import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  page?: string;
  fullpageApi?: any;
}

const Footer: FC<Props> = (props: Props) => {
  const { page, fullpageApi } = props;

  const router = useRouter();

  const navigate = (pageId: number) => {
    if (page === "landing" && fullpageApi) {
      fullpageApi.fullpageApi.moveTo(pageId);
    } else {
      router.push(
        { pathname: "/", query: { to: pageId === 2 ? "team" : "news" } },
        "/"
      );
    }
  };

  return (
    <footer
      className="px-10 xl:px-24 w-full bg-black z-0 text-[#CDB7F6] py-20 text-sm"
      key="footer"
    >
      <div className="flex max-[1000px]:flex-wrap gap-10 lg:gap-20 xl:gap-36 pl-16 max-[1000px]:pl-0">
        <div className="flex flex-col gap-4">
          <div className="font-mon-bold  tracking-[2px]">ABOUT </div>
          <div
            className="tracking-[2px] font-light cursor-pointer "
            onClick={() => navigate(2)}
          >
            MEET THE TEAM
          </div>
          <div
            className="tracking-[2px] font-light cursor-pointer"
            onClick={() => navigate(3)}
          >
            NEWS
          </div>
        </div>

        <div className="flex flex-col ">
          <div className="font-mon-bold mb-4 tracking-[2px]">PORTAL</div>
          <div className="tracking-[2px] font-light">
            <Link target="_blank" href="https://monarch.arkpes.com/login">
              INVESTOR PORTAL
            </Link>
          </div>
        </div>

        <div className="flex flex-col ">
          <div className="font-mon-bold mb-4 tracking-[2px]">CONTACT</div>
          <div className="tracking-[2px] font-light">
            <Link href="mailto:info@xyz.dev">INQUIRY FORM</Link>
          </div>
        </div>

        <div className="flex grow max-[1000px]:justify-start justify-end items-end tracking-[2px] font-mon-bold whitespace-nowrap">
          <Link target="_blank" href="https://twitter.com/exp_studio_">
            POWERED BY EXP
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
