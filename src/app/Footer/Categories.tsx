'use client'

import React from 'react';
import Link from 'next/link'; // Import Next.js Link component

function Categories() {
  return (
    <div>
      {/* CATEGORIES Section */}
      <div
        style={{
          position: 'absolute',
          top: '3840px',
          left: '112px',
          width: '167px',
          height: '34px',
          fontFamily: 'Roboto',
          fontSize: '28px',
          fontWeight: 'bold',
          color: 'white',
          textTransform: 'uppercase',
        }}
      >
        CATEGORIES
      </div>

      {/* Categories List */}
      <div
        style={{
          position: 'absolute',
          top: '3903px',
          left: '101px',
          width: '228px',
          height: '262px',
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
          <li><Link href="/awards-plaque"><span className="category-link">Awards & Plaques</span></Link></li>
          <li><Link href="/medals"><span className="category-link">Medals</span></Link></li>
          <li><Link href="/badges"><span className="category-link">Badges</span></Link></li>
          <li><Link href="/key-tags"><span className="category-link">Key Tags</span></Link></li>
          <li><Link href="/name-boards"><span className="category-link">Name Boards</span></Link></li>
          <li><Link href="/ties"><span className="category-link">Ties</span></Link></li>
          <li><Link href="/opening-plaques"><span className="category-link">Opening Plaques</span></Link></li>
          <li><Link href="/officer-sash-waist-belt"><span className="category-link">Officer Sash Waist Belt</span></Link></li>
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

export default Categories;
