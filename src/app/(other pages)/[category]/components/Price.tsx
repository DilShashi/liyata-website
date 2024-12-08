'use client';

import React, { useState } from 'react';

function Price({ onPriceRangeChange }: { onPriceRangeChange: (min: number | null, max: number | null) => void }) {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleApply = () => {
    // Convert min and max price to numbers and pass them to the parent (Right.tsx)
    const min = minPrice ? parseFloat(minPrice) : null;
    const max = maxPrice ? parseFloat(maxPrice) : null;
    onPriceRangeChange(min, max);

    // Clear input values
    setMinPrice('');
    setMaxPrice('');
  };

  return (
    <div
      className="relative"
      style={{
        position: 'absolute',
        top: '1000px',
        left: '112px',
        width: '325px',
        height: '400px',
      }}
    >
      {/* Header Section */}
      <div>
        <h1
          className="text-[32px] font-medium leading-[60%] text-black drop-shadow-md mb-4"
          style={{ fontFamily: 'Roboto' }}
        >
          PRICE
        </h1>
        <div
          className="mt-2"
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#65707B',
            boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.12)',
          }}
        ></div>
      </div>

      {/* Price Filtering Section */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '30px',
          marginBottom: '30px',
        }}
      >
        {/* Min Price Input */}

        <div style={{ position: 'relative' }}>
         <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            style={{
              width: '140px',
              height: '50px',
              borderRadius: '10px',
              border: '1px solid #9199A1',
              paddingLeft: '10px',
              fontFamily: 'Roboto',
              fontSize: '22px',
              color: '#65707B',
            }}
          />
        </div>

        {/* Label Between Inputs */}
        <div
          style={{
            margin: '0 10px',
            fontFamily: 'Roboto',
            fontSize: '22px',
            color: 'black',
          }}
        >
          to
        </div>

        {/* Max Price Input */}
        <div style={{ position: 'relative' }}>
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            style={{
              width: '140px',
              height: '50px',
              borderRadius: '10px',
              border: '1px solid #9199A1',
              paddingLeft: '10px',
              fontFamily: 'Roboto',
              fontSize: '22px',
              color: '#65707B',
            }}
          />
        </div>
      </div>

      {/* Apply Button */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        <button
          onClick={handleApply}
          style={{
            width: '150px',
            height: '50px',
            backgroundColor: '#3385FF',
            color: 'white',
            fontFamily: 'Roboto',
            fontSize: '22px',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#F39C12')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#3385FF')}
        >
          APPLY
        </button>
      </div>
      <div>
    </div>
    </div>
  );
}

export default Price;
