import React from "react";
import ABOUTIMG from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import Model from "../assets/UI/Model";

const About = () => {
  return (
    <div className="border-b border-neutral-500 pb-1">
      <motion.h2 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0, y:100}}
            transition={{duration:1.5}}
            className="my-10 text-center text-4xl font-bold">About <span className="text-neutral-500">Me</span></motion.h2>

      <div className="">
        <div className=" pl-10 flex items-center justify-center pb-4 lg:mb-35 ">
          <motion.div
            className=" my-2 max-w-2xl py-6 font-light tracking-tight text-lg md:text-xl lg:text-xl text-white"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mt-0.1">
              <p className="mb-4 text-justify  ">{ABOUT_TEXT}</p>
            </div>
          </motion.div>
        </div>
        <div className=" pb-8    ">
          <Model />
          <div className="items-center gap-5 flex text-3xl text-white mt-28 container font-nav "></div>
        </div>
      </div>
    </div>
  );
};

export default About;
