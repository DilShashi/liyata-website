import React from 'react';
import Background from './Background'; // Import Background component
import Categories from './Categories'; // Import Categories component
import Information from './Information';
import Liyata from './Liyata';
import Icons from './Icons';

function Footer() {
  return (
    <div>
      {/* Footer Background */}<div className="absolute top-0 left-0 w-full h-full -z-10">
      
        <Background />
      </div>

      {/* Categories Section */}
      <Categories />

      {/* Information Section */}
      <Information />

      {/* Liyata Section */}
      <Liyata />

      {/* Icons Section */}
      <Icons />

      {/* Copyright Label */}
      <div
        style={{
          position: 'absolute',
          top: '4285px', 
          left: '720px',
          transform: 'translateX(-50%)', // Center the text horizontally
          fontFamily: 'Roboto',
          fontSize: '20px',
          fontWeight: 'normal', // Regular font weight
          color: 'white',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Drop shadow effect
        }}
      >
        Copyright © 2024 Liyata, All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
