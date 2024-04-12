import { motion } from "framer-motion";
import Bulb from "../../components/Bulb";
import { fadeIn } from "../../variants";
import WorkSlider from "../../components/WorkSlider";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 mx-w-[400px] mx-auto lg:mx-0"
            >
              "These exhibitions showcase my diverse and captivating work, encompassing both offline endeavors and online projects, all conveniently accessible through my GitHub repository.".
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[60%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <motion.div
         variants={fadeIn("right", 0.5)}
         initial="hidden"
         animate="show"
         exit="hidden"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full absolute left-0 bottom-0 mix-blend-color-dodge"

      >
        <Bulb />
      </motion.div>
    </div>
  );
};

export default Work;
