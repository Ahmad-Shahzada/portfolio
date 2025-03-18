import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Sectionwraper from "/src/components/Sectionwraper";
import img1 from "../../../../public/assets/images/ecommerce.png";
import img2 from "../../../../public/assets/images/Travel.png";
import img3 from "../../../../public/assets/images/resturent.png";
import img4 from "../../../../public/assets/images/redux.png";
import img5 from "../../../../public/assets/images/to-do.png";
import img6 from "../../../../public/assets/images/form.png";



const projects = [
  {
    title: "Project one",
    description:"A modern and user-friendly e-commerce website with a sleek design, seamless navigation, and secure checkout.",
    link: "https://ahmad-shahzada.github.io/E-commerce/",
    github: "https://github.com/Ahmad-Shahzada/E-commerce",
    image: img1
  },
  {
    title: "Project Two",
    description: "A beautiful multi pages travel website using HTML , CSS ",
    link: "https://ahmad-shahzada.github.io/TRAVEL/",
    github: "https://github.com/Ahmad-Shahzada/TRAVEL",
    image: img2
  },
  {
    title: "Project Three",
    description: "A Resturent website ui design fully responsive and attractive.",
    link: "https://ahmad-shahzada.github.io/Ahmad.shahzad/",
    github: "https://github.com/Ahmad-Shahzada/Ahmad.shahzad",
    image: img3
  },
  {
    title: "Project four",
    description:"Applying redux with add to cart function fetching data using axious.",
    link: "https://redux-drab-nine.vercel.app/",
    github: "https://github.com/Ahmad-Shahzada/redux",
    image: img4
  },
  {
    title: "Project five",
    description: "A beautiful To-Do app using HTML , CSS and JAVASCRIPT",
    link: "https://ahmad-shahzada.github.io/to-do-app/",
    github: "https://github.com/Ahmad-Shahzada/to-do-app",
    image: img5
  },
  {
    title: "Project six",
    description: "user registration form with validation.",
    link: "https://form-six-kohl.vercel.app/",
    github: "https://github.com/Ahmad-Shahzada/form/tree/main",
    image: img6,
  }
];

export default function ProjectCard() {
  return (
    <div id="projects" className="md:pt-3 bg-white dark:bg-gradient-to-r from-[#0a0a0a] via-[#0d1b34] to-[#020202]">
    <Sectionwraper>
    <section className="pt-10 text-white">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-blue-500 text-5xl font-bold mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-2xl text-black dark:text-white font-semibold mb-2">{project.title}</h3>
                <p className="text-black dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 flex items-center gap-2">
                    Live Demo <FaExternalLinkAlt />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 flex items-center gap-2">
                    Code <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </Sectionwraper>
    </div>
  );
}
