'use client';

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const OurSectorsSection = () => {
  const [activeTab, setActiveTab] = useState('Payments');
  const [activeSubTab, setActiveSubTab] = useState('Indipe');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  // JSON data structure based on screenshots
  const sectorsData = {
    Payments: {
      Indipe: {
        image: '/OS1.png',
        heading: 'Wealth tech',
        title: 'Seamless wealth creation and digital payments for all',
        description:
          'Empowering individuals with secure, user-friendly financial tools. From UPI transactions to personalized wealth management, we make financial growth accessible to everyone',
        features: [
          'User-friendly mutual fund investments',
          'Secure UPI transactions',
          'Advanced portfolio tracking tools',
          'Personalized financial guidance',
          'Partner program for mutual fund distribution',
        ],
        buttons: [
          { text: 'Install the App', type: 'primary' },
          { text: 'Explore More', type: 'secondary' },
        ],
      },
      Indiconnect: {
        image: '/OS2.png',
        heading: 'B2B Payments',
        title: 'One-stop platform for payments, banking, and compliance',
        description:
          'Designed for SMEs and co-operatives. Indiconnect unifies essential financial services into one seamless stack.',
        features: [
          'UPI, Cards, Wallets, Netbanking',
          'Virtual accounts & payouts',
          'Automated reconciliation',
          'KYC, KVB & credit rating tools',
          'Tailored for businesses & co-operatives',
        ],
        buttons: [
          { text: 'Install the App', type: 'primary' },
          { text: 'Explore More', type: 'secondary' },
        ],
      },
      IndiNXT: {
        image: '/OS3.png',
        heading: 'UPI Infrastructure',
        title: 'UPI infrastructure built for Bharat, ready for the world.',
        description:
          'IndiNXT powers banks, fintechs, and enterprises with secure, scalable, and intelligent payment switching solutions.',
        features: [
          'UPI Acquiring & Issuing Switch',
          'T-OTP Solutions',
          'Fraud & risk management',
          'Merchant management platform',
          'Intelligent routing & high availability',
        ],
        buttons: [
          { text: 'Partner with us', type: 'primary' },
          { text: 'Explore More', type: 'secondary' },
        ],
      },
    },
    'Financial Services': {
      Sec2Pay: {
        image: '/OS4.png',
        heading: 'Whitelabel Fintech Infrastructure',
        title: 'Sec2Pay empowers institutions to launch fintech services under their own brand',
        description:
          'From prepaid cards to payments, lending, and more. A compliant, modular platform to scale financial inclusion.',
        features: [
          'White-label payment solutions',
          'Prepaid cards & wallets',
          'Micro-ATM & AePS',
          'Lending & credit enablement',
          'Enterprise-grade compliance & security',
        ],
        buttons: [
          { text: 'Partner with us', type: 'primary' },
          { text: 'Explore More', type: 'secondary' },
        ],
      },
      IndiKendra: {
        image: '/OS5.png',
        heading: 'Last mile digital banking.',
        title: 'IndiKendra bridges financial access by offering last-mile digital and assisted services',
        description:
          'IndiKendra bridges financial access by offering last-mile digital and assisted services, ensuring inclusion across towns and villages.',
        features: [
          'White-label payment solutions',
          'Prepaid cards & wallets',
          'Micro-ATM & AEPS',
          'Lending & credit enablement',
          'Enterprise-grade compliance & security',
        ],
        buttons: [
          { text: 'Partner with us', type: 'primary' },
          { text: 'Explore More', type: 'secondary' },
        ],
      },
    },
    'ONDC Logistics': {
      Indispeed: {
        image: '/OS6.png',
        heading: 'Smarter Logistics for Bharat',
        title: 'ONDC-powered courier and delivery orchestration platform.',
        description:
          'IndiSpeed enables D2C brands, enterprises, and sellers to ship faster, smarter, and at scale.',
        features: [
          'API-first logistics integration',
          'Bulk dispatch via enterprise dashboard',
          'ONDC-ready multi-channel plugins',
          'Intercity & hyperlocal delivery',
          'Transparent pricing & SLA tracking',
        ],
        buttons: [
          { text: 'Partner with us', type: 'primary' },
          { text: 'Explore More', type: 'secondary' },
        ],
      },
    },
  };

  // Get current sector data
  const currentSector = sectorsData[activeTab];
  const currentSubTab = currentSector?.[activeSubTab];
  const subTabs = currentSector ? Object.keys(currentSector) : [];

  // Reset sub-tab when main tab changes
  useEffect(() => {
    if (currentSector && !currentSector[activeSubTab]) {
      setActiveSubTab(Object.keys(currentSector)[0]);
    }
  }, [activeTab, currentSector, activeSubTab]);

  const tabs = ['Payments', 'Financial Services', 'ONDC Logistics'];

  return (
    <section id="sectors" className=" py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading Section */}
        <div className="text-center mb-12" data-aos="fade-up">
          {/* Main Title with brush stroke background */}
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/Path.png"
                alt="Brush stroke"
                width={450}
                height={105}
                className="object-contain opacity-100"
              />
            </div>
            <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-white px-8 py-2">
              Our Sectors
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-800 mt-4">
            <span className="text-orange-700 font-bold">Integrated</span>,{' '}
            <span className="text-blue-800 font-bold">Inclusive</span>{' '}
            <span className="text-orange-400 font-bold">& Innovative</span>
          </p>

          {/* Description */}
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Equipping diverse brands in multiple sectors with essential resources, expertise, and unwavering support.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                // Reset to first sub-tab when main tab changes
                const firstSubTab = Object.keys(sectorsData[tab])[0];
                setActiveSubTab(firstSubTab);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Content Card */}
        {currentSubTab && (
          <div
            className="rounded-3xl p-6 md:p-10 shadow-2xl"
            style={{
              background: 'linear-gradient(73.45deg, #FECCB2 0%, #FFFFFF 110.01%)',
            }}
            data-aos="fade-up"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Text Content */}
              <div>
                {/* Sub-navigation Tabs */}
                <div className="flex gap-2 mb-6">
                  {subTabs.map((subTab) => (
                    <button
                      key={subTab}
                      onClick={() => setActiveSubTab(subTab)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                        activeSubTab === subTab
                          ? 'bg-blue-900 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {subTab}
                    </button>
                  ))}
                </div>

                {/* Heading */}
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
                  {currentSubTab.heading}
                </h3>

                {/* Main Title */}
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {currentSubTab.title}
                </h4>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">{currentSubTab.description}</p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {currentSubTab.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-orange-500 font-bold mt-1">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {currentSubTab.buttons.map((button, index) => (
                    <button
                      key={index}
                      className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                        button.type === 'primary'
                          ? 'bg-orange-500 text-white hover:bg-orange-600'
                          : 'bg-white text-orange-500 hover:bg-gray-50 border-2 border-orange-500'
                      }`}
                    >
                      {button.text}
                      {button.type === 'secondary' && <span>→</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="relative h-[500px] md:h-[600px]">
                {/* Man Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={currentSubTab.image}
                    alt="Business professional"
                    width={400}
                    height={600}
                    className="object-contain h-full w-auto z-10"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurSectorsSection;
