'use client'

import React from 'react';
import Link from 'next/link';

function Profile() {
  return (
    <div>
      <Link href="/profile">
        {/* Profile icon with drop shadow */}
        <img
          src="/profile.png"
          alt="Profile Icon"
          width={70}
          height={70}
          className="drop-shadow-md object-contain"
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')} // Zoom in on hover
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')} // Zoom out when hover ends
        />
      </Link>
    </div>
  );
}

export default Profile;
