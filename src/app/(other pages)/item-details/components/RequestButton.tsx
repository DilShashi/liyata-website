import React, { useState } from 'react';

interface RequestButtonProps {
  itemId: number;
  itemName: string;
  itemPrice: number;
  userDescription?: string;
}

const RequestButton: React.FC<RequestButtonProps> = ({
  itemId,
  itemName,
  itemPrice,
  userDescription = '',
}) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSendRequest = () => {
    const phoneNumber = '94718430684';
    const message = `
      Order Request:
      - Item ID: ${itemId}
      - Item Name: ${itemName}
      - Price: ${itemPrice}
      ${userDescription ? `- User Note: ${userDescription}` : ''}
    `;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    // Debugging
    console.log('Constructed WhatsApp URL:', whatsappURL);

    // Open WhatsApp URL
    try {
      window.open(whatsappURL, '_blank');
      // Show the pop-up box
      setShowPopup(true);
    } catch (error) {
      console.error('Failed to open WhatsApp:', error);
    }
  };

  const handleClosePopup = () => {
    // Redirect to home page when cross is clicked
    window.location.href = '/';
  };

  return (
    <>
      {/* Send Order Request Button */}
      <button
        style={{
          width: '340px',
          height: '60px',
          position: 'absolute',
          top: '1324px',
          left: '974px',
          background: 'linear-gradient(#3385FF 0%, #80B3FF 100%)',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
          border: 'none',
          color: 'white',
          fontFamily: 'Roboto, sans-serif',
          fontSize: '22px',
          fontWeight: 'bold',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'background 0.3s ease',
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.background = '#F39C12')
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.background =
            'linear-gradient(#3385FF 0%, #80B3FF 100%)')
        }
        onClick={handleSendRequest}
      >
        SEND ORDER REQUEST
      </button>

      {/* Pop-up Box */}
      {showPopup && (
        <div
          style={{
            width: '865px',
            height: '350px',
            position: 'absolute',
            top: '849px',
            left: '288px',
            background: 'linear-gradient(white 0%, #99C2FF 100%)',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
            padding: '20px',
            zIndex: 999,
            backdropFilter: 'blur(5px)',
            color: 'black',
          }}
        >
          {/* Pop-up content */}
          <div style={{ position: 'absolute', top: '30px', right: '20px' }}>
            <button
              onClick={handleClosePopup}
              style={{
                border: 'none',
                background: 'transparent',
                fontSize: '28px',
                color: 'black',
              }}
            >
              ✖
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginTop: '40px',marginLeft: '220px' }}>
            <div
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: 'green',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: 'white', fontSize: '18px' }}>✓</span>
            </div>
            <div
              style={{
                marginLeft: '15px',
                fontFamily: 'Roboto',
                fontSize: '22px',
                fontWeight: '430',
                color: 'black',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)',
              }}
            >
              Thank you for your order request!
            </div>
          </div>

          <hr
            style={{
              width: '800px',
              margin: '20px auto',
              borderColor: '#BDC2C7',
              borderWidth: '1px',
            }}
          />

          <div
            style={{
              marginTop: '40px',
              textAlign: 'center',
              fontFamily: 'Roboto',
              fontSize: '20px',
              fontWeight: 'regular',
              lineHeight: '40px',
              color: 'black',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)',
            }}
          >
            <p>Your details have been sent to our team via WhatsApp. One of our representatives will</p>
            <p>contact you shortly to confirm your order and finalize the customization details. Stay</p>
            <p>tuned!</p>
          </div>
        </div>
      )}

      {/* Dark overlay to highlight the pop-up */}
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 998,
          }}
        />
      )}
    </>
  );
};

export default RequestButton;
