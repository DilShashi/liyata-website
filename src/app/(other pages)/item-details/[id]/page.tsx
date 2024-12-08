'use client'

import React from 'react';
import { useParams } from 'next/navigation'; // Correct import for useParams in Next.js 13
import Images from '../components/Images';

const page = () => {
  const params = useParams();  // Using the useParams hook to get params
  const id = params?.id;  // Extract the id from params

  if (!id) {
    return <div>Loading...</div>;  // Handle loading state or missing param
  }

  return (
    <div>
      <Images id={parseInt(id as string)} /> {/* Pass the id to the Images component */}
    </div>
  );
};

export default page;




