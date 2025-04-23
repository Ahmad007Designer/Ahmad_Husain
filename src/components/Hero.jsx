import React from "react";
import Navbar from "./Navbar";
import imghero from "/imghero.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Ahmad from "/Ahmad_Resume.pdf";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[600px] sm:min-h-[700px] flex flex-col items-center text-white bg-black">
      
      {/* Background Gradient */}
      <div className="absolute h-[600px] w-[600px] bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform rotate-45 z-[-1] right-4 top-28 rounded-3xl blur-2xl opacity-50"></div>

      <Navbar />

      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-32 pb-10 pt-32 z-10"
      >
        {/* Left Section */}
        <section
          className="flex-1 md:text-left text-center md:mr-28 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {/* Decorative Circle */}
          <div className="absolute -z-10 w-72 h-72 bg-[#cd3cf5] rounded-full blur-3xl opacity-40 -top-5 -left-10"></div>

          <header>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Ahmad Husain</h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#c744ec] mb-3">
              Full Stack Developer
            </h2>
          </header>

          <p className="text-base sm:text-xl text-gray-300 mb-6">
  Passionate CSE undergraduate with strong work ethic, attention to detail, and excellent problem-solving skills. Always eager to learn, adapt, and contribute. Focused on continuous growth and hands-on experience in full-stack development and machine learning. Skilled in various programming languages and technologies, with a keen interest in tackling complex challenges. Enthusiastic about collaborating in dynamic environments and delivering innovative solutions.
</p>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center md:justify-start mb-6">
            <a
              href="https://github.com/Ahmad007Designer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-[#c744ec] transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-husain-09312325b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-[#c744ec] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/__ahmad__oo7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-[#c744ec] transition"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Download CV */}
          <a href={Ahmad} download>
            <button className="bg-transparent border-2 border-white hover:bg-[#801b9c] hover:border-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] text-white py-3 px-10 rounded-full text-lg transition duration-300">
              Download CV
            </button>
          </a>
        </section>

        {/* Right Image Section */}
        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0"
        >
          <img
            src={imghero}
            alt="Hero"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl object-cover rounded-xl border-none"
          />
        </figure>
      </main>
    </div>
  );
}
