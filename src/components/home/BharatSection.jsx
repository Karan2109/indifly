'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BharatSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(95.65deg, #01295C 29.81%, #004FB3 100%)',
      }}
      data-aos="fade-up"
    >
      {/* Decorative circular elements */}
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 opacity-20">
        <div className="w-32 h-32 border-2 border-white rounded-full"></div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <div className="w-40 h-40 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-left space-y-6 md:space-y-8">
          {/* First Paragraph */}
          <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed">
            We create platforms and ecosystems for{' '}
            <span
              className="font-bold italic inline-block"
              style={{
                background: 'linear-gradient(90deg, #E5BA9F 0%, #FFFFFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              mission-driven founders
            </span>{' '}
            that cultivate brands bringing about digital inclusion and transformative growth in the emerging regions of
          </p>

          {/* Bharat on separate line */}
          <div className="py-4">
            <span
              className="text-4xl md:text-5xl lg:text-6xl font-bold inline-block"
              style={{
                background: 'linear-gradient(90deg, #FF671F 0%, #FFFFFF 36.72%, #046A38 70.71%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Bharat.
            </span>
          </div>

          {/* Second Paragraph */}
          <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed">
            We are a venture builder co-creating alongside founders in their journey{' '}
            <span className="font-bold">from idea to industry</span> and <span className="font-bold">beyond.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BharatSection;
