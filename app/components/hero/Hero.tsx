'use client'
import React, { Suspense, useRef, useEffect } from 'react';
import gsap from 'gsap';
import Button from '../button/Button';
import ThreeCanvas from '../three-canvas/ThreeCanvas';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

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
      );
  }, []);

  return (
    <section className="relative col-span-12 min-h-[calc(100vh-80px)] flex-col   px-4 sm:px-0">
      {/* Three.js Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <ThreeCanvas />
        </Suspense>
      </div>
      {/* Foreground Content */}
      <div className="w-full absolute z-10 h-full flex flex-col">
        <div className="flex-1 w-full flex items-center justify-center uppercase">
          <img className="w-80 lg:w-160" src="evgeny.svg"/>
        </div>
        <div className="grid-cols-10 col-start-2  grid items-end justify-between pb-50 lg:pb-30">
          <p ref={pRef} className="text-base max-w-md lg:col-span-5  lg:col-start-1 col-span-12 leading-relaxed text-gray-800">
            Hello, I'm Evgenii, a web designer and developer. I specialize in creating interactive, visually stunning web experiences that engage and inspire your audience.
          </p>
          <div ref={buttonRef} className="col-span-12 lg:col-span-5 lg:justify-end flex py-6">
            <Button href="#projects" className='uppercase text-sm'>
              Scroll down
            </Button>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;