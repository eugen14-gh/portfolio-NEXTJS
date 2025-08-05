'use client'
import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/hire', label: 'Hire me' },
];

const socialLinks = [
  { href: 'https://www.linkedin.com/in/yourusername', label: 'LinkedIn' },
  { href: 'https://www.behance.net/yourusername', label: 'Behance' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (menuOpen) {
        gsap.to(mobileMenuRef.current, {
          duration: 0.5,
          height: '100vh',
          opacity: 1,
          ease: 'power3.out',
          pointerEvents: 'auto',
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          duration: 0.5,
          height: 0,
          opacity: 0,
          ease: 'power3.in',
          pointerEvents: 'none',
        });
      }
    }
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className="sticky top-0 w-full uppercase text-sm bg-gray-50 text-gray-800 border-b border-gray-200 z-30"
      id="header"
    >
      <div className="container mx-auto px-4 grid grid-cols-12 gap-8 py-4 items-center">
        {/* Site Branding */}
        <div className="col-span-8 md:col-span-4">
          <a href="http://localhost:3000" className="relative text-gray-700 transition-colors pb-1 group text-base">
            Evg14 
            <span className="animated-underline" aria-hidden="true" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block col-span-4">
          <ul className="flex gap-6 md:gap-12 justify-center">
            {navLinks.map((link) => (
              <li key={link.href} className="relative group">
                <a
                  href={link.href}
                  className="relative text-gray-700 transition-colors pb-1 group"
                >
                  {link.label}
                  <span className="animated-underline" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Contact */}
        <div className="hidden md:flex col-span-4 justify-end">
          <a
            href="mailto:hello_eugen14  @proton.me"
            className="relative text-gray-700 transition-colors pb-1 group"
          >
            Contact
            <span className="animated-underline" aria-hidden="true" />
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="col-span-4 flex md:hidden justify-end">
          <button
            className="flex flex-col justify-center items-center w-8 h-8 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ pointerEvents: 'auto' }}
          >
            <span
              className={`block h-0.5 w-6 bg-gray-800 mb-1 transition-transform duration-300 ${
                menuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-gray-800 mb-1 transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 left-0 w-full bg-gray-50 shadow-md overflow-hidden flex flex-col z-40 md:hidden"
        style={{ height: 0, opacity: 0, pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        <div className="flex-grow flex flex-col justify-center px-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="w-full text-left py-4 my-2 border-b border-gray-200 text-gray-700 transition-colors hover:bg-gray-100 duration-300 transform"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="w-full text-left py-4 my-2 border-b border-gray-200 text-gray-700 transition-colors hover:bg-gray-100 duration-300 transform"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          {/* Social Links */}
          <div className="flex gap-6 py-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition-transform transform hover:scale-95 duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;