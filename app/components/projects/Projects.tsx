"use client"

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../Button/Button';
import projects from "@/data/projects"; // <-- Use the same projects data

const ProjectCard: React.FC<{
  image: string;
  leftHeader: string;
  rightHeader: string;
  link: string;
}> = ({ image, leftHeader, rightHeader, link }) => (
  <div className="flex flex-col h-full">
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-0 overflow-hidden flex flex-col group cursor-pointer h-full"
      tabIndex={0}
    >
      <div className="overflow-hidden z-20">
        <img
          src={image}
          alt={leftHeader}
          className="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-110 pointer-events-none"
          draggable={false}
        />
      </div>
    </a>
    <div className="flex justify-between items-center py-3 bg-white bg-opacity-90">
      <h3 className="text-xs sm:text-sm uppercase text-gray-800">{leftHeader}</h3>
      <span className="text-xs sm:text-sm text-gray-500">{rightHeader}</span>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const gridEl = gridRef.current;
    if (gridEl) {
      gsap.fromTo(
        gridEl.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: gridEl,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section id="projects" className="col-span-12 flex flex-col gap-8 py-12 sm:py-16">
      <h2 className="text-sm uppercase mb-6">Selected Projects</h2>
      <div
        ref={gridRef}
        className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.slice(0, 6).map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            leftHeader={project.title}
            rightHeader={project.year || project.category || ""}
            link={project.link}
          />
        ))}
      </div>
      <div className="flex justify-center md:justify-start mt-8">
        <Button color="white" href="/projects">
          View all projects
        </Button>
      </div>
    </section>
  );
};

export default Projects;