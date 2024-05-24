import { motion } from "framer-motion";
import { FC } from "react";

interface UnderlineProps {
  animate: boolean;
  background?: string;
}
const Underline: FC<UnderlineProps> = (props: UnderlineProps) => {
  const { animate, background = "bg-mon-purple" } = props;
  return (
    <motion.div
      className={`h-[1px] ${background}`}
      initial={{ width: 0 }}
      animate={{ width: animate ? "100%" : 0 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default Underline;
