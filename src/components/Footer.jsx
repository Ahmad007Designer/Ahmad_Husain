import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'; // ✅ Added FaInstagram

export default function Footer() {
  return (
    <footer className="bg-transparent backdrop-blur-lg text-white shadow-inner border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Logo and Tagline */}
        <div>
          <a
            href="#home"
            className="text-4xl font-extrabold italic bg-clip-text text-transparent 
              bg-gradient-to-r from-purple-300 via-pink-500 to-indigo-400 animate-pulse drop-shadow-lg"
          >
            {"{ Ahmad }"}
          </a>
          <p className="mt-3 text-sm text-gray-300">Made with ❤️ by Ahmad Husain</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-white transition duration-200 ease-in-out">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
          <div className="flex gap-6 justify-center md:justify-start mb-6">
            <a href="https://github.com/Ahmad007Designer" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-[#c744ec] transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ahmad-husain-09312325b/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-[#c744ec] transition">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/__ahmad__oo7/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-[#c744ec] transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-400">
        © 2025 Ahmad Husain. All rights reserved.
      </div>
    </footer>
  );
}
