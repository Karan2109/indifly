'use client';

import React from 'react';
import Image from 'next/image';

const LeftCard = () => {
  return (
    <div 
      className="rounded-3xl relative overflow-visible w-full h-full"
      style={{
        backgroundColor: '#F9F7F5',
        minHeight: '350px',
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
            style={{ color: '#333333' }}
          >
            Learn more about our portfolio brands in the <strong>BFSI sector</strong> in India.
          </p>
        </div>

        <div className="mt-auto">
          <button
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: '#4A90E2' }}
          >
            Know More →
          </button>
        </div>
      </div>

    </div>
  );
};

export default LeftCard;
