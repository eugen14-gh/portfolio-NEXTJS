import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="sticky bottom-0 text-gray-100 bg-black text-sm uppercase mix-blend-difference font-extralight tracking-wider col-span-12 z-30">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-4 items-center">
        {/* Left: Links */}
        <div className="col-span-1 md:col-span-8 flex flex-col md:flex-row gap-4 md:gap-12">
          <a
            href="https://github.com/eugen14-gh"
            target="_blank"
            rel="noopener noreferrer"
            className="relative transition-colors w-fit pb-1 group "
          >
            GitHub
            <span className="animated-underline" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/evgenii-antonov-29aa0b312 "
            target="_blank"
            rel="noopener noreferrer"
            className="relative transition-colors  w-fit pb-1 group "
          >
            LinkedIn
            <span className="animated-underline" aria-hidden="true" />
          </a>
        </div>
        {/* Right: Text */}
        <div className="col-span-1 md:col-span-4 flex justify-start md:justify-end mt-4 md:mt-0">
          <p className="opacity-50">© {new Date().getFullYear()} evgen14-gh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;