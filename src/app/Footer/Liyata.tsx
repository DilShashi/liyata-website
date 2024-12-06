'use client'

import React from 'react';
import Link from 'next/link'; // Import Next.js Link component

function Liyata() {
  return (
    <div>
      {/* LIYATA Section */}
      <div
        style={{
          position: 'absolute',
          top: '3840px',
          left: '955px',
          width: '91px',
          height: '34px',
          fontFamily: 'Roboto',
          fontSize: '28px',
          fontWeight: 'bold',
          color: 'white',
          textTransform: 'uppercase',
        }}
      >
        LIYATA
      </div>

      {/* Information List */}
      <div
        style={{
          position: 'absolute',
          top: '3903px',
          left: '943px',
          width: '200px',
          height: '92px',
          fontFamily: 'Roboto',
          fontSize: '20px',
          fontWeight: 'normal', // Regular font weight
          color: 'white',
          lineHeight: '2', // Increase line height for more space between lines
        }}
      >
        <ul
          style={{
            paddingLeft: '20px', // Indent the list
            listStyleType: 'circle', // Rounded bullet points
          }}
        >
          <li><Link href="/about-us"><span className="category-link">About Us</span></Link></li>
          <li><Link href="/contact-us"><span className="category-link">Contact Us</span></Link></li>
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

export default Liyata;
