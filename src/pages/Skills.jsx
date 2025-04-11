import React from "react";
import { motion } from "framer-motion";
import Sectionwraper from "/src/components/Sectionwraper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiVite } from "react-icons/si";
import { Link } from "react-router-dom";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500" />,
    description: "Semantic and accessible HTML5.",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500" />,
    description: "Responsive and modular CSS3.",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-500" />,
    description: "Proficient in ES6+ and async JS.",
  },
  {
    name: "React",
    icon: <FaReact className="text-blue-400" />,
    description: "Building interactive UIs with React.",
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-purple-500" />,
    description: "State management with Redux and RTK.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-500" />,
    description: "Utility-first CSS framework for rapid design.",
  },
  {
    name: "Vite",
    icon: <SiVite className="text-purple-400" />,
    description: "Fast and optimized development environment.",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-red-500" />,
    description: "Version control using Git and GitHub.",
  },
];

const skill = [
  { skill: "HTML", level: "100%" },
  { skill: "CSS", level: "100%" },
  { skill: "JavaScript", level: "90%" },
  { skill: "Tailwind CSS", level: "100%" },
  { skill: "React", level: "85%" },
  { skill: "Redux", level: "85%" },
  { skill: "RTK QUERY", level: "90%" },
];

const Skills = () => {
  return (
    <div className="bg-white dark:bg-gradient-to-r from-[#0a0a0a] via-[#0d1b34] to-[#020202] text-white">
      <Sectionwraper>
        {/* Skill Heading at the Top */}
        <div className="text-center pt-36">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent text-center">
            My Skills
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-20 items-center justify-center pb-36 pt-20">
          {/* Left Side - Skill Bars */}
          <div className="w-full lg:w-1/2 p-6 rounded-3xl backdrop-blur-md bg-opacity-20 shadow-lg">
            <div className="space-y-8">
              {skill.map(({ skill, level }, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1 px-1">
                    <span className="text-sm font-medium text-black dark:text-gray-200">
                      {skill}
                    </span>
                    <span className="text-sm text-gray-600">{level}</span>
                  </div>
                  <div className="w-full rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: level }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Skills Section */}
          <div className="w-full lg:w-1/2 p-6">
            <section className="text-center">
              {/* Grid Layout for Large Screens */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="py-5 px-2 bg-gray-200 dark:bg-gray-800 rounded-xl flex flex-col items-center gap-4 shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="text-5xl">{skill.icon}</div>
                    <Link className="text-xl text-black dark:text-white font-semibold">{skill.name}</Link>
                    <p className="text-sm text-gray-700 dark:text-white text-center">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </Sectionwraper>
    </div>
  );
};

export default Skills;
