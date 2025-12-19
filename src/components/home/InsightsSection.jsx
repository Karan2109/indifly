'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const InsightsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const articles = [
    {
      id: 1,
      title: 'Lorem Ipsum blog Title',
      description: 'Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title',
      image: '/Blog.png',
    },
    {
      id: 2,
      title: 'Lorem Ipsum blog Title',
      description: 'Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title',
      image: '/Blog.png',
    },
    {
      id: 3,
      title: 'Lorem Ipsum blog Title',
      description: 'Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title',
      image: '/Blog.png',
    },
  ];

  return (
    <section 
      id="insights" 
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: '#FFEDE4' }}
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-orange-300 transform rotate-45 rounded-lg"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-4 border-orange-300 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 border-4 border-orange-300 transform rotate-12"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 border-4 border-orange-300 rounded-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading with Path.png background */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <div className="relative inline-block">
            <Image
              src="/Path.png"
              alt="INDsights decoration"
              width={400}
              height={100}
              className="object-contain"
              priority
            />
            <h2 
              className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            >
              INDsights
            </h2>
          </div>
        </div>

        {/* Article cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <div
              key={article.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                  {article.description}
                </p>
              </div>
              
              {/* Blog Image */}
              <div className="px-6 pb-4">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={250}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Read more button */}
              <div className="px-6 pb-6">
                <button 
                  className="w-full py-3 px-6 bg-white border-2 border-gray-800 rounded-full font-semibold text-gray-900 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  Read more <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
