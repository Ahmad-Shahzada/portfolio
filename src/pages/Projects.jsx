import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"; // Ensure react-icons is installed: npm install react-icons
import Sectionwraper from "/src/components/Sectionwraper"; // Adjust path if necessary
// No need to import images if you're using direct paths from the public folder.
// However, for better asset management and optimization,
// it's generally recommended to import them if they are in your src folder.
// Example: import ecommerceImg from '../assets/images/ecommerce.png';

const projects = [
  {
    title: "Oracles Force Website",
    description:
      "Designed and developed the official website for Oracles Force, focusing on modern UI/UX and responsive frontend using latest web technologies.",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    liveLink: "https://oraclesforce.com/",
    github: "", // Empty for private/commercial projects
    image: '/public/assets/images/oracle.png',
  },
  {
    title: "MELI Educational Platform",
    description:
      "Collaborated with my team to design and develop the official website for MELI, a Saudi-based educational institution, ensuring a user-friendly and responsive experience.",
    techStack: ["Bootstrap", "HTML", "CSS", "JAVASCRIPT"],
    liveLink: "https://meli.edu.sa/",
    github: "",
    // Use the imported image if you imported it, otherwise keep the direct public path
    image: "/assets/images/2025-06-21.png",
  },
  {
    title: "Modern E-commerce Platform", // More descriptive title
    description:
      "A modern and user-friendly e-commerce website with a sleek design, seamless navigation, and secure checkout features.",
    techStack: ["HTML", "CSS", "JavaScript"], // Added techStack
    liveLink: "https://ahmad-shahzada.github.io/E-commerce/",
    github: "https://github.com/Ahmad-Shahzada/E-commerce",
    image: "/assets/images/ecommerce.png",
  },
  {
    title: "Interactive Calculator App", // More descriptive title
    description:
      "A beautiful and intuitive UI calculator built with core web technologies for a smooth user experience.",
    techStack: ["HTML", "CSS", "JavaScript"], // Added techStack
    liveLink: "https://ahmad-shahzada.github.io/calculator/",
    github: "https://github.com/Ahmad-Shahzada/calculator",
    image: "/assets/images/calculator.png",
  },
  {
    title: "Responsive Restaurant Website", // More descriptive title
    description:
      "A fully responsive and attractive restaurant website UI design, showcasing modern aesthetics and user-friendly navigation across all devices.",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"], // Added techStack
    liveLink: "https://ahmad-shahzada.github.io/Ahmad.shahzad/",
    github: "https://github.com/Ahmad-Shahzada/Ahmad.shahzad",
    image: "/assets/images/resturent.png",
  },
  {
    title: "Redux Cart Management System", // More descriptive title
    description:
      "An e-commerce simulation applying Redux for robust state management, featuring seamless add-to-cart functionality and efficient data fetching using Axios.",
    techStack: ["React", "Redux", "Axios", "CSS Modules", "Tailwind CSS"], // Added techStack
    liveLink: "https://redux-drab-nine.vercel.app/",
    github: "https://github.com/Ahmad-Shahzada/redux",
    image: "/assets/images/redux.png",
  },
  {
    title: "Simple To-Do List Application", // More descriptive title
    description:
      "A beautiful and functional To-Do application built with fundamental web technologies, demonstrating efficient task organization and management.",
    techStack: ["HTML", "CSS", "JavaScript"], // Added techStack
    liveLink: "https://ahmad-shahzada.github.io/to-do-app/",
    github: "https://github.com/Ahmad-Shahzada/to-do-app",
    image: "/assets/images/to-do.png",
  },
  {
    title: "Validated User Registration Form", // More descriptive title
    description:
      "A robust user registration form complete with comprehensive client-side input validation, ensuring data integrity and a smooth user onboarding experience.",
    techStack: ["React", "JAVASCRIPT", "Tailwind CSS"], // Added techStack
    liveLink: "https://form-six-kohl.vercel.app/",
    github: "https://github.com/Ahmad-Shahzada/form/tree/main",
    image: "/assets/images/form.png",
  },
];

const Projects = () => {
  return (
    // Section wrapper for consistent padding and background
    <div
      id="projects"
      className="pt-28 pb-20 bg-white dark:bg-gradient-to-r from-[#0a0a0a] via-[#0d1b34] to-[#020202]"
    >
      <Sectionwraper>
        <section className="text-gray-900 dark:text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-700"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              My Projects
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-16 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Explore a collection of my recent work, showcasing my skills in
              modern frontend development and responsive design.
            </motion.p>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="relative rounded-xl overflow-hidden shadow-xl dark:shadow-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                             group cursor-pointer transition-transform duration-300 ease-in-out"
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }} // Animate only when enters viewport
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.03, // Slightly lift the card
                    y: -8, // Move up a bit
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)", // More pronounced shadow
                  }}
                >
                  {/* Project Image */}
                  <div className="w-full h-56 md:h-64 lg:h-72 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 md:p-7 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-400 mb-4 flex-grow line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.techStack &&
                        project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200
                                     rounded-full text-xs font-semibold whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 text-white rounded-lg
                                   flex items-center justify-center gap-2 font-medium
                                   hover:bg-blue-700 transition duration-200 ease-in-out
                                   shadow-md hover:shadow-lg"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo <FaExternalLinkAlt size={14} />
                      </motion.a>

                      {project.github && ( // Only show GitHub button if a link exists
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-5 py-2.5 bg-gray-200 text-gray-800 rounded-lg
                                     flex items-center justify-center gap-2 font-medium
                                     hover:bg-gray-300 transition duration-200 ease-in-out
                                     dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600
                                     shadow-md hover:shadow-lg"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Code <FaGithub size={14} />
                        </motion.a>
                      )}
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
};

export default Projects;
