import React from 'react';
import Bg_category from './components/Background';
import Left from './components/Left';
import Right from './components/Right';

interface PageProps {
  params: {
    category: string; // category param from the URL
  };
}

function Page({ params }: PageProps) {
  const { category } = params;

  let categoryTitle = '';

  // Define the category title based on the category
  switch (category) {
    case 'awards-plaques':
      categoryTitle = 'Awards & Plaques';
      break;
    case 'medals':
      categoryTitle = 'Medals';
      break;
    case 'badges':
      categoryTitle = 'Badges';
      break;
    case 'key-tags':
      categoryTitle = 'Key Tags';
      break;
    case 'ties':
      categoryTitle = 'Ties';
      break;
    case 'name-boards':
      categoryTitle = 'Name Boards';
      break;
    case 'opening-plaques':
      categoryTitle = 'Opening Plaques';
      break;
    case 'sash-waist-belts':
      categoryTitle = 'Officers Sash Waist Belts';
      break;
    default:
      return null; // Do not render if category is not specified
  }

  // Render the page
  return (
    <div>
      {/* Background behind all content */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Bg_category />
      </div>

      <Left />

      {/* Pass the dynamically assigned categoryTitle to Right */}
      <Right category={categoryTitle} />
    </div>
  );
}

export default Page;
