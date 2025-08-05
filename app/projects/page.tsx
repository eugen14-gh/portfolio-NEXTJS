"use client";

import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Contact from "../components/contact/Contact";
import projects from "@/data/projects";
import Button from "../components/button/Button";
import gsap from "gsap";

export default function ProductList() {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      gsap.fromTo(
        listRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
        }
      );
    }
  }, []);

  return (
    <div className="bg-black">
      <Head>
        <title>My Portfolio : About</title>
        <meta name="description" content="Welcome to my personal portfolio." />
      </Head>

      <Header />

      {/* Main content container */}
      <div className="bg-white relative z-20 rounded-b-4xl pb-48 overflow-hidden">
        <main className="container mx-auto px-4 grid grid-cols-12 gap-8 mb-40 md:mb-0 min-h-svh">
          {/* Grid Overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10"
          >
            {/* Outer vertical lines */}
            <div className="absolute left-0 top-0 h-full w-px bg-gray-300 opacity-60" />
            <div className="absolute right-0 top-0 h-full w-px bg-gray-300 opacity-60" />
            <div className="absolute top-0 h-full w-px bg-gray-300 opacity-40" style={{ left: "25%" }} />
            <div className="absolute top-0 h-full w-px bg-gray-300 opacity-40" style={{ left: "50%" }} />
            <div className="absolute top-0 h-full w-px bg-gray-300 opacity-40" style={{ left: "75%" }} />
          </div>

          {/* Projects Section */}
          <section className="col-span-12">
            <h1 className="text-6xl py-20 font-italiana mb-4">Selected projects</h1>
            <ul className="w-full list-none" ref={listRef}>
              {projects.map((project) => (
                <li
                  key={project.id}
                  className="mb-2 border-b-1 text-gray-900 text-sm uppercase border-gray-500 py-6 hover:border-b-gray-200 transition-colors duration-300"
                >
                  <a
                    href={project.link}
                    className="opacity-60 hover:opacity-100 transition-opacity duration-300 grid grid-cols-12 w-full items-center group"
                  >
                    {/* Title */}
                    <p className="w-fit lg:col-span-2 col-span-6">{project.title}</p>
                    {/* Category */}
                    <p className=" flex lg:col-start-4 lg:justify-start justify-end lg:col-span-2 col-span-6">{project.category}</p>
                    {/* Image */}
                    <div className="flex items-center justify-end row-start-2 lg:p-0 py-6 lg:col-start-10 col-span-12 lg:col-span-1">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="lg:w-60 w-full object-cover lg:absolute lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        draggable={false}
                      />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>

      <Contact />
      <Footer />
    </div>
  );
}