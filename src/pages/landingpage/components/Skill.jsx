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
    description:
      "Expert in semantic HTML5, accessibility, and SEO optimization.",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500" />,
    description:
      "Skilled in CSS3, including Flexbox, Grid, animations, and transitions.",
  },
  { 
    name: "JavaScript",
    icon: <FaJs className="text-yellow-500" />,
    description:
      "Proficient in ES6+, working with async programming and frameworks.",
  },
  {
    name: "React",
    icon: <FaReact className="text-blue-400" />,
    description:
      "Experienced in building SPAs with React.js and managing state efficiently.",
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-purple-500" />,
    description:
      "Expert in state management with Redux and middleware like Redux Thunk.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-500" />,
    description: "Efficient in utility-first design with Tailwind CSS.",
  },
  {
    name: "Vite",
    icon: <SiVite className="text-purple-400" />,
    description:
      "Skilled in using Vite for fast and optimized frontend development.",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-red-500" />,
    description:
      "Proficient in version control, branching strategies, and Git workflows.",
  },
];

export default function SkillsSection() {
  return (
    <div
      id="skills"
      className="md:pt-32 bg-white dark:bg-gradient-to-r from-[#0a0a0a] via-[#0d1b34] to-[#020202] pb-14"
    >
      <Sectionwraper>
        <section className="text-black dark:text-white text-center">
          <motion.h2
            className="pb-10 text-5xl font-extrabold mb-8 pt-20 md:pt-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Skills
          </motion.h2>

          {/* Grid Layout for Large Screens */}
            <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto px-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="p-8 bg-gray-100 dark:bg-gray-800 rounded-3xl flex flex-col items-center gap-4 shadow-xl cursor-pointer border border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 transition"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="text-6xl drop-shadow-lg">{skill.icon}</div>
                  <Link className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </Link>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>

          {/* Swiper Slider for Mobile Screens */}
          <div className=" block sm:hidden px-6">
            <Swiper slidesPerView={1} className="w-full">
              {skills.map((skill, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="p-8 bg-gray-100 dark:bg-gray-800 rounded-3xl flex flex-col items-center gap-4 cursor-pointer border border-gray-300 dark:border-gray-700 transition-all duration-500 hover:shadow-[0px_0px_10px_rgba(59,130,246,0.4),0px_0px_20px_rgba(139,92,246,0.4),0px_0px_30px_rgba(59,130,246,0.2)]"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="text-6xl drop-shadow-lg">{skill.icon}</div>
                    <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                      {skill.description}
                    </p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </Sectionwraper>
    </div>
  );
}
