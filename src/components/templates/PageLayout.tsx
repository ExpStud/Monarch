import { FC, ReactNode, useState } from "react";
import {
  PageHead,
  Header,
  Footer,
  SplashScreen,
  ImageModal,
} from "@components";
import { enterAnimation, ViewContext } from "@constants";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  children: ReactNode;
  footer?: boolean;
  fixed?: boolean; //prevents scroll
  absolute?: boolean; //allows scroll
  headerType?: string;
  assets?: boolean[];
  header?: boolean;
  section?: number;
}

const PageLayout: FC<Props> = (props: Props) => {
  const {
    footer = true,
    fixed = false,
    absolute = false,
    headerType = "",
    children,
    header = true,
    section = -1,
  } = props;

  //context for splash screen & modals
  const [showView, setShowView] = useState<boolean>(false);
  const [ImageModalId, setImageModalId] = useState<number>(-1);
  const value = {
    showView,
    setShowView,
    ImageModalId,
    setImageModalId,
  };

  return (
    <>
      <div
        className={`flex flex-col min-h-screen h-full justify-between overflow-x-hidden bg-mon-cream ${
          fixed ? "fixed inset-0" : absolute ? "absolute inset-0" : "relative"
        }`}
      >
        <PageHead
          title="Monarch"
          description="Accelerating Equity in Global Sports"
          url="https://addurl.xyz" // no backslash at the end
          twitter="Monarch_Coll"
        />
        <ViewContext.Provider value={value}>
          {/* header */}
          {header && <Header type={headerType} section={section} />}

          {/* body */}
          <motion.main
            className={`flex flex-col h-full w-full overflow-hidden`}
            {...enterAnimation}
          >
            {children}
          </motion.main>

          {/* footer */}
          {footer && <Footer />}

          {/* modals */}
          {/* {assets && <SplashScreen assets={assets} />} */}
          <AnimatePresence mode="wait">
            {ImageModalId !== -1 && (
              <ImageModal
                key="gallery-modal"
                imageId={ImageModalId}
                setImageId={setImageModalId}
              />
            )}
          </AnimatePresence>
        </ViewContext.Provider>
      </div>
    </>
  );
};
export default PageLayout;
