import React from 'react';

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
    } catch (error) {
    console.error('Failed to open WhatsApp:', error);
  }
  };

  return (
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
  );
};

export default RequestButton;
