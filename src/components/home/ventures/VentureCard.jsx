'use client';

import React from 'react';

const VentureCard = ({ 
  index,
  title, 
  subtitle, 
  backgroundColor, 
  textColor,
  subtitleColor,
  titleColor,
  hoverExpand = false,
  arrow = false,
  italic = false
}) => {
  return (
    <div className="w-full h-full overflow-visible relative">
      <div
        className={`
          rounded-3xl flex items-center justify-center relative w-full h-full
          transition-all duration-300 ease-in-out
          ${hoverExpand ? 'md:hover:scale-x-[1.15] md:hover:origin-left md:hover:z-20 md:cursor-pointer' : ''}
        `}
        style={{
          ...(backgroundColor?.includes('gradient') 
            ? { background: backgroundColor }
            : { backgroundColor: backgroundColor }
          ),
          minHeight: '150px',
          transformOrigin: 'left center',
          willChange: hoverExpand ? 'transform' : 'auto',
        }}
      >
        <div 
          className="text-center px-4 py-5 md:px-5 md:py-6 w-full"
        >
          {subtitle && (
            <div 
              className="text-xs md:text-sm font-normal mb-1"
              style={{ color: subtitleColor || textColor }}
            >
              {subtitle}
            </div>
          )}
          <div 
            className={`font-bold text-xl md:text-2xl lg:text-3xl ${subtitle ? '' : 'text-2xl md:text-3xl lg:text-4xl'} ${italic ? 'italic' : ''}`}
            style={{ color: titleColor || textColor }}
          >
            {title}
            {arrow && <span className="ml-2" style={{ color: titleColor || textColor }}>→</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentureCard;
