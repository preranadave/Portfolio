import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";

import LandingPage from "./Components/LandingPage/LandingPage";
import SkillMarquee from "./Components/Skill/SkillMarquee";
import { motion } from "framer-motion";
import About from "./Components/About/About";
import Projects from "./Components/Project/Projects";
import Footer from "./Components/Footer/Footer";
import gsap from "gsap";
import NewAboutUI from "./Components/About/NewAboutUI";
import NewLandigUI from "./Components/LandingPage/NewLandigUI";
function App() {
  const [MousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ShowWhiteMousePointer, setShowWhiteMousePointer] = useState(true);
  const [MouseSkew, setMouseSkew] = useState({
    xscale: 1,
    yscale: 1,
  });
  const [MousePrev, setMousePrev] = useState({
    xprev: 0,
    yprev: 0,
  });
  var TimeOut;
  const CircleMouseFollow = (e) => {
    setMousePosition({
      x: e.clientX - 35,
      y: e.pageY - 35,
    });
  };
  // window.addEventListener("mousemove", CircleMouseFollow);

  // const MouseScroll = (e) => {
  //   setMousePosition({
  //     x: e.pageX - 1480,
  //     y: e.pageY - 10,
  //   });
  // };
  // window.addEventListener("wheel", MouseScroll);
  const variants = {
    default: {
      x: MousePosition.x,
      y: MousePosition.y,
      // scaleX: MouseSkew.xscale,
      // scaleY: MouseSkew.yscale,
      // translateX: MousePrev.xprev,
      // translateY: MousePrev.yprev,
    },
  };
  const ScrollFollow = (e) => {
    // console.log(e);
    setMousePosition({
      x: e.clientX - 35,
      y: e.pageY - 35,
    });
  };

  return (
    <div
      className="w-full min-h-screen overflow-x-hidden bg-[#0D0D0D] text-[#EDEDED]"
      onMouseMove={CircleMouseFollow}
      onWheel={ScrollFollow}
    >
      {ShowWhiteMousePointer && (
        <motion.div
          variants={variants}
          animate="default"
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.8 }}
          id="minicircle"
          style={{
            transform: `translate(${MousePosition.x}px, ${MousePosition.y}px)`,
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className={`md:w-20 md:h-20 rounded-full pointer-events-none backdrop-invert mix-blend-difference absolute  z-[9999]`}
        ></motion.div>
      )}

      <Navbar></Navbar>
      <NewLandigUI showMousePointer={setShowWhiteMousePointer}></NewLandigUI>
      <SkillMarquee></SkillMarquee>
      <NewAboutUI></NewAboutUI>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
