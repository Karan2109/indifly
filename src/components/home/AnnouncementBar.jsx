'use client';

import React from 'react';

const AnnouncementBar = () => {
  return (
    <div 
      className="text-white text-center py-2 px-4 text-xs md:text-sm relative z-50"
      style={{ background: 'linear-gradient(90deg, #024397 0%, #E04A00 100%)' }}
    >
      <p>
        Get your business up & running with our unparalleled expertise | Use Code:{' '}
        <span className="font-semibold">Welcomeind.</span>
      </p>
    </div>
  );
};

export default AnnouncementBar;
