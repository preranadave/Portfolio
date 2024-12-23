import React from "react";
import PortfolioItems from "./ProjetcItems";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import NewProjectUI from "./NewProjectUI";

function Projects() {
  return (
    <div className="w-full " id={"Projects"}>
      <div
        className="w-full border-zinc-700 "
        data-scroll
        data-scroll-section
        data-scroll-speed=".1"
      >
        <motion.h1
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: 1 }}
          className='font-["Founders Grotesk"] mt-16 md:w-[10vw] w-[30vw] text-md mb-5 text-[#0D0D0D] bg-[#EDEDED] px-4  font-bold uppercase py-5 tracking-tighter'
        >
          Projects
        </motion.h1>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2">
        {PortfolioItems.map((item, index) => (
          <ProjectCard key={item.id} {...item}></ProjectCard>
        ))}
      </div> */}
      {PortfolioItems.map((item, index) => (
        <NewProjectUI key={item.id} {...item} index={index}></NewProjectUI>
      ))}
    </div>
  );
}

export default Projects;
