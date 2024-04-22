import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon, IconBar, NavItem } from "@components";
import Link from "next/link";
import { useWindowSize } from "@hooks";
import { fadeVariants } from "@constants";
import { useOutsideAlerter } from "@hooks";

interface Props {
  toggleMenu: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  navigate: (pageId: number) => void;
  currentPage: "team" | "news" | "home";
}

const Menu: FC<Props> = (props: Props) => {
  const { toggleMenu, open, navigate, currentPage } = props;

  const [winWidth] = useWindowSize();
  const ref = useRef(null);

  useOutsideAlerter(ref, () => toggleMenu(false));
  //stop page scroll (when modal or menu open)
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {open && (
        <motion.aside
          key="main-menu"
          initial={{ width: 0, opacity: 1 }}
          animate={{ width: winWidth, opacity: 1 }}
          exit={{
            width: 0,
            transition: { duration: 0.5 },
            opacity: 1,
          }}
          transition={{ duration: 0.7 }}
          className="fixed top-0 right-0 z-50 max-w-screen h-screen overflow-y-hidden bg-custom-black"
          onClick={() => toggleMenu(false)}
          ref={ref}
        >
          <div
            key="close-icon"
            onClick={() => toggleMenu(false)}
            className="cursor-pointer absolute right-4 top-3"
          >
            <CloseIcon />
          </div>
          <motion.div
            className={`px-4 sm:px-6 lg:px-10 py-6 h-screen relative`}
            variants={fadeVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col items-center text-2xl mt-32 gap-10 h-full w-full">
              <div
                onClick={() => navigate(2)}
                className={
                  currentPage === "team" ? "text-mon-cream" : "text-mon-purple"
                }
              >
                MEET THE TEAM
              </div>
              <div
                onClick={() => navigate(3)}
                className={
                  currentPage === "news" ? "text-mon-cream" : "text-mon-purple"
                }
              >
                NEWS
              </div>
              <Link
                target="_blank"
                href="https://monarch.arkpes.com/login"
                className="text-mon-purple"
              >
                INVESTOR PORTAL
              </Link>
            </div>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Menu;
