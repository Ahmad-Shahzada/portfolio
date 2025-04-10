import React, { useState, useContext, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiCode,
  FiFolder,
  FiMail,
} from "react-icons/fi";
import { BsSun, BsMoon } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../context/ThemeProvider";
import Sectionwraper from "./Sectionwraper";
import URLS from "../config/urls.config";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", icon: <FiHome size={20} />, to: URLS.Home },
    { name: "About", icon: <FiUser size={20} />, to: URLS.ABOUT_US },
    { name: "Skills", icon: <FiCode size={20} />, to: URLS.SKILLS },
    { name: "Projects", icon: <FiFolder size={20} />, to: URLS.PROJECTS },
    { name: "Contact", icon: <FiMail size={20} />, to: URLS.CONTACT_US },
  ];

  return (
    <header
      className={`px-7 sm:px-0 fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white dark:bg-gradient-to-r from-[#0a0a0a] via-[#0d1b34] to-[#020202] shadow-lg"
          : "py-4 bg-white dark:bg-gradient-to-r from-[#0a0a0a] via-[#0d1b34] to-[#020202]"
      }`}
    >
      <Sectionwraper>
        <nav className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <NavLink
              to={URLS.Home}
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent flex items-center"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-purple-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center font-bold mr-2">
                AP
              </div>
              <span className="hidden md:block text-gray-500 dark:text-white pr-2">
                Ahmad
              </span>
              Portfolio
            </NavLink>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map(({ to, icon, name }, index) => (
              <NavLink
                key={index}
                to={to}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all flex gap-2 cursor-pointer"
              >
                {icon} {name}
              </NavLink>
            ))}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
            >
              {theme === "dark" ? (
                <BsSun className="text-yellow-400" />
              ) : (
                <BsMoon />
              )}
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
            >
              {theme === "dark" ? (
                <BsSun className="text-yellow-400" />
              ) : (
                <BsMoon />
              )}
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 ml-4 rounded-full bg-gray-100 dark:bg-gray-800"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40"
            >
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 20, stiffness: 200 }}
                className="absolute right-0 top-0 h-full w-3/4 bg-white dark:bg-[#0a0a0a] p-6 shadow-lg"
              >
                <div className="flex justify-end mb-4">
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
                  >
                    <FiX
                      size={24}
                      className="text-gray-700 dark:text-gray-300"
                    />
                  </motion.button>
                </div>
                <ul className="space-y-6">
                  {navLinks.map(({ to, icon, name }) => (
                    <NavLink
                      key={name}
                      to={to}
                      onClick={() => setIsOpen(false)}
                      className="gap-2 text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex cursor-pointer"
                    >
                      {icon} {name}
                    </NavLink>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Sectionwraper>
    </header>
  );
};

export default Navbar;
