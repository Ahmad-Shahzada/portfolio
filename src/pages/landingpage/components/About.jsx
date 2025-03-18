import { motion } from "framer-motion";
import Sectionwraper from "/src/components/Sectionwraper";
import { FaCode, FaLaptopCode, FaTools, FaLightbulb } from "react-icons/fa";
import myImg from '../../../../public/assets/images/bg1.png'


const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const AboutSection = () => {
  return (
    <div id="about" className=" bg-white dark:bg-gradient-to-r from-[#0a0a0a] via-[#0d1b34] to-[#020202]">
      <Sectionwraper>
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-blue-600 dark:text-blue-400 text-center pt-20"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-300 mb-16 leading-relaxed max-w-6xl text-justify md:text-center mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            I'm a creative <span className="text-blue-600 dark:text-blue-400 font-semibold">Frontend Developer</span> with a passion for building sleek, fast, and user-friendly web applications. My goal is to deliver exceptional <span className="text-blue-600 dark:text-blue-400 font-semibold">UI/UX experiences</span> using modern technologies like <span className="text-blue-600 dark:text-blue-400 font-semibold">React, Tailwind CSS, JavaScript, and Redux</span>. I thrive on turning innovative ideas into functional and visually appealing designs that enhance user engagement and satisfaction.
          </motion.p>

          <div className="flex flex-col lg:flex-row items-center text-black dark:text-white pb-20 md:pb-0 md:py-10">
            <div className="w-full lg:w-1/2 flex pl-0 lg:pl-10 justify-center md:justify-normal mb-10 lg:mb-0 lg:mr-48">
              <motion.img
                src={myImg}
                alt="Profile"
                className="rounded-full w-40 sm:w-60 md:w-80 lg:w-[350px] shadow-[0px_0px_40px_rgba(59,130,246,0.7),0px_0px_80px_rgba(139,92,246,0.7),0px_0px_100px_rgba(59,130,246,0.5)] transition-all duration-500"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.1, rotate: 2 }}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
                  {[
                    { icon: FaCode, title: "Clean Code", description: "Writing optimized, scalable, and maintainable code." },
                    { icon: FaLaptopCode, title: "Modern UI/UX", description: "Designing visually appealing and seamless user experiences." },
                    { icon: FaTools, title: "Problem Solving", description: "Turning complex ideas into practical, efficient solutions." },
                    { icon: FaLightbulb, title: "Creative Thinking", description: "Innovating and pushing boundaries for better user interactions." }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl transition-all duration-500 hover:shadow-[0px_0px_10px_rgba(59,130,246,0.4),0px_0px_20px_rgba(139,92,246,0.4),0px_0px_30px_rgba(59,130,246,0.2)]"

                      variants={cardVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.07 }}
                    >
                      <item.icon className="text-4xl sm:text-5xl text-blue-600 dark:text-blue-400 mb-4 mx-auto" />
                      <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-2">{item.description}</p>
                    </motion.div>
                  ))}
                </div>

              </section>
            </div>
          </div>
        </div>
      </Sectionwraper>
    </div>
  );
};

export default AboutSection;
