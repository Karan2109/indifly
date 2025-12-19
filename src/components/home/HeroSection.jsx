'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section id="home" className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 min-h-screen">
        <Image
          src="/HeroImage.png"
          alt="Business meeting collaboration"
          fill
          className="object-cover"
          priority
          quality={90}
          style={{ filter: 'grayscale(0.3) brightness(0.7)' }}
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-10 h-screen bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

      {/* Main Content - Vertically Centered in Viewport */}
      <div className="relative z-20 h-screen flex items-center justify-center">
        <div className="w-full container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 text-center" data-aos="fade-up">
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight text-center mx-auto px-2">
              Building <span className="text-orange-500">Ventures,</span> Building <span className="text-orange-500">Nation</span>.
            </h1>

            {/* Sub-heading */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
              A venture builder empowering mission-driven founders with resources, functional expertise and strategic
              partnerships to <span className="text-orange-500 font-semibold">dream, build, and grow.</span>
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
