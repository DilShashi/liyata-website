'use client'

import React from 'react';
import { useParams } from 'next/navigation'; // Correct import for useParams in Next.js 13
import Images from '../components/Images';
import Bg_item from '../components/Background';
import Details from '../components/Details';
import CartButton from '../components/CartButton';

const page = () => {
  const params = useParams(); // Using the useParams hook to get params
  const id = params?.id; // Extract the id from params

  if (!id) {
    return <div>Loading...</div>; // Handle loading state or missing param
  }

  return (
    <div>
      {/* Background Component */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Bg_item />
      </div>

      {/* Content Section */}
      <div>
        <Images id={parseInt(id as string)} /> {/* Pass the id to the Images component */}
      </div>

      {/*Details section */}
      <div>
        <Details id={parseInt(id as string)}/>
      </div>

    </div>
  );
};

export default page;
