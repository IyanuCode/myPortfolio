import { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";
// counter

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Web Design ",
        stage: "2021 - 2024",
      },
      {
        title: "Adobe Design ",
        stage: "2022 - 2024",
      },
      {
        title: "Photoshop ",
        stage: "2022 - 2024",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer ",
        stage: "2022 - 2024",
      },
      {
        title: "Web Developer ",
        stage: "2022 - 2024",
      },
      {
        title: "Fitted I C T solution - Intern",
        stage: "2015 - 2020",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - Parach Academy",
        stage: "2021 - 2024",
      },
      {
        title: "Computer Science Btech - OAUSTECH",
        stage: "2015 -2020",
      },
      {
        title: "Certified Computer Engineer - Fiited I C T Solution Academy",
        stage: "2015 - 2020",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-16   xl:py-80 md:py-16 text-center xl:text-left ">
      {/* avatar img */}
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-60 right-24 mix-blend-overlay"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          {/* <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating<span className="text-accent"> stories</span> birth
            magnificient designs
          </motion.h2> */}
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 "
          >
            <span className="text-2xl">👋</span> Hello! my name is as stated
            above👆, a seasoned developer specializing in more than 10 years in
            tech and less than 2 years of web and mobile app development.
            <br />
            <span className="text-2xl">💻</span> I am proficient in full stack
            development, specializing in Next.js, Node.js, Express, and MongoDB,
            among other dynamic tools. However, my expertise is not confined to
            these technologies—I am open to learning and incorporating new
            languages and frameworks. I am dedicated to crafting scalable
            solutions and prioritize continuous learning to remain at the
            forefront of the field. <br />
            <span className="text-2xl">🔧</span> In addition to my technical
            skills, I'm a strong advocate for teamwork and collaboration. <br />
            <span className="text-2xl">💡</span> Beyond coding, I enjoy outdoor
            adventures, driving, travelling, gadget, reading, and tech
            tinkering. <br />
            📫 Let's connect! Either you want us to collaborate or to just know
            each other. I'm always open to new opportunities and exciting
            challenges.
          </motion.p>
          {/* counters
            I comment out this section because i will need them in later time
          */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
           
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 ">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {" "}
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
