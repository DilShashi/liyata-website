import React from 'react';
import Link from 'next/link';

function Cart() {
  return (
    <div>
      <Link href="/cart">
        {/* Cart icon with drop shadow */}
        <img
          src="/cart.png"
          alt="Cart Icon"
          width={70}
          height={70}
          className="drop-shadow-md object-contain"
        />
      </Link>
    </div>
  );
}

export default Cart;
