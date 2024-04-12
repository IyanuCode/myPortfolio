import { motion } from "framer-motion";
import Bulb from "../../components/Bulb";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 md:mt-20 xl:mt-12"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 mx-w-[400px] mx-auto lg:mx-0"
            >
              Here are some cool and beautiful services I render has a web
              developer, making use of technologies and innovative designs to
              breathe life into your online presence.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down, 0.6")}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[59%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <motion.div
         variants={fadeIn("up", 0.5)}
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

export default Services;
