'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from './HeroSection';
import VenturesSection from './ventures/VenturesSection';
import BharatSection from './BharatSection';
import OurSectorsSection from './OurSectorsSection';
import IntegratedExpertiseSection from './IntegratedExpertiseSection';
import JourneySection from './JourneySection';
import InsightsSection from './InsightsSection';
import ContactSection from './ContactSection';

const HomeIndex = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <main>
      <HeroSection />
      <VenturesSection />
      <BharatSection />
      <OurSectorsSection />
      <IntegratedExpertiseSection />
      <JourneySection />
      <InsightsSection />
      <ContactSection />
    </main>
  );
};

export default HomeIndex;
