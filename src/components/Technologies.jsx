import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs, FaServer, FaTools } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io5";
import { LiaCss3Alt } from "react-icons/lia";
import { SiJavascript } from "react-icons/si";
import { SiMongodb, SiSpring, SiMysql } from "react-icons/si";

import { motion } from "framer-motion";





const Technologies = () => {
    const iconVariants=(duration)=>({
        initial:{y:-10},
        animate:{
            y:[10,-10],
            transition:{
                duration:duration,
                ease:"linear",
                repeat:Infinity,
                repeatType:"reverse"
            }
        }
    })
    return ( 
        <div className="border-b border-neutral-500 pb-24">
            <motion.h2 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0, y:100}}
            transition={{duration:1.5}}
            className="my-10 text-center text-4xl font-bold">Tech <span className="text-neutral-500">Stack</span></motion.h2>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                variants={iconVariants(2.5)}
                initial="inital"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                  <IoLogoHtml5 className="text-7xl text-orange-500"/>
                </motion.div>
                <motion.div 
                  variants={iconVariants(2.5)}
                  initial="inital"
                  animate="animate"
                
                className="rounded-2xl border-4 border-neutral-800 p-4">
                   <LiaCss3Alt className="text-7xl text-blue-600"/>
                </motion.div>
                <motion.div
                variants={iconVariants(2.5)}
                initial="inital"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                   <SiJavascript className="text-7xl text-yellow-400"/>
                </motion.div>
                <motion.div 
                   variants={iconVariants(2.5)}
                    initial="inital"
                    animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500"/>
                </motion.div>
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="inital"
                    animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="inital"
                    animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSpring className="text-7xl text-green-500"/>
                </motion.div>
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="inital"
                    animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500"/>
                </motion.div>
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="inital"
                    animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-7xl text-green-500"/>
                </motion.div>
            </motion.div>
        </div>
     );
}
 
export default Technologies;