import React from "react";
import { motion } from "framer-motion";
import next from "../assets/projects/Hotel.png";
import next1 from "../assets/projects/PitCrew.png";
import next2 from "../assets/projects/Food-Delivery APP.png";
import next3 from "../assets/projects/Chat Bot.png";
import next4 from "../assets/projects/Booking Mob.png";
import next5 from "../assets/projects/Library.jpg";
import { Github, Link, SquareArrowOutUpRight } from "lucide-react";
import { project } from "../data/index";

const Projects = () => {
  const images = [
    next,
    next1,
    next2,
    next3,
    next4,
    next5,
  ];

  // Animation variants for project cards
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="border-b border-neutral-500 pb-1">
      <div className="bg-head">
        <div className="container">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 }}
            className="my-10 text-center text-4xl font-bold"
            viewport={{ once: false, amount: 0.2 }} 
          >
            Projects
          </motion.h2>

          <div className="text-white md:py-10 py-5">
            <div className="py-2">
              <h2 className="text-2xl text-center text-white">Past Project Experience</h2>
              <p className="text-sm py-4 text-center">
                Explore how I consistently delivered maximum results in my previous projects.
              </p>

             
              <motion.div
                className="grid gap-4 my-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-nav"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }} 
                variants={containerVariants}
              >
                {project.map((el, idx) => (
                  
                  <motion.div
                    className="p-4 border-2 rounded-md border-customBlue flex flex-col gap-4 overflow-hidden"
                    key={idx}
                    variants={itemVariants}
                    whileInView="visible" 
                    initial="hidden"
                    viewport={{ once: false, amount: 0.2 }} 
                  >
                    <div className="flex justify-between">
                      <p className="text-customBlue">{el.name}</p>
                      <div className="flex gap-2">
                        <a
                          href={el.repo}
                          target="_blank"
                          className="block hover:text-customBlue"
                        >
                          <Github />
                        </a>
                        {/* <a
                          href={el.demo}
                          target="_blank"
                          className="block hover:text-customBlue"
                        >
                          <SquareArrowOutUpRight />
                        </a> */}
                      </div>
                    </div>
                    <div className="relative group">
                      <div className="absolute inset-0 flex justify-center items-center bg-[#363737a3] translate-x-[120%] group-hover:translate-x-0 transition-all duration-300">
                        {/* Uncomment this if you want the live demo link on hover */}
                        {/* <a href={el.demo} target="_blank" className="flex gap-2 text-xl">
                          LiveDemo <Link className="text-customBlue" />
                        </a> */}
                      </div>
                      <img
                       src={images[idx]}
                       alt={el.name}
                       loading="lazy"
                      className="block w-[500px] h-[200px] rounded-md"
                      />

                    </div>
                    <div className="h-32 overflow-auto">
                      <p className="text-sm leading-6">{el.details}</p>
                    </div>
                    <div>
                      <p className="text-sm"><span className="text-customBlue">Tech Stack:</span> {el.skills}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
