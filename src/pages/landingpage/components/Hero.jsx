import { motion } from "framer-motion";
import Sectionwraper from "/src/components/Sectionwraper";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div id="home" className="bg-white dark:bg-gradient-to-r from-[#0a0a0a] via-[#0d1b34] to-[#020202] py-20 md:pt-52 md:pb-40 flex items-center">
      <Sectionwraper>
        <div className="pt-16 flex flex-col-reverse lg:flex-row items-center justify-between w-full">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:w-1/2 space-y-4 px-5 sm:px-10 lg:px-0"
          >
            <h3 className="text-3xl sm:text-[35px] dark:text-gray-300 text-black">
              Hello, It's Me
            </h3>
            <h1 className="text-4xl sm:text-6xl font-extrabold py-3 dark:text-white text-black">
              Ahmad Shahzad
            </h1>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold dark:text-white text-black">
              I'm
              <span className="pl-3 text-blue-400">
                <Typewriter
                  words={[
                    "a Web Developer",
                    "a FrontEnd Developer",
                    "a Web Designer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>

            <p className="dark:text-gray-400 text-gray-700 sm:text-lg sm:max-w-[80%] mx-auto lg:mx-0 pb-4">
              I’m Ahmad Shahzad, a passionate Web Developer who loves crafting
              elegant and functional websites.
              <span className="hidden sm:block">
                Building modern, responsive & interactive websites that bring
                ideas to life.
              </span>
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-lg font-semibold text-white transition-all duration-300 
             bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg 
             hover:shadow-[0px_0px_20px_rgba(59,130,246,0.7)] 
             active:shadow-[0px_0px_30px_rgba(59,130,246,0.8)] 
             border-2 border-transparent hover:border-blue-300"
            >
              Let's Talk
            </motion.button>
          </motion.div>
          {/* Right Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center mt-10 lg:mt-0"
          >
            {/* Profile Image with Enhanced Shadows */}
            <motion.img
              src="/src/assets/images/bg1.png"
              alt="Profile"
              className="rounded-[80%] w-[70%] sm:w-[60%] md:w-[50%] lg:w-[400px] lg:ml-60 
          shadow-[0px_0px_40px_rgba(59,130,246,0.7),0px_0px_80px_rgba(139,92,246,0.7),0px_0px_100px_rgba(59,130,246,0.5)] 
          transition-all duration-500 mb-16 md:mb-0 "
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
        </div>
      </Sectionwraper>
    </div>
  );
};

export default Hero;
