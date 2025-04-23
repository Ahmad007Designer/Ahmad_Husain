import React from "react";
import Navbar from "./Navbar";
import imghero from "/imghero.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Ahmad from "/Ahmad_Resume.pdf";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col items-center text-white bg-black">

      {/* Background Gradient */}
      <div className="absolute h-[600px] w-[600px] bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform rotate-45 z-[-1] right-4 top-28 rounded-3xl blur-2xl opacity-50"></div>

      <Navbar />

      <main
  id="home"
  className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl px-4 sm:px-10 lg:px-20 py-16 z-10"
>

        {/* Left Section */}
        <section
          className="w-full md:w-1/2 md:pr-12 text-center md:text-left"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {/* Decorative Circle */}
          <div className="absolute -z-10 w-72 h-72 bg-[#cd3cf5] rounded-full blur-3xl opacity-40 -top-5 -left-10"></div>

          <header>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Ahmad Husain</h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#c744ec] mb-5">
              Full Stack Developer
            </h2>
          </header>

          <p className="text-justify text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
            Passionate CSE undergraduate with strong work ethic, attention to detail, and excellent problem-solving skills. Always eager to learn, adapt, and contribute. Focused on continuous growth and hands-on experience in full-stack development and machine learning. Skilled in various programming languages and technologies, with a keen interest in tackling complex challenges. Enthusiastic about collaborating in dynamic environments and delivering innovative solutions.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center md:justify-start mb-6">
            <a
              href="https://github.com/Ahmad007Designer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl sm:text-4xl hover:text-[#c744ec] transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-husain-09312325b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl sm:text-4xl hover:text-[#c744ec] transition"
            >
              <FaLinkedin />
            </a>
           
          </div>

          {/* Download CV */}
          <a href={Ahmad} download>
            <button className="bg-transparent border-2 border-white hover:bg-[#801b9c] hover:border-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] text-white py-3 px-10 rounded-full text-base sm:text-lg transition duration-300">
              Download CV
            </button>
          </a>
        </section>

        {/* Right Image Section */}
        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="w-full md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0"
        >
          <img
            src={imghero}
            alt="Hero"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl object-cover rounded-xl"
          />
        </figure>
      </main>
    </div>
  );
}
