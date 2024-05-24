import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { enterAnimation } from "@constants";
import { useRouter } from "next/router";

interface Props {
  callback?: () => void;
}
const Logo: FC<Props> = (props: Props) => {
  const { callback } = props;
  const router = useRouter();
  return (
    <div
      className="my-0 flex items-center gap-2 cursor-pointer"
      // {...enterAnimation}
      onClick={() => {
        if (callback) {
          callback();
        } else {
          router.push("/");
        }
      }}
    >
      <Image
        src="/images/logo.png"
        height={29}
        width={149}
        alt="Logo"
        priority
      />
    </div>
  );
};
export default Logo;
