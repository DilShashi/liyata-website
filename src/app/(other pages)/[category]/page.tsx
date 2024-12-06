import React from 'react';
import Bg_category from './components/Background';
import Left from './components/Left';
import Right from './components/Right';

function page() {
  return (
    <div>
      {/* Background behind all content */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Bg_category />
      </div>

      <Left />

      <Right />

    </div>
  );
}

export default page;
