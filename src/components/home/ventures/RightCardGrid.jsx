'use client';

import React, { useState } from 'react';
import VentureCard from './VentureCard';

const RightCardGrid = () => {
  const [isHovered, setIsHovered] = useState(null)
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
      <div className="flex">
        {topRowCards.map((card) => (
          <div onMouseEnter={()=>{setIsHovered(card?.id)}} onMouseLeave={()=>{setIsHovered(null)}} key={card.id} className="overflow-visible relative h-full gap-4" style={{ minHeight: 0, width: isHovered === card?.id ? '125%' : '75%', marginRight:10, transition: 'width 0.3s ease' }}>
            <VentureCard
              index={card.id}
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

      <div className="flex">
        {bottomRowCards.map((card) => (
          <div onMouseEnter={() => { setIsHovered(card?.id) }} onMouseLeave={() => { setIsHovered(null) }} key={card.id} className="overflow-visible relative h-full" style={{ minHeight: 0, width: isHovered === card?.id ? '125%' : '75%', marginRight:10, transition: 'width 0.3s ease' }}>
            <VentureCard
              index={card.id}
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
