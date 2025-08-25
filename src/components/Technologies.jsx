import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io5";
import { LiaCss3Alt } from "react-icons/lia";
import { SiJavascript, SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";

import { motion } from "framer-motion";

const Technologies = () => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className="pb-24 border-b border-neutral-500">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-4xl font-bold text-center"
      >
        Tech <span className="text-neutral-500">Stack</span>
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <IoLogoHtml5 className="text-orange-500 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <LiaCss3Alt className="text-blue-600 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiJavascript className="text-yellow-400 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <FaNodeJs className="text-green-500 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiTailwindcss className="text-sky-400 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiMongodb className="text-green-500 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiMysql className="text-green-500 text-7xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
