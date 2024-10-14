import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import HamburgerMenu from "./Hamburger";

const NavBar = () => {
  return (
    <>
      <nav className="flex items-center gap-4 justify-between py-6">
        <HamburgerMenu />

        <div className="flex flex-shrink-0 items-center">
          <a href="/" aria-label="Home" className="mx-2">
            M. Abdullah
          </a>
        </div>
        <div className="display">
          <a href="Home" className="lg:m-8 m-3 text-lg lg:text-xl">
            Home
          </a>
          <a href="Projects" className="lg:m-8 m-3 text-lg lg:text-xl">
            Projects
          </a>
          <a href="Services" className="lg:m-8 m-3 text-lg lg:text-xl">
            Services
          </a>
          <a href="Contact" className="lg:m-8 m-3 text-lg lg:text-xl">
            Contact
          </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-lg lg:text-2xl">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
