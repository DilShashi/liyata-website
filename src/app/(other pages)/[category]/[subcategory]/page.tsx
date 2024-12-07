import React from 'react';
import Bg_category from '../components/Background';
import Left from '../components/Left';
import Right from '../components/Right';

interface PageProps {
  params: {
    category: string; // Main category param from the URL
    subcategory: string; // Subcategory param from the URL
  };
}

function SubcategoryPage({ params }: PageProps) {
  const { category, subcategory } = params;

  let subCategoryTitle = '';

  // Define subcategory title based on category and subcategory
  if (category === 'awards-plaques') {
    if (subcategory === 'sports') subCategoryTitle = 'Sports';
    else if (subcategory === 'appreciations') subCategoryTitle = 'Appreciations';
  } else if (category === 'badges') {
    if (subcategory === 'brass-badges') subCategoryTitle = 'Brass Badges';
    else if (subcategory === 'plastic-badges') subCategoryTitle = 'Plastic Badges';
  } else if (category === 'opening-plaques') {
    if (subcategory === 'brass-opening-plaques') subCategoryTitle = 'Brass Opening Plaques';
    else if (subcategory === 'plastic-opening-plaques') subCategoryTitle = 'Plastic Opening Plaques';
  }

  if (!subCategoryTitle) return null; // Do not render if subcategory does not match

  // Render the page
  return (
    <div>
      {/* Background behind all content */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Bg_category />
      </div>

      <Left />

      {/* Pass the dynamically assigned subCategoryTitle to Right */}
      <Right category={subCategoryTitle} />
    </div>
  );
}

export default SubcategoryPage;