
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
        />
      </Link>
    </div>
  );
}

export default Profile;
