import { backInOut, motion } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap/all";
function ProjectCard(props) {
  const [ishovering, sethovering] = useState();
  
  return (
    <div className="cards w-full  px-10 py-6 overflow-hidden">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-zinc-900 rounded-full"></div>
        <h1 className="font-['Founders Grotesk']  text-[#f5f5c8]">{props.ProjectTitle}</h1>
      </div>
      <motion.div
      
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      
        whileHover="hover"
        variants={{
          hover: {
            scale: 1.05,
          },
        }}
        transition={{ duration: 1, ease: backInOut }}
        onMouseEnter={() => sethovering(true)}
        onMouseLeave={() => sethovering(false)}
      >
        <motion.div className="card-container h-[45vh]  md:h-[75vh]  mt-5 relative card w-full ">
          <h1 className="absolute flex justify-center top-[40%] left-[30%] items-center md:text-[3vw] text-[10vw] font-['Founders Grotesk'] capitalize font-bold overflow-hidden">
            {props.ProjectTitle.split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={ishovering ? { y: "0" } : { y: "100%" }}
                transition={{
                  ease: [0.22, 1, 0.36, 1].easeInOut,
                  delay: index * 0.06,
                }}
                className="inlline-block text-[#f5f5c8] translate-y-full"
              > {item}
              </motion.span>
            ))}
          </h1>

          <div
            className={`w-full h-full bg-cover rounded-3xl `}
            style={{ backgroundImage: `url(${props.ProjectImg})`}}
          ></div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ProjectCard;
// initial={{scale:0.85}}
// variants={{
//   hover: {
//     scale: 1,
//   },
// }}
// transition={{ duration: 1, ease: backInOut }}
