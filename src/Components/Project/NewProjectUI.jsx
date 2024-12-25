import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import gsap from "gsap";
import React, { useRef, useState } from "react";
const NewProjectUI = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef(null);
  const imageRef = useRef(null);
  //   var xprev = 0;
  //   var rotdiff = 0;
  //   var rotatevalue = 0;
  const handleMouseMove = (e) => {
    const rect = elementRef.current.getBoundingClientRect();
    const mouseX = e.pageX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Clamp values to prevent excessive movement
    const clampX = Math.min(Math.max(mouseX, 0), rect.width);
    const clampY = Math.min(Math.max(mouseY, 0), rect.height);

    // Calculate rotation based on mouse position within the div
    const rotationX = (clampX / rect.width - 0.5) * 30; // Rotation on X-axis

    const rotationY = (clampY / rect.height - 0.5) * 30; // Rotation on Y-axis

    gsap.to(imageRef.current, {
      autoAlpha: 1,
      ease: [0.76, 0, 0.24, 1],
      x: mouseX - 600, // Offset image position from cursor
      y: mouseY, // Offset image position from cursor
      // rotationX: rotationX, // Rotate based on mouse movement
      // rotationY: rotationY, // Rotate based on mouse movement
      rotate: rotationX,
    });

    // xprev = e.clientX;
  };

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    const rect = elementRef.current.getBoundingClientRect();
    const mouseX = e.pageX - rect.left;
    const mouseY = e.clientY - rect.top;

    setMousePosition({ x: mouseX - 200, y: mouseY - 100 });
    gsap.to(imageRef.current, {
      opacity: 1,
      duration: 2,
      scale: 2,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e) => {
    setIsHovered(false);
    gsap.to(imageRef.current, {
      opacity: 0,
      duration: 2,
      scale: 0,
    });
  };
  return (
    <div >
      <motion.div
        initial={{ opacity: 0, backgroundColor: "#0B192C" }}
        whileInView={{ opacity: 1, backgroundColor: "#171717" }}
        transition={{ ease: [0.83, 0, 0.17, 1], duration: 1, delay: 0.5 }}
        className="h-fit py-10"
      >
        <div id="second" className="w-full">
          <div className="element w-full md:h-[15vw] h-[80vw]  relative border-t-[1px] px-[3.5vw] md:flex flex flex-col items-center justify-between border-zinc-900">
            {isHovered && (
              <img
                src={props.ProjectImg}
                className="project-image"
                alt=""
                style={{
                  pointerEvents: "none",

                  height: "80%",
                  zIndex: "999",
                  position: "absolute",
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                  transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                ref={imageRef}
              />
            )}
            <div
              className="flex md:flex-row justify-center gap-4 flex-col h-full items-center"
              ref={elementRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <h1 className="uppercase font-['Neue Montreal'] text-[4vw] md:text-[2vw] md:w-[30%]">
                {props.ProjectTitle}
              </h1>

              <p className="w-[90%] md:w-[60%] font-['Neue Montreal'] md:text-[1vw] text-[3vw] text-justify mx-10">
                {props.ProjectDesceription}
              </p>
            </div>

            <motion.button
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.8 }}
              className="relative overflow-hidden group font-['Founders Grotesk']  uppercase font-medium leading-none  md:text-[12px] text-[2vw] px-2 py-4 rounded-3xl border-[1px] border-[#F1F1F1] w-36 text-center"
            >
              <a
                href={props.URL}
                target="blank"
                className="text-center font-['Neue Montreal'] "
              >
                <span className="absolute inset-0 flex items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-full">
                  GitHub
                </span>
                {/* Second Text */}
                <span className="absolute inset-0 flex items-center justify-center transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  GitHub
                </span>
              </a>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NewProjectUI;
