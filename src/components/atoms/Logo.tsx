import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { enterAnimation } from "@constants";

interface Props {
  fullpageApi: any;
  callback?: () => void;
}
const Logo: FC<Props> = (props: Props) => {
  const { fullpageApi, callback } = props;

  return (
    <motion.div
      className="my-0 flex items-center gap-2 cursor-pointer"
      {...enterAnimation}
      onClick={() => {
        if (callback) {
          callback();
        } else fullpageApi.fullpageApi.moveTo(0);
      }}
    >
      <Image
        src="/images/logo.png"
        height={29}
        width={149}
        alt="Logo"
        priority
        className="transition-all duration-300 opacity-80 hover:opacity-100"
      />
    </motion.div>
  );
};
export default Logo;
