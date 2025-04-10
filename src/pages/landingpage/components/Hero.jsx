import { motion } from "framer-motion";
import Sectionwraper from "/src/components/Sectionwraper";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import myImg from "../../../../public/assets/images/bg1.png";
import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/magicui/cool-mode";

const Hero = () => {
  return (
    <div
      className="pb-5 h-screen bg-white dark:bg-gradient-to-r from-[#0a0a0a] via-[#0d1b34] to-[#020202] py-20 md:pt-52 md:pb-14 flex items-center"
    >
      <Sectionwraper>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:w-1/2 space-y-4 px-5 sm:px-10 lg:px-0"
          >
            <h3 className="text-3xl sm:text-[35px] dark:text-gray-300 text-black">
              Hello, It's Me
            </h3>
            <h1 className="text-3xl sm:text-6xl font-extrabold py-3 dark:text-white text-black">
              Ahmad Shahzad
            </h1>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold dark:text-white text-black">
              I'm
              <span className="pl-3 bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent ">
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

            <h1 className="dark:text-gray-400 text-center sm:text-start text-gray-700 sm:text-xl sm:max-w-[80%] mx-auto lg:mx-0 pb-4">
              Building modern, responsive, and intuitive web applications that
              solve real-world problems.{" "}
              <span className="hidden sm:block">
                And deliver exceptional user experiences.
              </span>
            </h1>
            <motion.div
              className="flex justify-center lg:justify-start mt-6 space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {[
                {
                  href: "https://web.facebook.com/profile.php?id=61560327763898",
                  icon: (
                    <FaFacebook
                      size={18}
                      className="dark:text-white text-gray-700"
                    />
                  ),
                },
                {
                  href: "https://www.instagram.com/ahmadshahzad4220/?hl=en",
                  icon: (
                    <FaInstagram
                      size={18}
                      className="dark:text-white text-gray-700"
                    />
                  ),
                },
                {
                  href: "https://linkedin.com",
                  icon: (
                    <FaLinkedin
                      size={18}
                      className="dark:text-white text-gray-700"
                    />
                  ),
                },
                {
                  href: "https://github.com/Ahmad-Shahzada",
                  icon: (
                    <FaGithub
                      size={18}
                      className="dark:text-white text-gray-700"
                    />
                  ),
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  className="p-5 w-[40px] h-[40px] flex items-center justify-center rounded-full mb-4
      backdrop-blur-md bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent border border-white/20 
      shadow-[0px_0px_15px_rgba(59,130,246,0.8)] transition-all duration-300"
                  whileHover={{
                    scale: 1.4, // Pop-out effect
                    rotate: 5,
                    boxShadow: "0px 0px 30px rgba(59,130,246,1)", // Stronger glow on hover
                  }}
                  whileTap={{ scale: 1 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  {/* Icon */}
                  <span className="text-white text-2xl drop-shadow-lg">
                    {item.icon}
                  </span>
                </motion.a>
              ))}
            </motion.div>
            <CoolMode>
              <Button className="relative z-10 px-6 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-purple-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-105">
                Lets Talk
              </Button>
            </CoolMode>

            {/* Social Media Icons */}
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
              src={myImg}
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
