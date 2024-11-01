import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { motion } from "framer-motion";

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

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        whileHover={{ scale: 1.2, duration: 0 }}
        className="text-center text-4xl my-20"
      >
        Technologies
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-7xl " />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl text-cyan-400" />
        </div> */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbSql className="text-7xl text-cyan-400" />
        </div> */}
        {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostgresql className="text-7xl text-cyan-400" />
        </div> */}
      </div>
    </div>
  );
}

export default Technologies;
