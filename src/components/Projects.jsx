import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.2 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <a href="#">
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="rounded mb-6"
                />
              </a>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <a href="#">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
              </a>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 font-medium text-purple-800 rounded bg-neutral-900 px-2 py-1 text-sm"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
