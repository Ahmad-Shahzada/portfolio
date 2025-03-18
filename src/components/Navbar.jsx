import React, { useState, useContext } from "react";
import { Link } from "react-scroll"; 
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import Sectionwraper from "./Sectionwraper";
import { ThemeContext } from "../context/ThemeProvider";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="fixed w-full z-10">
      <nav className=" bg-white dark:bg-gradient-to-r from-[#0a0a0a] via-[#0d1b34] to-[#020202] border-b-2 border-gray-300 dark:border-gray-600 text-black dark:text-white py-4 shadow-lg">
        <Sectionwraper>
          <div className="mx-auto flex justify-between items-center">
            
            <Link className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg">
              Portfolio
            </Link>
            <div>
              {/* Desktop Navigation */}
              <ul className="hidden md:flex space-x-6 text-xl items-center">
                {["home", "about", "skills", "projects", "contact us"].map(
                  (item) => (
                    <Link
                      key={item}
                      to={item}
                      smooth={true}
                      duration={800}
                      className="relative text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 group cursor-pointer"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                      <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )
                )}

                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full border border-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 text-black dark:text-white transition"
                >
                  {theme === "dark" ? (
                    <BsSun className="text-yellow-400" />
                  ) : (
                    <BsMoon />
                  )}
                </button>
              </ul>
            </div>

            {/* Mobile Menu Icon */}
            <button
              onClick={toggleTheme}
              className="p-2 -m-20 sm:hidden rounded-full border border-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 text-black dark:text-white transition"
            >
              {theme === "dark" ? (
                <BsSun className="text-yellow-400" />
              ) : (
                <BsMoon />
              )}
            </button>
            <div
              className="md:hidden text-3xl text-black dark:text-white cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FiMenu />
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-full h-full bg-white dark:bg-gradient-to-r from-[#0a0a0a] via-[#0d1b34] to-[#020202] py-6 px-4"
            >
              <div className="flex justify-end">
                <FiX
                  className="text-black dark:text-white text-3xl cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <ul className="flex flex-col items-center mt-8 space-y-6">
                {["home", "about", "skills", "projects", "contact us"].map(
                  (item) => (
                    <Link
                      key={item}
                      to={item}
                      smooth={true}
                      duration={800}
                      className="text-lg text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  )
                )}
              </ul>
            </motion.div>
          )}
        </Sectionwraper>
      </nav>
    </div>
  );
};

export default Navbar;
