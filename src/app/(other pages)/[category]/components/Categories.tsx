'use client';

import React, { useState } from 'react';
import Link from 'next/link';

function Categories() {
  const [expandedCategories, setExpandedCategories] = useState<{ [key: number]: boolean }>({});

  const toggleCategory = (index: number) => {
    setExpandedCategories((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const categories = [
    {
      name: 'AWARDS & PLAQUES',
      path: '/awards-plaques',
      subcategories: [
        { name: 'SPORTS', path: '/awards-plaques/sports' },
        { name: 'APPRECIATIONS', path: '/awards-plaques/appreciations' },
      ],
    },
    {
      name: 'MEDALS',
      path: '/medals',
    },
    {
      name: 'BADGES',
      path: '/badges',
      subcategories: [
        { name: 'BRASS BADGES', path: '/badges/brass-badges' },
        { name: 'PLASTIC BADGES', path: '/badges/plastic-badges' },
      ],
    },
    {
      name: 'KEY TAGS',
      path: '/key-tags',
    },
    {
      name: 'NAME BOARDS',
      path: '/name-boards',
    },
    {
      name: 'TIES',
      path: '/ties',
    },
    {
      name: 'OPENING PLAQUES',
      path: '/opening-plaques',
      subcategories: [
        { name: 'BRASS OPENING PLAQUES', path: '/opening-plaques/brass' },
        { name: 'PLASTIC OPENING PLAQUES', path: '/opening-plaques/plastic' },
      ],
    },
    {
      name: 'OFFICER SASH WAIST BELTS',
      path: '/sash-waist-belts',
    },
  ];

  return (
    <div
      className="relative"
      style={{
        position: 'absolute',
        top: '362px',
        left: '112px',
        width: '325px',
        height: '400px',
      }}
    >
      {/* Header Section */}
      <div>
        {/* Categories Label */}
        <h1
          className="text-[32px] font-medium leading-[60%] text-black drop-shadow-md mb-4"
          style={{ fontFamily: 'Roboto' }}
        >
          CATEGORIES
        </h1>

        {/* Horizontal Line */}
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

      {/* Scrollable Categories Section */}
      <div
        style={{
          marginTop: '16px',
          maxHeight: '330px', // Restrict the height for scrolling
          overflowY: 'auto', // Enable vertical scroll
          paddingRight: '8px', // Space for scrollbar
        }}
      >
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="mb-4">
              <div className="flex items-center justify-between" style={{ width: '100%' }}>
                <Link
                  href={category.path}
                  className="text-[20px] font-regular leading-[44px] text-black hover:text-blue-600"
                  style={{ fontFamily: 'Roboto' }}
                >
                  {category.name}
                </Link>

                {category.subcategories && (
                  <button
                    onClick={() => toggleCategory(index)}
                    className="text-black hover:text-blue-600"
                    style={{
                      fontSize: '20px',
                      cursor: 'pointer',
                      background: 'none',
                      border: 'none',
                      marginLeft: '8px',
                    }}
                  >
                    {expandedCategories[index] ? '-' : '+'}
                  </button>
                )}
              </div>
              {category.subcategories && expandedCategories[index] && (
                <ul className="ml-6 mt-2">
                  {category.subcategories.map((subcat, subIndex) => (
                    <li key={subIndex} className="mb-2">
                      <Link
                        href={subcat.path}
                        className="text-[20px] font-regular leading-[44px] text-black hover:text-blue-600"
                        style={{ fontFamily: 'Roboto' }}
                      >
                        {subcat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
