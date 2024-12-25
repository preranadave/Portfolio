import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import EducationList from "./EducationList";
import gsap from "gsap";

import aboutvideo from "../../assets/images/about2.mp4";
const NewAboutUI = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current.querySelectorAll("span");

    const handleScroll = () => {
      words.forEach((word, index) => {
        const rect = word.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          gsap.to(word, {
            opacity: 1,
            x: 0,
            duration: 1, // Delay each word's reveal
            delay:0.8
          });
        } else {
          gsap.to(word, {
            opacity: 0,
            x: 50,
            duration: 1,
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div id={"About"}>
    <div className="h-fit" >
      <div className="md:flex flex-col ">
        <motion.h1
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: 1 }}
          className='font-["Founders Grotesk"] mt-16 md:w-[10vw] w-[30vw] text-md text-[#0D0D0D] bg-[#EDEDED] px-4  font-bold uppercase py-5 tracking-tighter'
        >
          About Me
        </motion.h1>

        <div
          ref={textRef}
          className="flex flex-wrap items-center mb-5 px-5 md:px-0 mt-5"
        >
          {/* <div className="video ">
            <video loop="true" autoplay="autoplay" muted className="w-20 translate-x-5 translate-y-11">
              <source src={aboutvideo} type="video/mp4" className=" "></source>
            </video>
          </div> */}
          <p className="md:columns-2 font-['Neue Montreal'] md:text-4xl text-[5vw] text-justify indent-2 ">
            {`I hold a Diploma and a Bachelor's degree in Computer Engineering. Recently, I completed a front-end development course focused on React.js, equipping me with the skills to build dynamic web applications. I am proficient in HTML, CSS, Bootstrap, and Tailwind CSS, which I utilize to create user-friendly and visually appealing interfaces. My solid foundation in JavaScript enables me to implement interactive features that enhance user experience.`
              .split(" ")
              .map((word, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0 transform  translate-x-12"
                >
                  {word}{" "}
                </span>
              ))}
          </p>
        </div>
      </div>
      <div className="grid px-5">
        {EducationList.map((item, index) => {
          return (
            <motion.div
              whileHover={{ backgroundColor: "#18181b" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.9 }}
              className={`grid md:grid-cols-2 grid-cols-1  px-5 py-5 mt-5   md:h-[6.5vw] items-center border-t-[1px] border-zinc-900 ${
                index === 0 && "border-t-[0px]"
              }`}
            >
              {" "}
              {/* <div className="basis-1/4    font-['Neue Montreal']">
                {item.Date}
              </div> */}
              {/* <div className="basis-1/4    font-['Neue Montreal']">
                {item.Date}
              </div> */}
              <div className="   font-['Neue Montreal'] font-semibold">
                {item.Type}
              </div>
              <div className="md:flex-row flex flex-col-reverse gap-3 space-y-2  md:justify-between md:items-center font-['Neue Montreal']">
                <div className="md:w-[60%] font-['Neue Montreal']">{item.Desceription}</div>
                <div> {item.Date}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default NewAboutUI;
