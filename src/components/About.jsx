import React from "react";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import Model from "../assets/UI/Model";

const About = () => {
  return (
    <div className="pb-1 border-b border-neutral-500">
      <motion.h2 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0, y:100}}
            transition={{duration:1.5}}
            className="my-10 text-4xl font-bold text-center">About <span className="text-neutral-500">Me</span></motion.h2>

      <div className="">
        <div className="flex items-center justify-center pb-4 pl-5 pr-5 lg:mb-35">
          <motion.div
            className="max-w-2xl py-6 my-2 text-lg font-light tracking-tight text-white md:text-xl lg:text-xl"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mt-0.1 ">
              <p className="mb-4 text-justify ">{ABOUT_TEXT}</p>
            </div>
          </motion.div>
        </div>
        <div className="pb-8 ">
          <Model />
          <div className="container flex items-center gap-5 text-3xl text-white mt-28 font-nav "></div>
        </div>
      </div>
    </div>
  );
};

export default About;
