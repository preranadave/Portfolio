import React from "react";
import ContactForm from "./Contact/ContactForm";
import { motion } from "framer-motion";
import hand from "../assets/images/tumblr_mr2w11PxSc1rmzrqmo1_500.webp";

function Footer() {
  return (
    <div
      className="w-full relative  h-screen grid grid-cols-1 md:flex bg-[#0D0D0D] py-14 px-10"
      id={"Contact"}
    >
      <motion.img
        initial={{ y: "200%",opacity:0 }}
        whileInView={{ y: "0",opacity:1 }}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
        src={hand}
        className="md:h-28 h-14 rounded-md absolute md:left-[28vw] md:top-[6vw] left-[54vw] top-[18vw]"
      />

      <div
        className="md:w-1/2 h-full "
        data-scroll
        data-scroll-section
        data-scroll-speed=".8"
      >
        <div className="md:flex-col md:items-start items-center h-full">
          <div className="overflow-y-hidden md:w-[25vw]">
            <motion.h1
              initial={{ y: "-99%" }}
              whileInView={{ y: "0" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
              className="font-['Founders Grotesk']  uppercase tracking-tighter  leading-none md:text-[11vw] text-[20vw] font-semibold"
            >
              Let's
            </motion.h1>
          </div>
          <div className="overflow-y-hidden">
            <motion.h1
              initial={{ y: "90%" }}
              whileInView={{ y: "0" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
              className="font-['Founders Grotesk'] uppercase tracking-tighter  leading-none md:text-[9.5vw] text-[17vw] font-semibold"
            >
              Connect!
            </motion.h1>
          </div>
          {/* <ul className="list-style-none flex-col justify-center px-10 space-y-2 text-xl font-light ">
          <li className="font-['Neue Montreal'] ">
            <a href="/">LinkedIn</a>
          </li>
          <li className="font-['Neue Montreal'] ">
            <a href="/">GitHub</a>
          </li>
          <li className="font-['Neue Montreal'] ">
            <a href="/">Email</a>
          </li>
        </ul> */}
        </div>
      </div>
      <div
        className="md:absolute md:bottom-12 md:right-5  mt-5"
        data-scroll
        data-scroll-section
        data-scroll-speed=".1"
      >
        <ul className="list-style-none flex-col justify-center px-10 space-y-5 text-2xl  font-light ">
          <div className="overflow-y-hidden">
            <motion.li
              className="font-['Neue Montreal'] "
              initial={{ y: "90%" }}
              whileInView={{ y: "0" }}
              transition={{
                ease: [0.76, 0, 0.24, 1],
                duration: 0.8,
                delay: 0.5,
              }}
            >
              <a
                href="https://www.linkedin.com/in/prerna-dave-b76b66179"
                target="blank"
              >
                LinkedIn
              </a>
            </motion.li>
          </div>
          <div className="overflow-y-hidden">
            <motion.li
              className="font-['Neue Montreal'] "
              initial={{ y: "90%" }}
              whileInView={{ y: "0" }}
              transition={{
                ease: [0.76, 0, 0.24, 1],
                duration: 0.8,
                delay: 0.5,
              }}
            >
              <a href="https://github.com/preranadave" target="blank">
                GitHub
              </a>
            </motion.li>
          </div>
          <div className="overflow-y-hidden">
            <motion.li
              className="font-['Neue Montreal'] "
              initial={{ y: "90%" }}
              whileInView={{ y: "0" }}
              transition={{
                ease: [0.76, 0, 0.24, 1],
                duration: 0.8,
                delay: 0.7,
              }}
            >
              <a
                className="cursor-pointer"
                onClick={(e) => {
                  window.location.href = "mailto:psdave.3399@email.com";
                }}
                target="blank"
              >
                Email
              </a>
            </motion.li>
          </div>
        </ul>
        {/* <ContactForm></ContactForm> */}
      </div>
    </div>
  );
}

export default Footer;
