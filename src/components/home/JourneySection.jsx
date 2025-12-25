'use client';

import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const JourneySection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const [companiesValue, setCompaninesValue] = useState(0)
  const [partnersValue, setPartnersValue] = useState(0)
  const [customersValue, setCustomersValue] = useState(0)
  
  const maxCompaniesCount = 7
  const maxPartnersCount = 3
  const maxCustomersCount = 1.26
  const animationDuration = 3000 // 3 seconds
  const intervalTime = 16 // ~60fps for smooth animation
  const totalSteps = animationDuration / intervalTime

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  // Intersection Observer to detect when section comes into view
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
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(()=>{
    if (!isVisible) return;
    
    const increment = maxCompaniesCount / totalSteps
    const interval = setInterval(()=>{
      setCompaninesValue((prev)=>{
        if(prev >= maxCompaniesCount){
          clearInterval(interval);
          return maxCompaniesCount
        }
        else{
          return Math.min(prev + increment, maxCompaniesCount)
        }
      })
    }, intervalTime)
    return ()=> clearInterval(interval)
  },[isVisible])

  useEffect(()=>{
    if (!isVisible) return;
    
    const increment = maxPartnersCount / totalSteps
    const interval = setInterval(()=>{
      setPartnersValue((prev)=>{
        if(prev >= maxPartnersCount){
          clearInterval(interval);
          return maxPartnersCount
        }
        else{
          return Math.min(prev + increment, maxPartnersCount)
        }
      })
    }, intervalTime)
    return ()=> clearInterval(interval)
  },[isVisible])

  useEffect(()=>{
    if (!isVisible) return;
    
    const increment = maxCustomersCount / totalSteps
    const interval = setInterval(()=>{
      setCustomersValue((prev)=>{
        if(prev >= maxCustomersCount){
          clearInterval(interval);
          return maxCustomersCount
        }
        else{
          return Math.min(prev + increment, maxCustomersCount)
        }
      })
    }, intervalTime)
    return ()=> clearInterval(interval)
  },[isVisible])

  const metrics = [
    {
      label: 'Companies',
      suffix: '+',
      hasGradient: false,
    },
    {
      label: 'Partners',
      suffix: 'L+',
      hasGradient: false,
    },
    {
      label: 'Customers',
      suffix: 'Cr+',
      hasGradient: false,
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="journey" 
      className="relative py-16 md:py-24 overflow-hidden w-full px-4"
      style={{
        backgroundImage: 'url(/JourneyBg.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(95.65deg, #E04A00 29.81%, #FF915C 100%)',
          opacity: 0.9,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center mb-6 flex-wrap relative">
            <div className="relative inline-block" style={{ zIndex: 1 }}>
              <Image
                src="/Path1.png"
                alt="Journey decoration"
                width={480}
                height={80}
                className="object-contain"
                priority
              />
              <span 
                className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap px-2"
                style={{ 
                  color: '#E04A00',
                }}
              >
                Our Journey,
              </span>
            </div>

            <div 
              className="relative inline-block"
              style={{
                marginLeft: '-70px',
                zIndex: 2,
              }}
            >
              <Image
                src="/Path1.png"
                alt="Journey decoration"
                width={350}
                height={80}
                className="object-contain"
                priority
              />
              <span 
                className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap px-2"
                style={{ 
                  color: '#E04A00',
                }}
              >
                Measured
              </span>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-white">
            Metrics that speak of countless stories of growth across <strong>Bharat!</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {metrics.map((metric, index) => {
            let displayValue = 0;
            if (metric.label === 'Companies') {
              displayValue = Math.floor(companiesValue);
            } else if (metric.label === 'Partners') {
              displayValue = Math.floor(partnersValue);
            } else if (metric.label === 'Customers') {
              displayValue = parseFloat(customersValue.toFixed(2));
            }
            
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="rounded-2xl p-6 md:p-8 text-center backdrop-blur-md border-2 border-white"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(1px)',
                }}
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
                  {displayValue}{metric.suffix}
                </div>
                <div className="text-xl md:text-2xl font-semibold text-white">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
