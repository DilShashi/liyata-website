'use client'

import React, { useState } from 'react';
import Image from 'next/image'; // For rendering the search icon

function Search_bar() {
  const [searchText, setSearchText] = useState(''); // State to hold user input

  const handleSearch = () => {
    if (searchText.trim()) {
      // Redirect to the relevant page
      window.location.href = `/search?query=${encodeURIComponent(searchText)}`;
    }
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: '70px',
        left: '353px',
        width: '375px',
        height: '64px',
        borderRadius: '48px 0 0 48px', // Rounded corners on the left side only
        backgroundColor: 'rgba(57, 71, 86, 0.2)', // Background with transparency
        boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.3)', // Inner shadow effect
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
      }}
    >
      {/* Search Icon */}
      <Image
        src="/search.png"
        alt="Search Icon"
        width={25}
        height={25}
        style={{ marginRight: '12px', cursor: 'pointer' }}
        onClick={handleSearch}
      />

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search in Liyata"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleSearch();
        }}
        style={{
          width: '100%',
          height: '26px',
          fontFamily: 'Roboto',
          fontSize: '22px',
          fontWeight: 500, // Medium weight
          color: '#65707B', // Fill color
          backgroundColor: 'transparent', // Transparent background
          border: 'none', // Remove border
          outline: 'none', // Remove focus outline
        }}
      />
    </div>
  );
}

export default Search_bar;
