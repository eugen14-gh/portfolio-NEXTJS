"use client"

import React, { useRef, useEffect } from 'react'
import Button from '../button/Button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const el = aboutRef.current
    if (el) {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }
  }, [])

  return (
    <section
      ref={aboutRef}
      id="about"
      className="col-span-12 flex flex-col gap-6 py-16"
    >
      <h2 className="text-sm uppercase mb-4">About me</h2>
      <p className="text-gray-700 font-italiana leading-tight text-2xl md:text-4xl">
        My name is Evgenii, a passionate web developer and designer specializing
        in interactive, visually stunning digital experiences. I love blending
        creativity with technology to deliver unique solutions for clients and users.
      </p>
      <Button href="/about" className="mt-10 w-fit">
        Read more
      </Button>
    </section>
  )
}

export default About

