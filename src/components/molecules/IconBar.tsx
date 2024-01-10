import { motion } from "framer-motion";
import { FC, HTMLAttributes } from "react";
import Image from "next/image";
import Link from "next/link";
import { TwitterIcon, DiscordIcon, ExpIcon } from "@components";

interface Props extends HTMLAttributes<HTMLDivElement> {
  showExchange?: boolean;
}
const IconBar: FC<Props> = (props: Props) => {
  const { showExchange = true, className } = props;
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <DiscordIcon url={""} />
      <TwitterIcon url={""} />
      {/* {showExchange && (
        <Link
          href={""}
          rel="noreferrer"
          target="_blank"
          className="cursor-pointer"
        >
          <ExpIcon />
        </Link>
      )} */}
    </div>
  );
};

export default IconBar;
