'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import LeftCard from './LeftCard';
import RightCardGrid from './RightCardGrid';

const VenturesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section 
      id="ventures" 
      className="overflow-visible z-10 relative -mt-32 md:-mt-40 lg:-mt-48"
      style={{ 
        background: 'linear-gradient(180deg, rgba(7, 23, 44, 0) 0%, #07172C 37.5%)',
        paddingTop: '8rem',
        paddingBottom: '2rem',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl overflow-visible relative">
        <div 
          className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-4 rounded-3xl overflow-visible relative"
          data-aos="fade-up"
        >
          <div className="w-full order-1 lg:order-1 flex h-full relative z-10">
            <LeftCard />
          </div>

          <div className="w-full overflow-visible order-2 lg:order-2 flex h-full relative z-10">
            <RightCardGrid />
          </div>

          <div 
            className="absolute bottom-0 z-30 pointer-events-none hidden lg:block"
            style={{
              width: '50%',
              left: "120px",
              maxHeight: '80%',
            }}
          >
            <Image
              src="/man.png"
              alt="Man"
              width={300}
              height={300}
              className="object-contain"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '300px',
                opacity: 1,
              }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;
