import React from 'react';
import Head from 'next/head';
import Footer from '../../components/footer/Footer';
import Contact from '../../components/contact/Contact';
import Header from '../../components/header/Header';
import DetailsContent from '../../components/detailscontent/DetailsContent';

export default async function ProjectDetails({
  params,
}: { 
  params: Promise < { projectid: string } >;
}) {
  const { projectid } = await params;
  return (
   <div className='bg-black'> 
      <Head>
        <title>My Portfolio : About</title>
        <meta name="description" content="Welcome to my personal portfolio." />
      </Head>

      <Header />


      {/* Main content container */}
      <div className=' bg-white relative z-20 rounded-b-4xl pb-48 overflow-hidden'>
        <main className="container mx-auto px-4 grid grid-cols-12 gap-8 mb-40 md:mb-0 min-h-svh">
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
          <DetailsContent projectid={projectid} />
        </main>
      </div>

      <Contact/>
      <Footer />


    </div>
  );
} 