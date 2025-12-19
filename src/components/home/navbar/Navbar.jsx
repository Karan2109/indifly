'use client';

import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      {/* Glassmorphism Navbar Container */}
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl border border-white/30 shadow-lg px-2 sm:px-4 md:px-8 py-2 md:py-2.5">
        <div className="flex items-center justify-between gap-2">
          {/* Logo - Pill shaped with colored text */}
          <div className="flex items-center shrink-0">
            <a
              href="/"
              className="bg-white rounded-full px-3 sm:px-4 md:px-6 py-1.5 md:py-2 flex items-center"
            >
              <span className="text-blue-900 font-bold text-sm sm:text-base md:text-lg">indi</span>
              <span className="text-orange-500 font-bold text-sm sm:text-base md:text-lg">fly</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 md:gap-8 flex-1 justify-center">
            <a
              href="#portfolio"
              className="text-black hover:text-gray-900 transition-colors text-sm md:text-base font-medium"
            >
              Our Portfolio
            </a>
            <a
              href="#expertise"
              className="text-black hover:text-gray-900 transition-colors text-sm md:text-base font-medium"
            >
              InCORE
            </a>
            <a
              href="#insights"
              className="text-black hover:text-gray-900 transition-colors text-sm md:text-base font-medium"
            >
              INDsights
            </a>
            <a
              href="#about"
              className="text-black hover:text-gray-900 transition-colors text-sm md:text-base font-medium"
            >
              About us
            </a>
            <a
              href="#contact"
              className="text-black hover:text-gray-900 transition-colors text-sm md:text-base font-medium"
            >
              Get in Touch
            </a>
          </div>

          {/* Search Icon */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0">
            <button
              className="bg-white rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 flex items-center justify-center hover:bg-gray-50 transition-colors shrink-0"
              aria-label="Search"
            >
              <FaSearch className="text-orange-500 text-xs sm:text-sm md:text-base" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shrink-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/20 space-y-3">
            <a
              href="#portfolio"
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Portfolio
            </a>
            <a
              href="#expertise"
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              InCORE
            </a>
            <a
              href="#insights"
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              INDsights
            </a>
            <a
              href="#about"
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About us
            </a>
            <a
              href="#contact"
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
