"use client";

import React from "react";
import Button from "../button/Button";

interface Project {
  image: string;
  title: string;
  year: string;
  description: string;
  link: string;
}

const ProjectsContent: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <section className="container mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-10 text-center">
        All Projects
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 sm:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                draggable={false}
              />
            </a>
            <div className="flex flex-col gap-2 p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold uppercase text-gray-800">{project.title}</h2>
                <span className="text-xs text-gray-500">{project.year}</span>
              </div>
              <p className="text-gray-600 text-sm">{project.description}</p>
              <div className="mt-4">
                <Button color="black" href={project.link}>
                  View Project
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsContent;