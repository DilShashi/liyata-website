import React from 'react'; 
import {itemsData} from '../../[category]/data/itemsData';

interface DescriptionProps {
  itemId: number; 
}

const Description: React.FC<DescriptionProps> = ({ itemId }) => {
  const item = itemsData.find((data) => data.id === itemId);

  if (!item) {
    return <div>Item not found.</div>;
  }

  return (
    <div 
        style={{ 
            textAlign: 'center', 
            marginTop: '50px',
            position: 'absolute',
            top: '1750px',
            left: '112px' 
            }}>
      {/* PRODUCT DETAILS Label */}
      <h2
        style={{
          fontFamily: 'Roboto',
          fontSize: '32px',
          fontWeight: '500',
          color: 'black',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        }}
      >
        PRODUCT DETAILS
      </h2>

      {/* Horizontal Line */}
      <hr
        style={{
          width: '1213px',
          border: 'none',
          borderBottom: '1px solid #65707B',
          margin: '20px auto',
          boxShadow: 'inset 2px 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      />

      {/* Description Box */}
      <div
        style={{
          width: '1217px',
          height: '553px',
          margin: 'auto',
          textAlign: 'left',
          padding: '30px',
          overflowY: 'auto',
          position: 'relative',
          lineHeight: '50px',
          fontSize: '20px'
        }}
      >
        <ul style={{ listStyleType: 'disc', paddingLeft: '40px' }}>
          {/* Purpose */}
          <li>
            <strong>Purpose: </strong>
            {item.purpose || 'No purpose specified.'}
          </li>

          {/* Materials */}
          <li>
            <strong>Materials: </strong>
            <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
              <li>{item.materials || 'No materials specified.'}</li>
            </ul>
          </li>

          {/* Other Details (optional) */}
          {item.other && (
            <li>
              <strong>Other Details: </strong>
              <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                <li>{item.other}</li>
              </ul>
            </li>
          )}

          {/* Order Process */}
          <li>
            <strong>Order Process: </strong>
            <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
              <li>
                Send your order request via WhatsApp. Our representative will contact you promptly to finalize customization details.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Description;
