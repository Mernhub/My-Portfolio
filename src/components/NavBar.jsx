import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import HamburgerMenu from "./Hamburger";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-4 lg:p-0 shadow-md relative z-50 ">
      {/* Hamburger Menu for Mobile - Hidden on screens larger than 700px */}
      <div className="md:hidden">
        <HamburgerMenu className="w-[100vw] h-[50vh] z-50" />
      </div>
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home" className="mx-2">
          <img src="../public/logo.png" alt="logo" className="w-20 h-auto lg:w-28" />
        </a>
      </div>


      
      <div className="md:fixed top-0 left-0 md:mt-8 hidden  w-full md:flex justify-center z-50">
        <div className="flex items-center">
          {["Home", "Projects", "Services", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item}`}
              className="border-2 border-purple-800  p-2 rounded-xl text-base mx-3 lg:text-lg text-white hover:bg-purple-800 transition-colors duration-300"
              whileHover={{ color: "white" }} // Purple on hover
              transition={{ duration: 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center gap-3 text-lg lg:text-xl">
        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
          whileHover={{ color: "#0A66C2" }} // LinkedIn original color
          transition={{ duration: 0.1 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
          whileHover={{ color: "#333" }} // GitHub original color
          transition={{ duration: 0.1 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-500 hover:text-pink-500 transition-colors duration-300"
          whileHover={{ color: "#E1306C" }} // Instagram original color
          transition={{ duration: 0.1 }}
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
          whileHover={{ color: "#1877F2" }} // Facebook original color
          transition={{ duration: 0.1 }}
        >
          <FaFacebook />
        </motion.a>
      </div>
    </nav>
  );
};

export default NavBar;
