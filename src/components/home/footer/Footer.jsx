'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <footer 
      className="relative text-white py-12 md:py-16 overflow-hidden"
      style={{ backgroundColor: '#1A2B5B' }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Column 1 - Company Info */}
          <div data-aos="fade-up">
            {/* Logo */}
            <div className="mb-4 relative z-20">
              <Image
                src="/indiFly_Logo.png"
                alt="IndiFly Logo"
                width={100}
                height={50}
                className="object-contain"
                priority
                unoptimized
              />
            </div>
            
            {/* Tagline */}
            <p className="text-lg font-bold mb-4">
              Building <span style={{ color: '#E04A00' }}>Ventures</span>, Building <span style={{ color: '#E04A00' }}>Nation</span>.
            </p>
            
            {/* Description */}
            <p className="text-gray-200 text-sm mb-6 leading-relaxed">
              A venture builder empowering mission-driven founders with resources, functional expertise and strategic partnerships to <span style={{ color: '#E04A00' }}>dream, build, and grow.</span>
            </p>
            
            {/* Connect with us */}
            <div>
              <p className="text-sm font-semibold mb-3 text-white">Connect with us</p>
              {/* Connected pill-shaped social icons - single continuous white container */}
              <div className="inline-flex bg-white rounded-full overflow-hidden">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="LinkedIn"
                  style={{ color: '#1A2B5B' }}
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Twitter"
                  style={{ color: '#1A2B5B' }}
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Facebook"
                  style={{ color: '#1A2B5B' }}
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Instagram"
                  style={{ color: '#1A2B5B' }}
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Home Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-lg font-bold mb-4">Home</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-200 hover:text-orange-400 transition-colors">
                  About inCORE
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-200 hover:text-orange-400 transition-colors">
                  Contact US
                </a>
              </li>
              <li>
                <a href="#stories" className="text-gray-200 hover:text-orange-400 transition-colors">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="#about-indifly" className="text-gray-200 hover:text-orange-400 transition-colors">
                  About IndiFly
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - InCore Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-lg font-bold mb-4">InCore</h4>
            <ul className="space-y-2">
              <li>
                <a href="#insurge" className="text-gray-200 hover:text-orange-400 transition-colors">
                  InSurge (Marketing & Growth)
                </a>
              </li>
              <li>
                <a href="#instack" className="text-gray-200 hover:text-orange-400 transition-colors">
                  InStack (Tech & Product)
                </a>
              </li>
              <li>
                <a href="#involve" className="text-gray-200 hover:text-orange-400 transition-colors">
                  InVolve (HR & Culture)
                </a>
              </li>
              <li>
                <a href="#insure" className="text-gray-200 hover:text-orange-400 transition-colors">
                  InSure (Legal & Compliance)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Quick Links */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-lg font-bold mb-4">Quick links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#insights" className="text-gray-200 hover:text-orange-400 transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-200 hover:text-orange-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-200 hover:text-orange-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#sitemap" className="text-gray-200 hover:text-orange-400 transition-colors">
                  SiteMap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Large "Badhna Aasaan Hai" text at bottom - flush with bottom, no padding */}
      <div 
        className="absolute bottom-0 left-0 w-full text-center pointer-events-none"
        style={{
          fontSize: 'clamp(3rem, 8vw, 8rem)',
          fontWeight: 'bold',
          color: 'rgba(255, 255, 255, 0.1)',
          lineHeight: '1',
          paddingBottom: '0',
          marginBottom: '0',
          zIndex: 1,
          width: '100%',
        }}
      >
        Badhna Aasaan Hai
      </div>
    </footer>
  );
};

export default Footer;
