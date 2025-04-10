import { motion } from "framer-motion";
import Sectionwraper from "/src/components/Sectionwraper";
import {
  FaCode,
  FaLaptopCode,
  FaTools,
  FaLightbulb,
  FaAward,
  FaRocket,
} from "react-icons/fa";
import myImg from "../../public/assets/images/bg1.png";

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const AboutSection = () => {
  return (
    <div className="relative bg-white dark:bg-gradient-to-r from-[#0a0a0a] via-[#0d1b34] to-[#020202] pb-52 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-blue-500 opacity-20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-700 opacity-20 rounded-full blur-3xl -z-10" />

      <Sectionwraper>
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent text-center pt-32"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            About Me
          </motion.h2>

          {/* Mission Statement */}
          <motion.div
            className="max-w-4xl mx-auto mb-16 px-6 py-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 font-medium">
              I believe in crafting <span className="text-blue-400 font-bold">digital experiences</span> that don’t just look good — they feel good to use. My mission? Build smooth, fast, and visually stunning web interfaces that solve real problems.
            </p>
          </motion.div>

          {/* Content Section */}
          <div className="flex flex-col lg:flex-row justify-center items-start gap-12 text-black dark:text-white pb-20 md:py-10">
            {/* Skills Section */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="w-full pt-20">
                {[
                  { skill: "HTML", level: "100%" },
                  { skill: "CSS", level: "100%" },
                  { skill: "JavaScript", level: "85%" },
                  { skill: "Tailwind CSS", level: "100%" },
                  { skill: "React", level: "80%" },
                  { skill: "Redux", level: "85%" },
                  { skill: "RTK QUERY", level: "90%" },
                ].map(({ skill, level }, idx) => (
                  <div key={idx} className="mb-6 w-full max-w-md mx-auto">
                    <div className="flex justify-between mb-1 px-1">
                      <span className="text-gray-300 font-medium text-sm sm:text-base">{skill}</span>
                      <span className="text-gray-400 text-xs sm:text-sm">{level}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: level }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cards Section */}
            <div className="w-full lg:w-1/2 px-4">
              <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 text-center">
                  {[
                    { icon: FaCode, title: "Clean Code", description: "I write modular, scalable, and maintainable code." },
                    { icon: FaLaptopCode, title: "Modern UI/UX", description: "My designs prioritize beauty and usability equally." },
                    { icon: FaTools, title: "Problem Solver", description: "I break down complex ideas into elegant code." },
                    { icon: FaLightbulb, title: "Creative Mind", description: "I love pushing boundaries to create unique designs." },
                    { icon: FaAward, title: "Projects", description: "Built 20+ modern web apps and components." },
                    { icon: FaRocket, title: "Future Goals", description: "Contribute to open-source and lead exciting dev projects." },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/10 border border-white/10 dark:bg-gray-800/30 p-6 rounded-2xl backdrop-blur-md hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
                      variants={cardVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <item.icon className="text-4xl text-blue-500 dark:text-blue-400 mb-4 mx-auto" />
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-4 text-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {["React", "Tailwind CSS", "JavaScript", "HTML", "Redux", "Framer Motion"].map(
              (tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md hover:scale-105 transition"
                >
                  {tech}
                </span>
              )
            )}
          </motion.div>
        </div>
      </Sectionwraper>
    </div>
  );
};

export default AboutSection;
