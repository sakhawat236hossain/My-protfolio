import React, { useState } from "react";
import { Link } from "react-scroll";
import { CgMenuRight, CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { id: 1, name: "Home", to: "home" },
    { id: 2, name: "About", to: "about" },
    { id: 3, name: "Projects", to: "projects" },
    { id: 4, name: "Skills", to: "skills" },
    { id: 5, name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold text-white cursor-pointer drop-shadow-lg">
          Sakhawat
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-white">
          {navLinks.map((link) => (
            <li key={link.id} className="relative group">
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="text-yellow-300 font-bold underline decoration-2 underline-offset-4"
                className="cursor-pointer transition-all duration-300 hover:text-yellow-300 hover:underline hover:underline-offset-4"
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Resume Button */}
          <li>
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1hEZ0Rr420mIkzlZSyvDFskFOHb1ICcY2/view?usp=drive_link",
                  "_blank"
                )
              }
              className="px-6 py-2 bg-yellow-300 text-purple-700 font-semibold 
               rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 
               transition-all duration-300"
            >
              Resume
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer text-white"
          onClick={toggleMenu}
        >
          {isOpen ? <CgClose size={28} /> : <CgMenuRight size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 shadow-lg transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-screen py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 font-medium text-white">
          {navLinks.map((link) => (
            <li key={link.id} className="cursor-pointer hover:text-yellow-300">
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={toggleMenu}
                activeClass="text-yellow-300 font-bold underline decoration-2 underline-offset-4"
                className="text-lg transition-all duration-300 hover:underline hover:underline-offset-4"
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Resume Button Mobile */}
          <li>
            <a
              href="#"
              className="px-6 py-2 bg-yellow-300 text-purple-700 font-semibold rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 transform transition-all duration-300"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
