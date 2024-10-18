import React, { useState, useEffect, useRef } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking outside of it
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Add event listener to detect clicks outside the menu
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative z-50">
      {/* Hamburger Icon */}
      <button
        className="text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-10 h-10" // Larger size for the hamburger icon
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

      {/* Full-Screen Menu */}
      <div
        ref={menuRef} // Attach the ref to the menu
        className={`fixed top-0 left-0 w-[90vw] h-[90vh] bg-black bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] rounded-lg shadow-xl z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-6xl focus:outline-none" // Increased size for visibility
          onClick={toggleMenu}
        >
          &times; {/* This is the 'X' close button */}
        </button>

        {/* Menu Items */}
        <div className="flex flex-col items-center justify-center h-full">
          <a
            href="#"
            className="block px-8 py-6 text-white hover:bg-gray-200 text-3xl" // Larger text for visibility
          >
            Home
          </a>
          <a
            href="#"
            className="block px-8 py-6 text-white hover:bg-gray-200 text-3xl"
          >
            Projects
          </a>
          <a
            href="#"
            className="block px-8 py-6 text-white hover:bg-gray-200 text-3xl"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-8 py-6 text-white hover:bg-gray-200 text-3xl"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
