import React from 'react';
import Logo from './Logo'; // Import Logo component
import Profile from './Profile_icon'; // Import Profile component
import Cart from './Cart_icon';
import Whatsapp from './Whatsapp_icon';
import Search_bar from './Search_bar';
import Dropdown_list from './Dropdown_list';

function Header() {
  return (
    <div className="w-full h-[160px] bg-[#000000] border-t-[1px] border-b-[1px] border-[#121922] mt-[26px]">

      {/* Logo positioned on the background */}
      <div className="absolute" style={{ top: '42px', left: '112px' }}>
        <Logo />
      </div>

      {/* Search bar positioned on the background */}
      <Search_bar />
           
      {/* Dropdown list positioned on the background */}
      <Dropdown_list />

      {/* Profile icon positioned on the background */}
      <div className="absolute" style={{ top: '77px', left: '1258px' }}>
        <Profile />
      </div>

      {/* Cart icon positioned on the background*/}
      <div className="absolute" style={{ top: '77px', left: '1154px' }}>
        <Cart />
      </div> 

      {/* Whatsapp icon positioned on the background*/}
      <div className="absolute" style={{ top: '84px', left: '1073px' }}>
        <Whatsapp />
      </div> 
    </div>
  );
}

export default Header;
