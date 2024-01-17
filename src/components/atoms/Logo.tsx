import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { midClickAnimation, enterAnimation } from "@constants";
import Link from "next/link";

interface Props {
  fullpageApi: any;
}
const Logo: FC<Props> = (props: Props) => {
  const { fullpageApi } = props;
  return (
    <motion.div
      className="my-0 flex items-center gap-2 cursor-pointer"
      {...enterAnimation}
      onClick={() => fullpageApi.fullpageApi.moveTo(1)}
    >
      <Image
        src="/images/logo.png"
        height={40}
        width={120}
        alt="Logo"
        priority
        className="transition-all duration-300 opacity-80 hover:opacity-100"
      />
    </motion.div>
  );
};
export default Logo;
