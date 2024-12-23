import { motion } from "framer-motion";
import React from "react";
// import { Link } from "react-router-dom";

import { HashLink as Link } from 'react-router-hash-link';
function Navbar() {

  return (
    <div>
      <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: "0" }}
      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.2 }}  className="fixed z-[1000] md:w-full w-[100vw] px-2 pe-4 py-2 text-[#EDEDED] backdrop-blur-lg flex justify-between items-center  font-['Neue Montreal'] font-thin">
        <div className="logo font-bold text-3xl flex">
          {/* <span>P</span>
          <div className="mt-4 -translate-x-3">D</div> */}
           <motion.h1
              
              className="font-['Founders Grotesk'] uppercase  md:text-[1vw] text-[2vw] ms-3 font-bold"
            >
              Prerana Dave
            </motion.h1>
        </div>
        <div className="links flex md:space-x-20 space-x-10 items-center ">
          {["About", "Projects","Contact"].map(
            (item, index) => (
              <Link smooth
                to={`#${item}`}
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', inline: 'center' })}
                className={`md:text-[16px] text-[2vw] font-normal tracking-tight capitalize ${
                  index === 3 &&
                  "ml-28 border-[#F1F1F1] border-[1px]  py-1 px-3 rounded-3xl "
                }`}
              >
                {item}
              </Link>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar;
