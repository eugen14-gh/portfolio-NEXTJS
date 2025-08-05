import React from 'react';
import Head from 'next/head';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';


const HomePage: React.FC = () => {
  return (
    <div className="bg-black">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio - Eugen14" />
      </Head>

      <Header />

      {/* Main content container */}
      <div className=' bg-white relative z-20 rounded-b-4xl pb-48 overflow-hidden'>
        <main className="container mx-auto px-4 grid grid-cols-12 gap-8 relative min-h-screen">
          {/* Grid Overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10"
          >
            {/* Outer vertical lines */}
            <div className="absolute left-0 top-0 h-full w-px bg-gray-300 opacity-60" />
            <div className="absolute right-0 top-0 h-full w-px bg-gray-300 opacity-60" />
            <div className="absolute top-0 h-full w-px bg-gray-300 opacity-40" style={{ left: '25%' }} />
            <div className="absolute top-0 h-full w-px bg-gray-300 opacity-40" style={{ left: '50%' }} />
            <div className="absolute top-0 h-full w-px bg-gray-300 opacity-40" style={{ left: '75%' }} />
          </div>

          {/* Hero Section */}
          <section className="col-span-12">
            <Hero />
          </section>

          <Projects/>
          <About/>

        </main>
      </div>
      <Contact/>
      <Footer />
      {/* Sticky black footer outside the container */}
    </div>
  );
};

export default HomePage;