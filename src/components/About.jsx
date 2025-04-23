import React, { useState } from "react";
import img_about1 from "/img_about1.png";
import img_about2 from "/img_about2.png";
import img_about from "/img_about.png";

export default function About() {
  const [showFull, setShowFull] = useState(false);
  const toggleContent = () => setShowFull(!showFull);

  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Block */}
        <figure className="relative flex justify-center items-center">
          <div className="absolute h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px] bg-gradient-to-l from-[#6d2897] via-[#6c95f5] to-[#bb61c5] transform rotate-12 rounded-full z-0" />

          <img
            src={img_about1}
            alt="Decorative top"
            className="absolute -top-10 left-6 sm:left-12 w-24 h-24 sm:w-32 sm:h-32 rounded-3xl shadow-lg z-20"
          />
          <img
            src={img_about2}
            alt="Profile"
            className="relative w-36 h-44 sm:w-48 sm:h-64 md:w-60 md:h-80 rounded-lg z-10"
          />
          <img
            src={img_about}
            alt="Decorative bottom"
            className="absolute bottom-0 right-6 sm:right-12 w-20 h-20 sm:w-28 sm:h-28 rounded-3xl shadow-lg z-20"
          />
        </figure>

        {/* Text Block */}
        <article className="relative text-center lg:text-left">
          <div className="absolute w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-40 -top-10 -left-10 z-0" />
          
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold">
            About
            <span className="text-purple-400"> Me</span>
          </h1>
          
          <p className="text-justify text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
            I am a passionate and results-driven Computer Science and Engineering undergraduate
            with a strong foundation in software development and problem-solving.
            With hands-on experience in building full-stack web applications, crafting intuitive UI/UX designs,
            and implementing efficient algorithms, I continuously strive to grow both technically and creatively.
            {!showFull ? (
              <span>...</span>
            ) : (
              <>
                <br /><br />
                I have developed several real-world projects using the MERN stack, Node.js, and frontend
                technologies like React and JavaScript. I am proficient in multiple programming languages
                including C++, Python, and JavaScript, and I consistently challenge myself on coding
                platforms like LeetCode and HackerRank to sharpen my skills.
                <br /><br />
                With a keen eye for detail, a love for clean code, and an eagerness to learn emerging
                technologies, I aim to contribute meaningfully to innovative projects and impactful
                software solutions.
              </>
            )}
          </p>

          <button
            onClick={toggleContent}
            className="inline-flex items-center justify-center border-2 border-white py-2 px-6 rounded-full hover:bg-[#801b9c] hover:shadow-[0_0_30px_rgba(128,0,128,0.7)] transition duration-300 text-sm sm:text-base"
          >
            {showFull ? "Read Less" : "Read More"}
          </button>
        </article>
      </div>
    </section>
  );
}
