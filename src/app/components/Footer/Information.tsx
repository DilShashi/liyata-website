'use client'

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
          <li><Link href="/shopping-details"><span className="category-link">Shopping Details</span></Link></li>
          <li><Link href="/terms-and-conditions"><span className="category-link">Terms and Conditions</span></Link></li>
          <li><Link href="/privacy-policy"><span className="category-link">Privacy Policy</span></Link></li>
        </ul>
      </div>

      <style jsx>{`
        .category-link {
          color: white;
          text-decoration: none; /* Remove underline */
          transition: color 0.3s, text-decoration 0.3s; /* Smooth transition */
        }
        
        .category-link:hover {
          color: #f39c12; /* Change color on hover (example: yellow) */
          text-decoration: underline; /* Underline text on hover */
        }
      `}</style>
    </div>
  );
}

export default Information;
