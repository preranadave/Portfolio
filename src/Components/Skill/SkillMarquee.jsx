import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import reactlogo from "../../assets/images/logo_dark.svg";
import csslogo from "../../assets/images/CSS3_logo_and_wordmark.png";
import bootstraplogo from "../../assets/images/bootstrap-5-1.svg";
import tailwindlogo from "../../assets/images/tailwind-css-2.svg";
import jslogo from "../../assets/images/logo-javascript.svg";
import htmllogo from "../../assets/images/html-1.svg";
function SkillMarquee() {
  const skills = [
    {
      name: "ReactJs",
      logo: reactlogo,
    },
    {
      name: "Javascript",
      logo: jslogo,
    },
    {
      name: "CSS",
      logo: csslogo,
    },
    {
      name: "Bootstrap",
      logo: bootstraplogo,
    },
    {
      name: "Tailwind CSS",
      logo: tailwindlogo,
    },
    {
      name: "HTML",
      logo: htmllogo,
    },
    {
      name: "ReactJs",
      logo: reactlogo,
    },
    {
      name: "Javascript",
      logo: jslogo,
    },
    {
      name: "CSS",
      logo: csslogo,
    },
    {
      name: "Bootstrap",
      logo: bootstraplogo,
    },
    {
      name: "Tailwind CSS",
      logo: tailwindlogo,
    },
    {
      name: "HTML",
      logo: htmllogo,
    },
    {
      name: "ReactJs",
      logo: reactlogo,
    },
    {
      name: "Javascript",
      logo: jslogo,
    },
    {
      name: "CSS",
      logo: csslogo,
    },
    {
      name: "Bootstrap",
      logo: bootstraplogo,
    },
    {
      name: "Tailwind CSS",
      logo: tailwindlogo,
    },
    {
      name: "HTML",
      logo: htmllogo,
    },
  ];
  return (
    <div className="md:w-full w-[100vw] pt-20 overflow-hidden">
      <div className="skills">
        {/* <h1 className="font-['Founders Grotesk'] mb-5 capitalize  md:text-[3vw] text-[3vw] md:leading-none leading-[8vw] md:-mt-12 -mt-5 md:ms-2  tracking-tighter font-light">
          Skills
        </h1> */}

        <motion.div
          // initial={{ x: "0" }}
          // animate={{ x: "-100%" }}
          // transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className=""
        >
          <motion.div
            initial={{ x: "0" }}
            whileInView={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
            className="flex "
          >
            {skills.map((item, index) => (
              // <h1 className="md:text-[8vw] text-[20vw] leading-none font-['Founders Grotesk'] font-bold px-2">{item}</h1>
              <div
                className={`me-5  px-5 flex items-center gap-2 justify-center   md:text-[1.5vw] text-[5vw] ${
                  index == 0 && ""
                }`}
              >
                <h2 className="md:w-40 w-[40vw]">{item.name}</h2>
                <img src={item.logo} width={25}></img>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default SkillMarquee;
