import { FC } from "react";

import { HeaderContent } from "@components";
interface Props {
  showHeader?: boolean;
  menuType?: string;
  pageIndex?: number;
  section?: number;
}

const Header: FC<Props> = (props: Props) => {
  const {
    menuType = "absolute",
    showHeader = true,
    pageIndex = -1,
    section,
  } = props;

  return (
    <header
      className={`max-md:!relative ${menuType} top-0 transition-all duration-500 bg-[#FAF6EE] z-50`}
    >
      <HeaderContent
        menuType={menuType}
        pageIndex={pageIndex}
        section={section}
      />
    </header>
  );
};

export default Header;
