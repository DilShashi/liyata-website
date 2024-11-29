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
          <li><Link href="/about-us">About Us</Link></li>
          <li><Link href="/contact-us">Contact Us</Link></li>
          <li><Link href="/privacy-policy">Privacy Policy</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Liyata;
