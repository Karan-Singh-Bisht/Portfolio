import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion, useScroll } from "framer-motion";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.2, duration: 0 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <img className="rounded-md" src={aboutImg} alt="about" />
          </motion.div>
        </div>
        <div className="flex w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="my-2 max-w-xl py-6"
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
