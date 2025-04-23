import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavbarLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Skills", link: "#skills" },
    { id: 4, name: "My Projects", link: "#projects" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg text-white shadow-md"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-3xl font-bold italic text-transparent bg-clip-text 
          bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 
          animate-pulse drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]"
        >
          {"{ Ahmad }"}
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FiX className="w-8 h-8 text-white transition duration-300" />
          ) : (
            <FiMenu className="w-8 h-8 text-white transition duration-300" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NavbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="text-lg font-medium hover:text-purple-400 transition duration-300"
            >
              {link.name}
            </a>
          ))}
          <button
            className="ml-4 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 
              text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300 shadow-md"
          >
            Contact
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } md:hidden transform transition duration-500 ease-in-out bg-[#801b9c] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-10 pt-16 z-40`}
      >
        {NavbarLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="text-xl font-semibold text-white hover:text-purple-300 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <button
          className="bg-white text-[#801b9c] font-semibold py-2 px-6 rounded-full text-lg hover:bg-gray-200 transition duration-300"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </button>
      </div>
    </header>
  );
}
