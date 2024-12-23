import React from "react";
import aboutvideo from "../../assets/images/about.mp4";
import EducationList from "./EducationList";
import { delay, motion } from "framer-motion";
function About() {
  motion;
  return (
    <motion.div
      id="about"
      // data-scroll
      // data-scroll-section
      // data-scroll-speed="-.05"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full md:h-fit h-[390vw]"
    >
        {" "}
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='font-["Neue Montreal"] text-6xl leading-none  font-semibold uppercase  tracking-tighter'
        >
          About Me
        </motion.h1>
        {/* <div className="video ">
              <video
                loop="true"
                autoplay="autoplay"
                muted
                className="md:w-[800px]"
              >
                <source
                  src={aboutvideo}
                  type="video/mp4"
                  className="  "
                ></source>
              </video>
            </div> */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-['Founders Grotesk']  tracking-tight capitalize font-medium  md:text-[12px] text-[2vw] md:px-5 px-5 pt-5 pb-20"
        >
          I did my Diploma and Bachelor's in Computer Engineering. Recently, I
          have completed a front-development course with ReactJs. With reactjs I
          learned to build dynamic web applications. I am also well-versed in
          HTML, CSS, Bootstrap, Tailwind CSS, which I utilise to create user
          friendly and visually appealing interfaces. My good foundation in
          JavaScript helps me to implement interactive features and enhanced
          user experience.
        </motion.div>
      
      <div className="font-['Neue Montreal'] capitalize basis-1/16 w-[full] h-[48vw] border-l-[1px] border-zinc-900  ">
        <div className="grid">
          {EducationList.map((item, index) => {
            return (
              <motion.div
                whileHover={{ backgroundColor: "#18181b" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.9 }}
                className={`flex justify-between px-5 py-5   md:h-[6.5vw] items-center border-t-[1px] border-zinc-900 ${
                  index === 0 && "border-t-[0px]"
                }`}
              >
                <div className="basis-1/4    font-['Neue Montreal']">
                  {item.Date}
                </div>
                <div className="basis-1/4    font-['Neue Montreal']">
                  {item.Type}
                </div>

                <div className="basis-1/2 font-['Neue Montreal']">
                  {item.Desceription}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default About;
