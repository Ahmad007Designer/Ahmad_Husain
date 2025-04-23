import React from "react";
import project1 from "/project1.png";
import project2 from "/project2.png";
import project3 from "/project3.png";
import project4 from "/project4.png";
import project5 from "/project5.png";
import project6 from "/project6.png";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <article className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group">
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
      description: "A full-stack food delivery web app built using the MERN stack (MongoDB, Express, React, Node.js). Features include dynamic menu browsing, cart management, user authentication, and seamless order placement.",
      link: "https://github.com/Ahmad007Designer/Fast-Food-APP",
    },
    
    {
      image: project2,
      title: "Movie Recommendation System",
      description: "A movie recommendation system that suggests movies based on user preferences and ratings. Built using Python and Flask, it utilizes machine learning algorithms to provide personalized recommendations.",
      link: "https://github.com/Ahmad007Designer/Movie_Recommend_System_ML",
    },
    {
      image: project3,
      title: "Data Cleaner & Data Analyzer",
      description: "A data cleaning and analysis tool that helps users preprocess and analyze datasets. Built using Python, it provides functionalities for data visualization, cleaning, and statistical analysis.",
      link: "https://github.com/Ahmad007Designer/promtly_ai_marketing",
    },
    {
      image: project4,
      title: "Calculator",
      description: "A simple calculator application built using Flutter. It supports basic arithmetic operations and has a user-friendly interface.",
    
      link: "https://github.com/Ahmad007Designer/Flutter-Calculator",
    },
    {
      image: project5,
      title: "Blogify App",
      description: "A blogging platform that allows users to create, read, update, and delete blog posts. Built using React, Mongodb and Node.js, it features user authentication and a responsive design.",
      link: "https://github.com/Ahmad007Designer/Blogify-APP",
    },
    {
      image: project6,
      title: "Crime Rate Prediction",
      description: "A crime rate prediction system that uses machine learning algorithms to predict crime rates based on historical data. Built using Python and Flask, it provides visualizations and insights into crime trends.",
      link: "https://github.com/Ahmad007Designer/Crime-Rate-Predicction",
    },
  ];
  return (
    <main className="p-4" id="projects" >
      <section data-aos="fade-up" data-aos-delay="300">
        <header className="text-center">
          <h1 className="text-3xl text-white sm:text-4xl font-bold mb-6">
            My <span className="text-purple-400">Projects</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum,
            veniam?
          </p>
        </header>
      </section>
      <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="flex flex-wrap gap-4 justify-center mt-6"
      >
        {listProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </main>
  );
}
