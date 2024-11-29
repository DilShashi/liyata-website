import React from 'react';

function Icons() {
  return (
    <div>
      {/* Facebook Icon */}
      <a
        href="https://www.facebook.com/liyatashop"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'absolute',
          top: '3838px',
          left: '1259px',
          width: '78px',
          height: '78px',
          backgroundImage: 'url(/fb.png)', // Path to the FB icon image
          backgroundSize: 'cover',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Drop shadow
          filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))', // Inner shadow
          cursor: 'pointer',
        }}
      />

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/94779686160"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'absolute',
          top: '3956.95px',
          left: '1259px',
          width: '78px',
          height: '78px',
          backgroundImage: 'url(/whatsapp.png)', // Path to the WhatsApp icon image
          backgroundSize: 'cover',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Drop shadow
          filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))', // Inner shadow
          cursor: 'pointer',
        }}
      />

      {/* Email Icon */}
      <a
        href="mailto:liyata.fb@gmail.com"
        style={{
          position: 'absolute',
          top: '4077.11px',
          left: '1259px',
          width: '78px',
          height: '78px',
          backgroundImage: 'url(/email.png)', // Path to the Email icon image
          backgroundSize: 'cover',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Drop shadow
          filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))', // Inner shadow
          cursor: 'pointer',
        }}
      />
    </div>
  );
}

export default Icons;
