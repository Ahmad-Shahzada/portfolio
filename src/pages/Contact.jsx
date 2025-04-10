import React from 'react'
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Sectionwraper from "/src/components/Sectionwraper";

const Contact = () => {
      return (
        <div className="pt-20 bg-white dark:bg-gradient-to-r from-[#0a0a0a] via-[#0d1b34] to-[#020202] ">
          <Sectionwraper>
            <div className="">
              <h1 className="text-center text-5xl font-bold pt-14 bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent">Contact Me</h1>
              <div
                id="contact us"
                className="pb-10 pt-20 flex items-center justify-center"
              >
                <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-4 md:p-10 flex flex-col lg:flex-row w-full">
                  {/* Left Side - Contact Info */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-1/2 p-6 flex flex-col justify-center text-center lg:text-left"
                  >
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
                      Let's Connect
                    </h2>
                    <p className="text-gray-600 dark:text-gray-500 mb-6">
                      Feel free to reach out for collaborations or just a friendly
                      chat.
                    </p>
                    <div className="space-y-4">
                      <p className="flex items-center justify-center lg:justify-start text-gray-700 dark:text-gray-300">
                        <FaPhone className="mr-2 text-blue-500" /> +92 3165568102
                      </p>
                      <p className="flex items-center justify-center lg:justify-start text-gray-700 dark:text-gray-300">
                        <FaEnvelope className="mr-2 text-blue-500" />{" "}
                        ahmadshahzadrajpoot005@gmail.com
                      </p>
                      <p className="flex items-center justify-center lg:justify-start text-gray-700 dark:text-gray-300">
                        <FaMapMarkerAlt className="mr-2 text-blue-500" />{" "}
                        Sargodha,Punjab,Pakistan
                      </p>
                    </div>
                    <div>
                      <h1 className="text-2xl pt-10 font-bold">Ahmad Shahzad</h1>
                    </div>
                  </motion.div>
    
                  {/* Right Side - Contact Form */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-1/2 p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl mt-10 md:mt-0"
                  >
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                      Send a Message
                    </h3>
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white border-none outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white border-none outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <textarea
                        placeholder="Your Message"
                        rows="4"
                        className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white border-none outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                      <button className="w-full p-3 bg-gradient-to-r from-blue-500 to-purple-700  text-white font-semibold rounded-lg hover:bg-blue-600 transition">
                        Send Message
                      </button>
                    </form>
                  </motion.div>
                </div>
              </div>
            </div>
          </Sectionwraper>
        </div>
      );
}

export default Contact
