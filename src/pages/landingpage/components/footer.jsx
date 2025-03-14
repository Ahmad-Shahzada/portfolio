import Sectionwraper from "/src/components/Sectionwraper";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-white dark:bg-gradient-to-r from-[#0a0a0a] via-[#0d1b34] to-[#020202]">
    <Sectionwraper>
    <footer className=" py-5">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Let's Connect!</h2>
          <p className="text-gray-400 mt-2">Feel free to reach out for collaborations or just a friendly hello. 🚀</p>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex space-x-6 text-2xl">
          <a href="https://web.facebook.com/profile.php?id=61560327763898" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/ahmadshahzad4220/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Ahmad-Shahzada" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FaGithub />
          </a>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
    </Sectionwraper>
    </div>
  );
}
