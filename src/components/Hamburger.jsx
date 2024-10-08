import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ham">
      {/* Hamburger Icon */}
      <button
        className="text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Menu Items */}
      <div
        className={` bg-black  ${
          isOpen ? "block" : "hidden"
        } absolute left-0 mt-2 w-48 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] rounded-lg shadow-xl`}
      >
        <a
          href="#"
          className="block px-4 py-2 text-white hover:bg-gray-200"
        >
          Home
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-white hover:bg-gray-200"
        >
          Projects
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-white hover:bg-gray-200"
        >
          Services
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-white hover:bg-gray-200"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
