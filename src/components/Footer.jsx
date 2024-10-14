import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-stone-600 text-white py-8 text-center">
      
     <div className="mb-4 flex justify-center space-x-6">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
          <FaGithub size={24} />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
          <FaInstagram size={24} />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
          <FaLinkedin size={24} />
        </a>
      </div>

      <p className="text-gray-400 text-sm">&copy; 2024 M. Abdullah. All Rights Reserved.</p>

      
    </footer>
  );
}

export default Footer;

