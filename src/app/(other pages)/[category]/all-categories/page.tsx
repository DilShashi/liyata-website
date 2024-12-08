import React from 'react';
import Bg_category from '../components/Background';
import Left from '../components/Left';
import Right from '../components/Right';
import Recent from '../components/Recent';

function AllCategoriesPage() {
  return (
    <div>
      {/* Background behind all content */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Bg_category />
      </div>

      <Left />

      {/* Right component with no filtering applied */}
      <Right category="All Categories" />

      
      {/*Recently viewed items */}
      <Recent />
    </div>
  );
}

export default AllCategoriesPage;