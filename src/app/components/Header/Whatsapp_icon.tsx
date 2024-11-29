import React from 'react';
import Link from 'next/link';

function Whatsapp() {
  return (
    <div>
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
        />
      </Link>
    </div>
  );
}

export default Whatsapp;
