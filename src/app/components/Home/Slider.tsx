'use client'

import React, { useState, useEffect } from 'react';

const images = [
  '/award_banner.png',
  '/medal_banner.png',
  '/badge_banner.png',
  '/keytag_banner.png',
  '/nameboard_banner.png',
  '/tie_banner.png',
  '/opening_plaque_banner.png',
  '/sash_banner.png',
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionStyle, setTransitionStyle] = useState('transform 0.7s ease-in-out');

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Adjust slide interval as needed (e.g., 3000ms for 3 seconds)
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex === images.length - 1) {
      setTransitionStyle('none'); // No transition for the last to first slide
    } else {
      setTransitionStyle('transform 0.7s ease-in-out'); // Regular transition
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setTransitionStyle('transform 0.7s ease-in-out'); // Regular transition
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{
        position: 'absolute',
        top: '836px',
        left: '112px',
        width: '1216px',
        height: '400px',
      }}
    >
      {/* Slides */}
      <div
        className="flex"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: transitionStyle, // Apply dynamic transition style
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-[1216px] h-[400px] object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#8594;
      </button>
    </div>
  );
}
