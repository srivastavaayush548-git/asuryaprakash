import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MenuBar from './MenuBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleClose = () => setIsMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-black text-center z-50 shadow-md h-12 md:h-14">
        <div className="flex items-center justify-center relative h-full">

          {/* Hamburger / Close Icon */}
          <button
            onClick={toggleMenu}
            className="absolute left-0 top-0 bottom-0 flex items-center justify-center bg-[#00bff9] hover:bg-[#00a4d6] px-2 md:px-3 shadow-md 
            transition-colors duration-200 ease-in-out cursor-pointer h-full"
            aria-label="Toggle menu"
            style={{ aspectRatio: "1 / 1" }}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 md:w-6 md:h-6 text-black" />
            ) : (
              <Menu className="w-5 h-5 md:w-6 md:h-6 text-white" />
            )}
          </button>

          {/* Title */}
          <a
            href="/"
            className="tracking-[0.2em] md:tracking-[0.5em] text-sm sm:text-base md:text-2xl lg:text-3xl font-semibold uppercase text-white select-none cursor-pointer focus:outline-none px-2"
            tabIndex={0}
            aria-label="Go to home"
          >
            RAJAT SHARMA
          </a>
        </div>
      </header>

      <MenuBar isOpen={isMenuOpen} onClose={handleClose} />
    </>
  );
};

export default Header;
