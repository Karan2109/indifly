'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const IntegratedExpertiseSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const services = [
    {
      id: 'inSTACK',
      title: 'in STACK',
      subtitle: 'Product & Technology',
      description:
        'Build, scale, and secure your tech with agile product engineering, cloud, and compliance support tailored for startups.',
      color: 'bg-purple-600',
      position: 'top-left',
    },
    {
      id: 'inSURGE',
      title: 'in SURGE',
      subtitle: 'Marketing & Growth',
      description:
        'From brand positioning to performance campaigns, fuel your visibility and demand to drive sustainable growth.',
      color: 'bg-orange-500',
      position: 'top-right',
    },
    {
      id: 'inSURE',
      title: 'in SURE',
      subtitle: 'People & Culture',
      description:
        'HR that goes beyond hiring—helping you attract, nurture, and retain talent while shaping resilient company culture.',
      color: 'bg-green-600',
      position: 'bottom-left',
    },
    {
      id: 'inVOLVE',
      title: 'in VOLVE',
      subtitle: 'Legal & Compliance',
      description:
        'Simplify the complex. Robust legal frameworks and compliance services to safeguard your venture at every stage.',
      color: 'bg-blue-600',
      position: 'bottom-right',
    },
  ];

  return (
    <section id="expertise" className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-orange-50 to-transparent"></div>

      {/* Subtle geometric shapes */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5">
        <div className="w-full h-full border-4 border-gray-400 rounded-full transform rotate-45"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-5">
        <div className="w-full h-full border-4 border-gray-400 rounded-full transform -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Integrated expertise, delivered at <span className="text-orange-500">every stage.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-2">We don't just advise, we embed.</p>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
            With <span className="font-bold">inSTACK</span>, <span className="font-bold">inSURGE</span>,{' '}
            <span className="font-bold">inSURE</span>, and <span className="font-bold">inVOLVE</span> founders gain
            the muscle of execution alongside strategic leadership guidance.
          </p>
        </div>

        {/* Puzzle pieces layout with IES.png image */}
        <div className="max-w-6xl mx-auto" data-aos="zoom-in">
          <div className="relative">
            {/* IES.png Image as the main visual */}
            <div className="relative w-full h-auto">
              <Image
                src="/IES.png"
                alt="Integrated Expertise - Puzzle pieces layout"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedExpertiseSection;
