import React from "react";
import ContactForm from "../Contact/ContactForm";
import { motion } from "framer-motion";
import hand from "../../assets/images/tumblr_mr2w11PxSc1rmzrqmo1_500.webp";

function Footer() {
  return (
    <div
      className="w-full relative  h-screen grid grid-cols-1 md:flex bg-[#0D0D0D] py-14 px-10"
      id={"Contact"}
    >
      <div className="overflow-hidden hidden md:block  md:h-28 md:w-[16.2rem] w-[7rem] rounded-md absolute md:left-[28vw] md:top-[6vw] left-[14rem] top-[18vw]">
        <motion.div
          initial={{ y: "-99%" }}
          whileInView={{ y: "0" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
          className=""
        >
          <img src={hand} className="" />
        </motion.div>
      </div>
      <div
        className="md:w-1/2 h-full "

      >
        <div className="md:flex-col md:items-start items-center h-full">
          <div className="overflow-y-hidden md:w-[25vw] px-1">
            <motion.h1
              initial={{ y: "-99%" }}
              whileInView={{ y: "0" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
              className="font-['Founders Grotesk']  uppercase tracking-tighter  leading-none md:text-[11vw] text-[35vw] font-semibold"
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
          <div className="overflow-hidden  md:hidden translate-y-4  rounded-md ">
            <motion.div
              initial={{ y: "-99%" }}
              whileInView={{ y: "0" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
              className=""
            >
              <img src={hand} className="" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* <motion.div
        initial={{ rotate: "0" }}
        animate={{ rotate: "360deg" }}
        transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
        className="flex "
      >
        <svg
          className="coolshapes star-4 "
          height="200"
          width="200"
          fill="none"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#cs_clip_1_star-4)">
            <mask
              height="201"
              id="cs_mask_1_star-4"
              style={{ maskType: "alpha" }}
              width="200"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
            >
              <path
                d="M15.535 188.281c40.654-30.669 60.98-46.003 84.465-46.003 23.485 0 43.812 15.334 84.466 46.003L200 200l-11.719-15.534c-30.669-40.654-46.003-60.981-46.003-84.466 0-23.484 15.334-43.811 46.003-84.465L200 0l-15.534 11.72C143.812 42.388 123.485 57.722 100 57.722c-23.484 0-43.811-15.334-84.465-46.003L0 0l11.72 15.535C42.387 56.19 57.721 76.515 57.721 100c0 23.485-15.334 43.812-46.002 84.465L0 200l15.535-11.719z"
                fill="#fff"
              />
            </mask>
            <g mask="url(#cs_mask_1_star-4)">
              <path d="M200 0H0v200h200V0z" fill="#fff" />
              <path d="M200 0H0v200h200V0z" fill="#0E6FFF" />
              <g filter="url(#filter0_f_748_4239)">
                <ellipse cx="100" cy="130" fill="#FFD749" rx="82" ry="43" />
                <ellipse cx="41" cy="167" fill="#F2371F" rx="82" ry="43" />
              </g>
            </g>
          </g>
          <g style={{ mixBlendMode: "overlay" }} mask="url(#cs_mask_1_star-4)">
            <path
              d="M200 0H0v200h200V0z"
              fill="gray"
              stroke="transparent"
              filter="url(#cs_noise_1_star-4)"
            />
          </g>
          <defs>
            <filter
              height="243"
              id="filter0_f_748_4239"
              width="343"
              x="-101"
              y="27"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood result="BackgroundImageFix" floodOpacity="0" />
              <feBlend
                result="shape"
                in="SourceGraphic"
                in2="BackgroundImageFix"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_748_4239"
                stdDeviation="30"
              />
            </filter>
            <clipPath id="cs_clip_1_star-4">
              <path d="M0 0H200V200H0z" fill="#fff" />
            </clipPath>
          </defs>
          <defs>
            <filter
              height="100%"
              id="cs_noise_1_star-4"
              width="100%"
              x="0%"
              y="0%"
              filterUnits="objectBoundingBox"
            >
              <feBlend result="out3" in="SourceGraphic" in2="out2" />
            </filter>
          </defs>
        </svg>
      </motion.div> */}

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
