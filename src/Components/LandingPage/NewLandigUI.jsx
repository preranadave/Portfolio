import React, { useRef, useState } from "react";
import headerVideo from "../../assets/images/about2.mp4";

import simpsonwebsite from "../../assets/images/giphy(1).webp";
import resume from "../../assets/files/Prerana DaveUiDeveloperResume.pdf";

import { IoMdDownload } from "react-icons/io";
import { motion } from "framer-motion";
import gsap from "gsap";
import { div } from "framer-motion/client";
import { useNavigate } from "react-router-dom";

const NewLandigUI = (props) => {
  //console.log(props)
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef(null);
  const imageRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    props.showMousePointer(false);
    const rect = elementRef.current.getBoundingClientRect();
    const mouseX = e.pageX - rect.left;
    const mouseY = e.clientY - rect.top;

    setMousePosition({ x: mouseX - 5, y: mouseY - 50 });
  };

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    props.showMousePointer(false);
  };

  const handleMouseLeave = (e) => {
    props.showMousePointer(true);
    setIsHovered(false);
    // gsap.to(imageRef.current, {
    //   opacity: 0,
    //   duration: 2,
    //   scale: 0,
    // });
  };
  const handleDownload = () => {
    // Specify the file URL
    const fileUrl = resume;

    // Create a temporary anchor element to trigger download
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = "Prerana_Dave_UI_Developer.pdf"; // Optional: specify the filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <div>
      <section className="md:h-screen h-[120vw]  overflow-hidden">
        <div className="shape absolute md:w-[50rem] w-[20rem] rotate-[180deg] md:h-[30rem] h-[10rem] rounded-2xl top-0 right-0"></div>
        <div className="shape absolute md:w-[25rem] w-[10rem] rotate-[80deg] md:h-[25rem] h-[10rem] rounded-2xl md:bottom-20 bottom-[100vw] left-0"></div>
        <section className="backdrop-blur-3xl md:w-full h-screen flex flex-col md:justify-center justify-start   items-center leading-none ">
          <div className="px-5 relative md:top-0 top-24">
            <div className="flex items-center gap-2">
              <div
                className={`absolute z-[888] pointer-events-none ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                  transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <button className="bg-yellow-200 text-black px-4 shadow-2xl py-3 rounded-full">
                  View Github
                </button>
              </div>
              <a
                href="https://github.com/preranadave"
                className=""
                target="_blank"
              >
                <div
                  ref={elementRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  className="relative rounded-md overflow-hidden cursor-pointer "
                >
                  <motion.img
                    initial={{ x: "-120%", opacity: 0 }}
                    animate={{ x: "0", opacity: 1 }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    src={simpsonwebsite}
                    alt=""
                    className="md:h-[8.3vw] h-[37vw] "
                  />
                </div>
              </a>
              <div className="md:flex-col justify-center">
                <div className="overflow-hidden  translate-x-2 translate-y-2 ">
                  <motion.h1
                    initial={{ y: "-120%" }}
                    animate={{ y: "0" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="font-['Founders Grotesk'] uppercase  md:text-[1vw] text-[4vw]  font-bold"
                  >
                    Hi, I'm <span className="">Prerana</span>
                  </motion.h1>
                </div>
                <div className="overflow-hidden pe-2">
                  <motion.h1
                    initial={{ x: "-120%", opacity: 0 }}
                    animate={{ x: "0", opacity: 1 }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className=" font-['Founders Grotesk'] uppercase font-medium tracking-tighter "
                  >
                    <span className="md:block hidden text-[17vw]  md:text-[8vw] tracking-[-0.1em]">
                      Front-End
                    </span>

                    <span className="md:hidden block text-[38vw] md:text-[8vw] tracking-tighter">
                      UI
                    </span>
                  </motion.h1>
                </div>
              </div>
            </div>
            {/* 
            <div className="md:flex lg:flex-row relative  md:items-start   sm:flex-col justify-center md:space-y-0 space-y-5  ">
              {" "}
            </div> */}

            <div className="overflow-hidden flex items-center">
              <motion.p
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: "0", opacity: 1 }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                className="text-5xl md:text-[5vw] font-['Founders Grotesk'] uppercase font-medium tracking-tighter"
              >
                Developer
              </motion.p>
              <div className="overflow-hidden md:w-[23vw] md:h-[4vw] w-[22vw] h-[9vw] relative md:top-0 top-1 sm:top-0 left-2 md:left-8 rounded-md">
                <motion.div
                  initial={{ y: "-100%", opacity: 0 }}
                  animate={{ y: "0", opacity: 1 }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="  "
                >
                  <video
                    loop="true"
                    autoplay="autoplay"
                    muted
                    className="brightness-75"
                  >
                    <source
                      src={headerVideo}
                      type="video/mp4"
                      className=""
                    ></source>
                  </video>
                </motion.div>
              </div>
            </div>
            {/* <p className="font-['Founders Grotesk'] uppercase font-medium md:w-[50%] w-[90%] text-justify md:text-right md:mt-0 mt-5 absolute md:right-4 md:top-96  md:text-[0.8vw] text-[2vw]">
              Well qualified developer familiar with good range of programming
              utilities and languages like React JS, HTML, CSS, Bootstrap,
              JavaScript. Organised and dependable candidate adequate at
              managing multiple priorities and clients with positive attitude.
              Willingness to take an added responsibilities to meet team goals.
            </p> */}
          </div>

          <div className="flex-col group space-y-7 md:space-y-2 md:flex lg:flex-row justify-between items-center md:translate-y-52 translate-y-52  px-5">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
              className="flex items-center space-x-2 mx-2 cursor-pointer "
              onClick={handleDownload}
            >
              <motion.div
                whileHover={{ backgroundColor: "#18181b", color: "#e7e5e4" }}
                transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.3 }}
                className="resume relative overflow-hidden  font-['Founders Grotesk'] uppercase font-medium leading-none  md:text-[12px] text-[2vw] px-2 py-4 rounded-3xl border-[1px] border-[#F1F1F1] w-36 text-center"
              >
                <span className="absolute inset-0 flex items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-full">
                  Reesume
                </span>
                {/* Second Text */}
                <span className="absolute inset-0 flex items-center justify-center transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  Download
                </span>
                {/* <span className="text-center ">Download Resume</span> */}
              </motion.div>
              <div className="relative overflow-hidden  w-8 h-8 px-1 py-1 rounded-full border-[1px] border-[#F1F1F1] ">
                <span className="absolute inset-0 flex items-center justify-center transform transition-transform duration-300 group-hover:translate-y-full">
                  <IoMdDownload size={16} />
                </span>
                {/* Second Text */}
                <span className="absolute inset-0 flex items-center justify-center transform -translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <IoMdDownload size={16} />
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default NewLandigUI;
