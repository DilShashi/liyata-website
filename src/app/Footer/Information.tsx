import React from 'react';
import Link from 'next/link'; // Import Next.js Link component

function Information() {
  return (
    <div>
      {/* INFORMATION Section */}
      <div
        style={{
          position: 'absolute',
          top: '3840px', // Adjusted to match the provided position
          left: '542px', // Adjusted to match the provided position
          width: '188px',
          height: '34px',
          fontFamily: 'Roboto',
          fontSize: '28px',
          fontWeight: 'bold', // Bold font type
          color: 'white',
          textTransform: 'uppercase', // Uppercase text
        }}
      >
        INFORMATION
      </div>

      {/* Information List */}
      <div
        style={{
          position: 'absolute',
          top: '3903px', // Adjusted to match the provided position
          left: '532px', // Adjusted to match the provided position
          width: '223px',
          height: '92px', // Adjusted height
          fontFamily: 'Roboto',
          fontSize: '20px',
          fontWeight: 'normal', // Regular font weight
          color: 'white',
          lineHeight: '2', // Set line height to 120% for proper spacing
        }}
      >
        <ul
          style={{
            paddingLeft: '20px', // Indent the list
            listStyleType: 'circle', // Rounded bullet points
          }}
        >
          <li><Link href="/shopping-details">Shopping Details</Link></li>
          <li><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
          <li><Link href="/privacy-policy">Privacy Policy</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Information;
