"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import projects from "@/data/projects";

export default function DetailsContent({ projectid }: { projectid: string }) {
  const router = useRouter();
  const project = projects.find((p) => p.id === projectid);

  useEffect(() => {
    if (!project) {
      router.replace("/404");
    }
  }, [project, router]);

  if (!project) {
    return null;
  }

  return (
    <section className="col-span-12 flex flex-col md:flex-row py-8 gap-8 items-center md:items-start">
      {/* Text Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-start">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <div className="text-gray-700">{project.descriptionHTML}</div>
      </div>
      {/* Image Side */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-full max-w-xl h-full aspect-vide overflow-hidden relative group  ">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 pointer-events-none"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}