"use client"

import React, { use } from 'react'
import Button from '../button/Button'
import gsap from 'gsap'
import { useRef } from 'react'
import { useEffect } from 'react'


const AboutContent: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        pRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.7'
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.7'
      )
      .fromTo(
        imageRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.7'
      );
  }, []);

  return (
    <section id="about" className="col-span-12 h-full flex gap-6 flex-col md:flex-row ">
        <div className='py-10 md:p-0 w-full md:w-[50%] h-full lg:top-50 relative flex flex-col gap-6 '>
            <h2 ref={textRef} className="text-sm uppercase">About me</h2>
            <p ref={pRef} className="text-gray-700 tracking-wide leading-tight text-xl md:text-lg">
                I’m a web designer with 3+ years of experience building clean, user-focused digital experiences — and a growing passion for marketing.
                <br /> <br />
                What started during my studies turned into real-world experience: from university projects to community manager roles where I created content, managed socials, and helped influencers and brands grow online.
                <br /> <br />
                Now, I bring both sides to the table: the eye of a designer and the mind of a marketer. I care about how things look, but even more about how they work, how design supports brand, growth, and connection.
                <br /> <br />
                I'm looking to collaborate with people who value that intersection, where creativity drives real business results.
                <br /> <br />
                Let’s build something that makes sense and stands out.
            </p>
            <div ref={buttonRef}>
              <Button href="mailto:hello_eugen14@proton.me" className='mt-5 w-fit'>
                Contact me now
              </Button>
            </div>

        </div>
        <div ref={imageRef} className="flex w-full max-h-[90vh] md:w-[50%] flex-col h-full">
            <a
                href={"https://example.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-0 overflow-hidden flex flex-col group cursor-pointer h-full"
                tabIndex={0}
            >
                <div className="overflow-hidden z-20">
                <img
                    src={'./about-image.jpg'}
                    alt={'About Image'}
                    className="w- h-full object-cover transition-transform duration-300 group-hover:scale-105 pointer-events-none"
                    draggable={false}
                />
                </div>
                
            </a>
        </div>

    </section>

  )
}

export default AboutContent

