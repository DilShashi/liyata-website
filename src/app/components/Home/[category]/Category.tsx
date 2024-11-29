'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // Updated import

interface CategoryProps {
  position: { top: number; left: number };
  width: number;
  height: number;
  imageSrc: string;
  labelText: string;
  navigateTo: string; // New prop to navigate dynamically
}

const Category: React.FC<CategoryProps> = ({ position, width, height, imageSrc, labelText, navigateTo }) => {
  const router = useRouter(); // Use useRouter from next/navigation

  const handleClick = () => {
    router.push(navigateTo); // Navigate to the award category page
  };

  return (
    <div>
      {/* Category Image */}
      <div
        className="absolute"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
          width: `${width}px`,
          height: `${height}px`,
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
        }}
      />

      {/* Background Box for "Shop Now" Button */}
      <div
        className="absolute"
        style={{
          top: `${position.top}px`, // Position the background box
          left: `${position.left + 484}px`,
          width: '70px',
          height: '450px',
          background: 'linear-gradient(to bottom, #3385FF 0%, white 100%)',
          boxShadow: 'inset 0 4px 6px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer', // Add cursor style for button hover effect
        }}
        onClick={handleClick}
      >
        {/* SHOP NOW Label */}
        <div
          className="absolute"
          style={{
            top: '30px',
            left: '15px',
            width: '40px',
            height: '304px',
            fontFamily: 'Roboto',
            fontSize: '32px',
            fontWeight: 'bold',
            color: 'black',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            textShadow: 'inset 0 4px 6px rgba(0, 0, 0, 0.1)', // Inner shadow effect
            cursor: 'pointer',
          }}
        >
          {labelText.split('').map((char, index) => (
            <span
              key={index}
              style={{
                display: 'inline-block',
                transform: 'rotate(0deg)', // Rotate each letter 90 degrees counter-clockwise
                marginLeft: index === 0 ? '0' : '10px', // Add spacing between letters
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
