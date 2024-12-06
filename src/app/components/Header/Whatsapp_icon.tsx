'use client'

import React from 'react';
import Link from 'next/link';

function Whatsapp() {
  return (
      <Link 
        href="https://wa.me/94779686160" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {/* Whatsapp icon with drop shadow */}
        <img
          src="/whatsapp.png"
          alt="Whatsapp Icon"
          width={56}
          height={56}
          className="drop-shadow-md object-contain"
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')} // Zoom in on hover
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')} // Zoom out when hover ends
        />
      </Link>
  );
}

export default Whatsapp;
