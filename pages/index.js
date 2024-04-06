import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import { useState } from "react";
const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto lg:max-w-7xl">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-5xl font-extrabold leading-[1.3] uppercase z-10"
          >
            <span className="text-accent lg:text-white"> Crafting Digital</span>{" "}
            <span className="opacity-45">Dreams</span> <br />{" "}
            <span className="text-blue-600 lg:mx-44 lg:text-white">Where</span>{" "}
            <br />
            <span className="lg:text-accent"> Code Meets Creativity</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0  "
          >
            Step into our digital haven, where each interaction orchestrates a
            harmonious blend of innovation and grace, crafting tomorrow's
            visions with every line of code. <br />
            <q className="text-red-400 font-semibold">
              Coding is the closest thing we have to magic in the digital age.
            </q>
            - <span className="text-blue-500 font-bold">Bill Gates</span>
          </motion.p>
          {/* btn */}
        </div>
      </div>

      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}

        <div>
          <Image
            src="/home2.png"
            width={300}
            height={200}
            alt="bgImage"
            className="animate-spin-slow mix-blend-color-dodge absolute right-20 top-40"
          />
        </div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[537px] max-h-[550px] absolute -bottom-32 lg:bottom-0 lg:right-[18%] "
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
