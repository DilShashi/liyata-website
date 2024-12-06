// File: \liyata-website\src\app\profile\page.tsx
import React from 'react';
import Bg_home from './components/Home/Background'; // Import the background component
import Slider from './components/Home/Slider'; // Import the slider component
import Category from './components/Home/[category]/Category'; // Import the Category component
import Footer from './Footer/Footer';

export default function HomePage() {
  return (
    <div>
      {/* Background behind all content */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Bg_home />
      </div>

      {/* Large "Liyata" header */}
      <div
        className="absolute"
        style={{
          top: '240px',
          left: '94px',
          width: '840px',
          height: '360px',
        }}
      >
        <img
          src="/liyata.png"
          alt="Liyata"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Tagline */}
      <div
        className="absolute"
        style={{
          top: '600px',
          left: '92px',
          width: '1102px',
          height: '96px',
        }}
      >
        <h1
          className="text-white font-roboto font-bold text-[72px] tracking-[2px]"
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          Making Moments Memorable
        </h1>
      </div>

      {/* SHOP BY CATEGORY Title */}
      <div
        className="absolute"
        style={{
          top: '1430px',
          left: '112px',
          width: '531px',
          height: '77px',
          fontFamily: 'Roboto', // Font family
          fontSize: '56px', // Font size
          fontWeight: 'bold', // Font weight
          color: 'black', // Text color
          textTransform: 'uppercase', // Uppercase text
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Drop shadow
          zIndex: 10, // Ensures the title appears in the front
        }}
      >
        SHOP BY CATEGORY
      </div>
      
      {/* Slider */}
      <Slider />

      {/* Category: Awards & Plaques */}
      <Category
        position={{ top: 1568, left: 112 }}
        width={484}
        height={485}
        imageSrc="/award_category.png"
        labelText=" SHOP NOW"
        navigateTo="/[category]" // Add the route for the award category
      />

      {/* Category: Medals */}
      <Category
        position={{ top: 1568, left: 774 }}
        width={484}
        height={485}
        imageSrc="/medal_category.png"
        labelText=" SHOP NOW"
        navigateTo="/[category]" // Add the route for the award category
      />

      {/* Category: Badges */}
      <Category
        position={{ top: 2113, left: 112 }}
        width={484}
        height={485}
        imageSrc="/badge_category.png"
        labelText=" SHOP NOW"
        navigateTo="/[category]" // Add the route for the award category
      />

      {/* Category: Key Tags */}
      <Category
        position={{ top: 2113, left: 774 }}
        width={484}
        height={485}
        imageSrc="/keytag_category.png"
        labelText=" SHOP NOW"
        navigateTo="/[category]" // Add the route for the award category
      />

      {/* Category: Name Boards */}
      <Category
        position={{ top: 2658, left: 112 }}
        width={484}
        height={485}
        imageSrc="/nameboard_category.png"
        labelText=" SHOP NOW"
        navigateTo="/[category]" // Add the route for the award category
      />

      {/* Category: Ties */}
      <Category
        position={{ top: 2658, left: 774 }}
        width={484}
        height={485}
        imageSrc="/tie_category.png"
        labelText=" SHOP NOW"
        navigateTo="/[category]" // Add the route for the award category
      />

      {/* Category: Opening Plaque */}
      <Category
        position={{ top: 3203, left: 112 }}
        width={484}
        height={485}
        imageSrc="/opening_plaque_category.png"
        labelText=" SHOP NOW"
        navigateTo="/[category]" // Add the route for the award category
      />

      {/* Category: Officer sash waist belt */}
      <Category
        position={{ top: 3203, left: 774 }}
        width={484}
        height={485}
        imageSrc="/sash_category.png"
        labelText=" SHOP NOW"
        navigateTo="/[category]" // Add the route for the award category
      />
    </div>
  );
}
