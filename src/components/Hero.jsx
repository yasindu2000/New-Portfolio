import React, { useEffect } from "react";
import { HERO_CONTENT } from "../constants";
import yasindu from "../assets/yasindu.png";
import { motion } from "framer-motion";
import Typed from "typed.js"; 

const Hero = () => {
  useEffect(() => {
    const options = {
      strings: ["Full-Stack Developer ", "MERN Stack Developer", "Creative Web Designer"],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
      loop: true,
    };

    const typed = new Typed(".moveLetter", options);

    return () => typed.destroy(); 
  }, []);

  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div className="flex flex-col items-center justify-center pb-20 pl-4 pr-4 border-b md:h-[600px] md:mb-20 lg:flex-row sm:pl-6 lg:pl-10 sm:pr-6 lg:pr-10 border-neutral-500 ">
      
      {/* Left Side Content */}
      <div className="w-full lg:w-2/3">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <p className="py-2 text-lg sm:py-4 sm:text-xl md:text-2xl lg:text-4xl text-customBlue">
            Hi, my name is
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-7xl " data-aos="fade-right">
            Yasindu Dahanayaka
          </h1>
          <h1 className="py-2 text-lg font-bold text-white sm:py-4 sm:text-xl md:text-3xl">
            I AM A <span className="moveLetter text-customBlue"></span>
          </h1>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="max-w-full py-4 my-4 text-base font-light tracking-tight text-white sm:max-w-2xl sm:py-6 sm:text-lg md:text-xl lg:text-xl"
          >
            {HERO_CONTENT}
          </motion.p>
          <a href="/public/yasindu.pdf" download className="w-fit">
            <motion.button
              className="my-4 sm:my-6 p-3 sm:p-4 font-bold cv z-10 border-2 cursor-fancy rounded-[0.3rem] transition-all duration-700 ease-out block relative border-customBlue text-sm sm:text-base"
              type="button"
            >
              Download CV
            </motion.button>
          </a>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex flex-wrap items-center justify-center w-full mt-4 lg:w-1/3 lg:justify-between lg:mt-0">
        <div className="p-[4px] rounded-full bg-sky-600 shadow-[0_0_25px_rgba(56,189,248,0.7)]">
          <motion.img
            animate={{ y: [0, -10, 0], opacity: 1 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
            className="rounded-full w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[44rem] lg:h-[30rem] shadow-xl shadow-sky-700"
            src={yasindu}
            alt="yasindu"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
