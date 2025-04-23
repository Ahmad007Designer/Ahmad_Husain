import React from "react";
import icon_react from "/icon_react.png";
import tailwindcss from "/tailwindcss.png";
import mongodb from "/mongo.png";
import nodejs from "/node.png";
import next from "/next.png";
import sql from "/sql.png";
import ps from "/ps.png";
import xd from "/xd.png";
import imghero from "/imghero.png";

// Skills Data
const skillsData = [
  {
    id: 1,
    image: icon_react,
    title: "React.js",
    description:
      "Built scalable UIs with reusable components and state management using React.",
  },
  {
    id: 2,
    image: nodejs,
    title: "Node.js",
    description:
      "Implemented server-side logic and APIs using asynchronous, event-driven architecture.",
  },
  {
    id: 3,
    image: next,
    title: "Next.js",
    description:
      "Developed server-rendered React applications with optimized performance and SEO.",
  },
  {
    id: 4,
    image: mongodb,
    title: "MongoDB",
    description:
      "Designed and queried NoSQL databases for scalable and flexible data storage.",
  },
  {
    id: 5,
    image: tailwindcss,
    title: "Tailwind CSS",
    description:
      "Styled modern interfaces with utility-first Tailwind classes for rapid UI development.",
  },

  {
    id: 6,
    image: sql,
    title: "SQL",
    description:
      "Developed cross-platform mobile apps using React Native with native performance.",
  },
  {
    id: 7,
    image: ps,
    title: "Adobe Photoshop",
    description:
      "Designed graphics and UI elements using Adobe Photoshop for web and mobile applications.",
    
  },
  {
    id: 8,
    image: xd,
    title: "Adobe XD",
    description:
      "Created interactive prototypes and wireframes using Adobe XD for user experience design.",
  },
];

const SkillBox = ({ image, title, description }) => (
  <article className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg text-center hover:bg-purple-800 transition-all duration-300">
    <figure className="flex justify-center mb-4">
      <img src={image} alt={title} className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
    </figure>
    <header>
      <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
    </header>
    <p className="text-gray-400 text-sm sm:text-base mt-2">{description}</p>
  </article>
);

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-12 bg-black">
      
      {/* Decorative Background */}
      <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-24 left-1/2 transform -translate-x-1/2" />
      <img src={imghero} alt="Left visual" className="absolute z-10 left-2 top-4 sm:left-16 sm:top-32 transform -rotate-12 w-20 sm:w-28 opacity-60" />
      <img src={imghero} alt="Right visual" className="absolute z-10 right-2 top-4 sm:right-16 sm:top-32 transform rotate-12 w-20 sm:w-28 opacity-60" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl w-full text-center px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header data-aos="fade-up" className="space-y-4 mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            My Expertise <br />
            <span className="text-purple-400">Skills</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
  Proficient in modern web technologies and frameworks. Passionate about crafting responsive and user-friendly applications.
  Continuously learning and adapting to emerging trends in frontend and backend development.
  Experienced in building scalable full-stack applications with clean and maintainable code.
  Skilled in integrating APIs, managing state, and optimizing performance for seamless user experiences.
  Adept at using tools like Git, Adobe Xd, and Postman to streamline development and collaboration.
</p>

        </header>

        {/* Skills Grid */}
        <section data-aos="fade-up" data-aos-delay="300" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill) => (
            <SkillBox key={skill.id} {...skill} />
          ))}
        </section>
      </div>
    </section>
  );
}
