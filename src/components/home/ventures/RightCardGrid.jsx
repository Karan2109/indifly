'use client';

import React from 'react';
import VentureCard from './VentureCard';

const RightCardGrid = () => {
  const topRowCards = [
    {
      id: 1,
      title: 'inCORE',
      backgroundColor: '#FF6B00',
      textColor: '#FFFFFF',
      hoverExpand: false,
    },
    {
      id: 2,
      title: 'INDsights',
      backgroundColor: '#3366CC',
      textColor: '#FFFFFF',
      hoverExpand: false,
      italic: true,
    },
  ];

  const bottomRowCards = [
    {
      id: 3,
      subtitle: 'Become our',
      title: 'Partner',
      backgroundColor: '#E6F2FF',
      textColor: '#1A2B5B',
      subtitleColor: '#1A2B5B',
      titleColor: '#3366CC',
      hoverExpand: false,
      arrow: true,
    },
    {
      id: 4,
      subtitle: 'Get in',
      title: 'Touch',
      backgroundColor: 'linear-gradient(121.14deg, #FFFFFF 8.99%, #FFEAE0 100%)',
      textColor: '#FFFFFF',
      subtitleColor: '#1A2B5B',
      titleColor: '#E04A00',
      hoverExpand: false,
      arrow: true,
    },
  ];

  return (
    <div className="flex flex-col gap-4 h-full min-h-[350px] overflow-visible w-full">
      {/* Top Row - Equal width cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-visible w-full flex-1">
        {topRowCards.map((card) => (
          <div key={card.id} className="overflow-visible relative h-full" style={{ minHeight: 0 }}>
            <VentureCard
              title={card.title}
              subtitle={card.subtitle}
              backgroundColor={card.backgroundColor}
              textColor={card.textColor}
              subtitleColor={card.subtitleColor}
              titleColor={card.titleColor}
              hoverExpand={card.hoverExpand}
              arrow={card.arrow}
              italic={card.italic}
            />
          </div>
        ))}
      </div>

      {/* Bottom Row - 65% and 35% width with 1.5px gap */}
      <div className="grid grid-cols-1 md:grid-cols-[65%_35%] gap-4 overflow-visible w-full flex-1">
        {bottomRowCards.map((card) => (
          <div key={card.id} className="overflow-visible relative h-full" style={{ minHeight: 0 }}>
            <VentureCard
              title={card.title}
              subtitle={card.subtitle}
              backgroundColor={card.backgroundColor}
              textColor={card.textColor}
              subtitleColor={card.subtitleColor}
              titleColor={card.titleColor}
              hoverExpand={card.hoverExpand}
              arrow={card.arrow}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightCardGrid;
