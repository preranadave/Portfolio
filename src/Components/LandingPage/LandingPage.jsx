import React from "react";
import headerVideo from "../../assets/images/header.mp4";
import resume from "../../assets/files/Prerana DaveUiDeveloperResume.pdf";

import { IoMdDownload } from "react-icons/io";
import { motion } from "framer-motion";
function LandingPage() {
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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-zinc-900 text-[#F1F1F1]  md:w-full w-98% md:h-screen h-[680px] pt-2  mx-auto"
    >
      <div className="flex justify-center">
        <div className="title mt-32 md:mt-52 md: p-2 absolute">
          <div className="overflow-hidden">
            {/* <motion.h1
              initial={{ y: "-90%" }}
              animate={{ y: "0" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
              className="font-['Founders Grotesk'] uppercase  md:text-[1vw] text-[2vw] ms-3 font-bold"
            >
              Prerana Dave
            </motion.h1> */}
          </div>
          <div className="overflow-hidden ">
            <motion.h1
              initial={{ x: "20%" }}
              animate={{ x: "0" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
              className="font-['Founders Grotesk'] uppercase text-9xl md:text-[11vw] text-[28vw] font-bold"
            >
              UI
            </motion.h1>
          </div>
          <div className="overflow-hidden ">
            <motion.h1
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
              className="font-['Founders Grotesk'] pe-4 mt-5  uppercase text-7xl md:text-[13vw] text-[20vw] md:leading-none leading-[16vw] tracking-tighter font-bold"
            >
              Devloper
            </motion.h1>
          </div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            className="video rounded-2xl mt-32 md:mt-[60px]  md:ms-[143px] ms-[120px]"
          >
            <video
              loop="true"
              autoplay="autoplay"
              muted
              className="rounded-xl md:w-[700px] w-[260px] brightness-75"
            >
              <source
                src={headerVideo}
                type="video/mp4"
                className="rounded-xl "
              ></source>
            </video>
          </motion.div>
        </div>
      </div>
      <div className="border-t-[1px] border-zinc-900 md:mt-48 mt-24"></div>

      <div className="flex-col space-y-7 md:space-y-2 md:flex lg:flex-row justify-between items-center md:mt-1 mt-4 px-5">
        {[
          "(Scroll Down)",
          "Well qualified developer familiar with good range of programming utilities and languages like React JS, HTML, CSS, Bootstrap, JavaScript. Organised and dependable candidate adequate at managing multiple priorities and clients with positive attitude. Willingness to take an added responsibilities to meet team goals.",
        ].map((item, index) => (
          <div className="overflow-hidden">
            <motion.div
              className={`font-['Founders Grotesk'] uppercase font-medium  md:text-[12px] text-[2vw] ms-3  ${
                index == 1 && "md:w-[620px] md:-translate-x-28"
              }`}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "0", opacity: 1 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            >
              {item}
            </motion.div>
          </div>
        ))}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
          className="flex items-center space-x-2 mx-2 cursor-pointer group-[]:"
          onClick={handleDownload}
        >
          <motion.div
          
            whileHover={{ backgroundColor: "#18181b", color: "#e7e5e4" }}
            transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.3 }}
            className="resume font-['Founders Grotesk'] uppercase font-medium leading-none  md:text-[12px] text-[2vw] px-2 py-2 rounded-3xl border-[1px] border-[#F1F1F1] w-36 text-center"
          >
            <span className="text-center ">Download Resume</span>
          </motion.div>
          <div className="w-8 h-8 px-[5px] py-1 rounded-full border-[1px] border-[#F1F1F1] ">
            <IoMdDownload size={20} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default LandingPage;
