'use client';

import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const IntegratedExpertiseSection = () => {
  const imageContainerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  // Intersection Observer to detect when image section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    if (imageContainerRef.current) {
      observer.observe(imageContainerRef.current);
    }

    return () => {
      if (imageContainerRef.current) {
        observer.unobserve(imageContainerRef.current);
      }
    };
  }, [hasAnimated]);

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

  // Animation delays for each piece
  const pieceAnimations = [
    { delay: 0, transform: 'translate(-100%, -100%)' }, // top-left
    { delay: 200, transform: 'translate(100%, -100%)' }, // top-right
    { delay: 400, transform: 'translate(-100%, 100%)' }, // bottom-left
    { delay: 600, transform: 'translate(100%, 100%)' }, // bottom-right
  ];

  return (
    <section id="expertise" className="bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-orange-50 to-transparent"></div>

      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5">
        <div className="w-full h-full border-4 border-gray-400 rounded-full transform rotate-45"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-5">
        <div className="w-full h-full border-4 border-gray-400 rounded-full transform -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
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

        <div className="max-w-6xl mx-auto" ref={imageContainerRef}>
          <div className="relative w-full" style={{ aspectRatio: '3/2', minHeight: '400px' }}>
            {/* Container for the 4 pieces */}
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              {/* Top Left Piece */}
              <div
                className="absolute top-0 left-0 w-1/2 h-1/2"
                style={{
                  backgroundImage: 'url(/IES.png)',
                  backgroundSize: '200% 200%',
                  backgroundPosition: '0% 0%',
                  backgroundRepeat: 'no-repeat',
                  transform: isVisible ? 'translate(0, 0) scale(1)' : pieceAnimations[0].transform + ' scale(0.8)',
                  opacity: isVisible ? 1 : 0,
                  transition: `transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${pieceAnimations[0].delay}ms, opacity 0.8s ease-out ${pieceAnimations[0].delay}ms`,
                }}
              />

              {/* Top Right Piece */}
              <div
                className="absolute top-0 right-0 w-1/2 h-1/2"
                style={{
                  backgroundImage: 'url(/IES.png)',
                  backgroundSize: '200% 200%',
                  backgroundPosition: '100% 0%',
                  backgroundRepeat: 'no-repeat',
                  transform: isVisible ? 'translate(0, 0) scale(1)' : pieceAnimations[1].transform + ' scale(0.8)',
                  opacity: isVisible ? 1 : 0,
                  transition: `transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${pieceAnimations[1].delay}ms, opacity 0.8s ease-out ${pieceAnimations[1].delay}ms`,
                }}
              />

              {/* Bottom Left Piece */}
              <div
                className="absolute bottom-0 left-0 w-1/2 h-1/2"
                style={{
                  backgroundImage: 'url(/IES.png)',
                  backgroundSize: '200% 200%',
                  backgroundPosition: '0% 100%',
                  backgroundRepeat: 'no-repeat',
                  transform: isVisible ? 'translate(0, 0) scale(1)' : pieceAnimations[2].transform + ' scale(0.8)',
                  opacity: isVisible ? 1 : 0,
                  transition: `transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${pieceAnimations[2].delay}ms, opacity 0.8s ease-out ${pieceAnimations[2].delay}ms`,
                }}
              />

              {/* Bottom Right Piece */}
              <div
                className="absolute bottom-0 right-0 w-1/2 h-1/2"
                style={{
                  backgroundImage: 'url(/IES.png)',
                  backgroundSize: '200% 200%',
                  backgroundPosition: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  transform: isVisible ? 'translate(0, 0) scale(1)' : pieceAnimations[3].transform + ' scale(0.8)',
                  opacity: isVisible ? 1 : 0,
                  transition: `transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${pieceAnimations[3].delay}ms, opacity 0.8s ease-out ${pieceAnimations[3].delay}ms`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedExpertiseSection;
