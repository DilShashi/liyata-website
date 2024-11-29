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
          <li><Link href="/awards-plaque">Awards & Plaques</Link></li>
          <li><Link href="/medals">Medals</Link></li>
          <li><Link href="/badges">Badges</Link></li>
          <li><Link href="/key-tags">Key Tags</Link></li>
          <li><Link href="/name-boards">Name Boards</Link></li>
          <li><Link href="/ties">Ties</Link></li>
          <li><Link href="/opening-plaques">Opening Plaques</Link></li>
          <li><Link href="/officer-sash-waist-belt">Officer Sash Waist Belt</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Categories;
