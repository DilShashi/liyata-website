'use client'; // Mark this component as a client component

import React from 'react';
import { useRouter } from 'next/navigation'; // Import from next/navigation

function Reset() {
  const router = useRouter();

  return (
    <div
      style={{
        position: 'absolute',
        top: '850px',
        left: '112px',
        width: '321px',
        height: '135px',
      }}
    >
      {/* Flex container for horizontal alignment */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between', // Space between the two labels
          alignItems: 'center', // Align items vertically in the center
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        {/* Text label 1 */}
        <div
          style={{
            fontSize: '22px',
            fontWeight: '400', // Regular
            lineHeight: '40px',
            color: 'black',
            textAlign: 'left',
          }}
        >
          Refind By
        </div>

        {/* Text label 2 */}
        <div
          onClick={() => router.push('/all-categories/all-categories')} // Navigate to "all categories" page
          style={{
            fontSize: '22px',
            fontWeight: '700', // Bold
            lineHeight: '40px',
            color: 'black',
            textAlign: 'right',
            cursor: 'pointer',
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = '#3385FF')} // Change to blue on hover
          onMouseOut={(e) => (e.currentTarget.style.color = 'black')} // Revert to black
        >
          Clear All
        </div>
      </div>
    </div>
  );
}

export default Reset;
