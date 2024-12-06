import React from 'react';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="/">
      {/* Image of the logo */}
      <img
        src="/logo.png"
        alt="Logo"
        width={208}
        height={140}
      />
    </Link>
  );
}

export default Logo;
