import React from "react";
import headerVideo from "../../assets/images/5680034-hd_1920_1080_24fps.mp4";

import simpsonwebsite from "../../assets/images/giphy(1).webp";
import resume from "../../assets/files/Prerana DaveUiDeveloperResume.pdf";

import { IoMdDownload } from "react-icons/io";
import { motion } from "framer-motion";

const NewLandigUI = () => {
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
      <section className="md:h-screen overflow-hidden">
        <div className="shape absolute md:w-[50rem] w-[20rem] rotate-[180deg] md:h-[30rem] h-[10rem] rounded-2xl top-0 right-0"></div>
        <div className="shape absolute md:w-[25rem] w-[10rem] rotate-[80deg] md:h-[25rem] h-[10rem] rounded-2xl bottom-20 left-0"></div>
        <section className="backdrop-blur-3xl md:w-full h-screen flex flex-col justify-center items-center leading-none ">
          <div className="px-5">
            <div className="overflow-hidden flex items-center">
              <motion.h1
                initial={{ y: "-120%" }}
                animate={{ y: "0" }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                className="font-['Founders Grotesk'] uppercase  md:text-[1vw] text-[2vw]  font-bold"
              >
                Hi, I'm <span className="">Prerana</span>
              </motion.h1>
            </div>

            <div className="flex  items-start">
              <div className="relative rounded-md overflow-hidden left-0 md:top-6 top-[0.5rem]">
                {" "}
                <motion.img
                  initial={{ x: "-120%", opacity: 0 }}
                  animate={{ x: "0", opacity: 1 }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  src={simpsonwebsite}
                  alt=""
                  className="md:h-[6vw] h-[9vw]"
                />
              </div>
              <div className="overflow-hidden px-2">
                <motion.h1
                  initial={{ x: "-120%", opacity: 0 }}
                  animate={{ x: "0", opacity: 1 }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="text-[13vw]  md:text-[8vw] font-['Founders Grotesk'] uppercase font-medium tracking-tighter "
                >
                  Front-End
                </motion.h1>
              </div>
            </div>

            <div className="overflow-hidden flex items-center">
              <motion.p
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: "0", opacity: 1 }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                className="text-5xl md:text-[5vw] font-['Founders Grotesk'] uppercase font-medium tracking-tighter"
              >
                Developer
              </motion.p>
              <div className="overflow-hidden md:w-[23vw] md:h-[4vw] w-[18vw] h-[8vw] relative md:top-0 top-1 sm:top-0 left-4 md:left-8 rounded-md">
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

          <div className="flex-col space-y-7 md:space-y-2 md:flex lg:flex-row justify-between items-center md:translate-y-52 translate-y-52  px-5">
            {/* {["(Scroll Down)",
              "Well qualified developer familiar with good range of programming utilities and languages like React JS, HTML, CSS, Bootstrap, JavaScript. Organised and dependable candidate adequate at managing multiple priorities and clients with positive attitude. Willingness to take an added responsibilities to meet team goals."
            ].map((item, index) => (
              <div className="overflow-hidden">
                <motion.div
                  className={`font-['Founders Grotesk'] uppercase font-medium  md:text-[12px] text-[2vw] ms-3  ${
                    index == 1 && "text-justify"
                  }`}
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: "0", opacity: 1 }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                >
                  {item}
                </motion.div>
              </div>
            ))} */}
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
                className="resume font-['Founders Grotesk'] uppercase font-medium leading-none  md:text-[12px] text-[2vw] px-2 py-2 rounded-3xl border-[1px] border-[#F1F1F1] w-36 text-center"
              >
                <span className="text-center ">Download Resume</span>
              </motion.div>
              <div className="w-6 h-6 px-1 py-1 rounded-full border-[1px] border-[#F1F1F1] ">
                <IoMdDownload size={15} />
              </div>
            </motion.div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default NewLandigUI;
