import React from 'react';
import Background from './Background'; // Import Background component
import Logo from './Logo'; // Import Logo component
import Profile from './Profile_icon'; // Import Profile component
import Cart from './Cart_icon';
import Whatsapp from './Whatsapp_icon';

function Header() {
  return (
    <div className="relative w-full h-[160px]">
      {/* Header Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Background />
      </div>

      {/* Logo positioned on the background */}
      <div className="absolute" style={{ top: '42px', left: '112px' }}>
        <Logo />
      </div>

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
