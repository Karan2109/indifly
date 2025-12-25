'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const LeftCard = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div 
      className="rounded-3xl relative overflow-visible w-full h-full"
      style={{
        backgroundColor: '#F9F7F5',
        minHeight: '350px',
        transition: 'transform 0.4s ease',
        transformOrigin: 'right bottom',
        transform: isHovered ? 'scale(1.03)' : 'scale(1)',
      }}
      onMouseEnter={()=>{
        setIsHovered(true)
      }}
      onMouseLeave={()=>{
        setIsHovered(false)
      }}
    >
      <div className="p-4 md:p-6 lg:p-8 h-full flex flex-col justify-between relative z-0 min-h-[350px]">
        <div>
          <div 
            className="text-xs md:text-sm font-semibold uppercase mb-1"
            style={{ color: '#1A2B5B' }}
          >
            OUR
          </div>
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3"
            style={{ color: '#3366CC' }}
          >
            Ventures
          </h2>
          <p 
            className="text-sm md:text-base leading-relaxed mb-4 max-w-sm"
            style={{ color: '#333333', width: '65%' }}
          >
            Learn more about our portfolio brands in the <strong>BFSI sector</strong> in India.
          </p>
        </div>
      </div>
      <div
        className="absolute bottom-0"
        style={{
          maxHeight: '80.5%',
          right: "-100px",
          zIndex: 10,
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
  );
};

export default LeftCard;
