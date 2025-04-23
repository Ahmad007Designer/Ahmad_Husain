import React from "react";
import project1 from "/project1.png";
import project2 from "/project2.png";
import project3 from "/project3.png";
import project4 from "/project4.png";
import project5 from "/project5.png";
import project6 from "/project6.png";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <article className="relative w-full bg-black rounded overflow-hidden shadow-lg group">
      <div
        className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl
            opacity-50 -top-5 left-10"
      ></div>

      <div className="relative z-10">
        <figure className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute h-[202px] inset-0 flex items-center justify-center bg-purple-800 bg-opacity-50 opacity-0 
            group-hover:opacity-100 transition-opacity duration-300"
          >
            <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]">
              Live Preview
            </button>
          </a>
        </figure>
        <div className="px-6 py-4">
          <header>
            <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
          </header>
          <p className="text-gray-200 text-base">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const listProjects = [
    {
      image: project1,
      title: "Food Delivery Website",
      description:
        "A full-stack food delivery app using MERN with user authentication, real-time order tracking, and admin dashboard.",
      link: "https://github.com/Ahmad007Designer/Fast-Food-APP",
    },
    {
      image: project2,
      title: "Movie Recommendation System",
      description:
        "Personalized movie suggestions using ML algorithms based on content similarity and user preferences.",
      link: "https://github.com/Ahmad007Designer/Movie_Recommend_System_ML",
    },
    {
      image: project3,
      title: "Data Cleaner & Analyzer",
      description:
        "Interactive platform to clean, visualize, and analyze datasets with ease. Built using Python & Streamlit.",
      link: "https://github.com/Ahmad007Designer/promtly_ai_marketing",
    },
    {
      image: project4,
      title: "Calculator",
      description:
        "A cross-platform calculator app made with Flutter, performing all basic operations with responsive UI.",
      link: "https://github.com/Ahmad007Designer/Flutter-Calculator",
    },
    {
      image: project5,
      title: "Blogify App",
      description:
        "A blogging platform built with MERN, enabling users to post, edit, and delete blogs with secure login.",
      link: "https://github.com/Ahmad007Designer/Blogify-APP",
    },
    {
      image: project6,
      title: "Crime Rate Prediction",
      description:
        "A ML model to forecast crime trends using historical data, featuring visual insights and Flask backend.",
      link: "https://github.com/Ahmad007Designer/Crime-Rate-Predicction",
    },
  ];

  return (
    <main className="bg-black pt-10 pb-16 px-4" id="projects">
      <div className="max-w-7xl mx-auto">
        <section data-aos="fade-up" data-aos-delay="300">
          <header className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">My </span>
              <span className="text-purple-400">Projects</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
              Here’s a showcase of some of the projects I’ve built using React,
              MERN Stack, Flutter, Machine Learning, and more.
            </p>
          </header>
        </section>

        <section
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex flex-wrap justify-center gap-6 mt-8"
        >
          {listProjects.map((project, index) => (
            <div
              key={index}
              className="w-full sm:w-[45%] md:w-[30%] lg:w-[28%] xl:w-[22%] flex justify-center"
            >
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
