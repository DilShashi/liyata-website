'use client'

import React, { useState } from 'react';

function Dropdown_list() {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const [selectedCategory, setSelectedCategory] = useState('All Categories'); // State for selected category

  // List of categories
  const categories = [
    { name: 'All Categories', link: '/all-categories' },
    { name: 'Awards & Plaques', link: '/awards-plaque' },
    { name: 'Medals', link: '/medals' },
    { name: 'Badges', link: '/badges' },
    { name: 'Key Tags', link: '/key-tags' },
    { name: 'Name Boards', link: '/name-boards' },
    { name: 'Ties', link: '/ties' },
    { name: 'Opening Plaques', link: '/opening-plaques' },
    { name: 'Officer Sash Waist Belt', link: '/officer-sash-waist-belt' },
  ];

  return (
    <div>
      {/* Dropdown Button */}
      <div
        style={{
          position: 'absolute',
          top: '70px',
          left: '725px',
          width: '300px',
          height: '64px',
          borderRadius: '0px 48px 48px 0px',
          backgroundColor: 'rgba(101, 112, 123, 0.2)', // Background with transparency
          boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.3)', // Inner shadow effect
          color: '#FFFFFF',
          fontFamily: 'Roboto',
          fontSize: '22px',
          fontWeight: 500, // Medium weight
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          zIndex: 10, // Ensures dropdown is above other elements
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Selected Category */}
        <div style={{ color: '#65707B' }}>{selectedCategory}</div>

        {/* Dropdown Icon */}
        <div
          style={{
            border: 'solid white',
            borderWidth: '0 2px 2px 0',
            display: 'inline-block',
            padding: '5px',
            transform: isOpen ? 'rotate(-135deg)' : 'rotate(45deg)',
            transition: 'transform 0.3s',
          }}
        ></div>
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '144px',
            left: '725px',
            width: '340px',
            height: '552px',
            background: 'linear-gradient(0deg, #CCE0FF 0%, #FFFFFF 100%)', // Gradient fill
            borderRadius: '10px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Drop shadow
            overflow: 'hidden', // Ensures no overflow outside rounded corners
            zIndex: 10,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '24px',
              left: '24px',
              width: '292px',
              height: '504px',
              fontFamily: 'Roboto',
              fontSize: '24px',
              fontWeight: 500, // Medium weight
              lineHeight: '56px',
              color: '#65707B',
              overflowY: 'scroll', // Enables vertical scrollbar
              backdropFilter: 'blur(10px)', // Background blur effect
              padding: '8px 12px',
              boxSizing: 'border-box',
            }}
          >
            {categories.map((category, index) => (
              <div
                key={index}
                style={{
                  cursor: 'pointer',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  marginBottom: '4px',
                }}
                onClick={() => {
                  setSelectedCategory(category.name);
                  setIsOpen(false);
                  window.location.href = category.link; // Navigate to the selected category's page
                }}
              >
                {category.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown_list;
