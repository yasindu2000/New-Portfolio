import React, { useEffect } from "react";
import { HERO_CONTENT } from "../constants";
import ProfilePic from "../assets/KalinduProfile1.png";
import { motion } from "framer-motion";
import Typed from "typed.js"; 


const Hero = () => {
  useEffect(() => {
    const options = {
      strings: ["Aspiring Full-Stack Engineer ", "Tech Blogger", "Creative Web Designer"],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
      loop: true,
    };

    const typed = new Typed(".moveLetter", options);

    return () => {
      typed.destroy(); 
    };
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
   
      <div className="pl-10 border-b border-neutral-500 pb-4 lg:mb-35 flex flex-wrap  ">
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-xl md:text-2xl lg:text-4xl text-customBlue py-4">Hi, my name is</p>
              <h1 className="name font-lota  text-3xl md:text-5xl lg:text-8xl" data-aos="fade-right">
                KalinduSudaraka
              </h1>
              <h1 className="text-white text-xl md:text-3xl py-4 font-bold">
                I AM A <span className="moveLetter text-customBlue"></span>
              </h1>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-4 max-w-2xl py-6 font-light tracking-tight text-lg md:text-xl lg:text-xl text-white"
              >
                {HERO_CONTENT}
              </motion.p>
              <a
        href="https://drive.google.com/uc?export=download&id=1FJw9vLOCEoB08nFF5EScoisTAw9lOq8D"
         download
          className="w-fit"
        >
              <motion.button
            className="my-6 p-4 font-bold cv z-10  border-2  cursor-fancy rounded-[0.3rem] transition-all duration-700 ease-out  block relative border-customBlue"
            type="button"
          >
            View My CV Here!
          </motion.button>
          </a>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-wrap items-center justify-center lg:justify-between">
            <div >
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="rounded-3xl h-94 md:h-[32rem] lg:h-[34rem]  w-[34rem] md:w-[40rem] lg:w-[48rem] shadow-xl"
                src={ProfilePic}
                alt="profilepic"
              />
            </div>
          </div>
        </div>
 
  );
};

export default Hero;
