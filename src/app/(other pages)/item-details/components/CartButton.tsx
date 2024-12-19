import React, { useState } from 'react';
import { itemsData } from '../../[category]/data/itemsData'; 
import Link from 'next/link';

interface CartButtonProps {
  itemId: number; // Item ID to identify the product
  onAddToCart: (id: number) => void; // Callback function to add the item to the cart
}

const CartButton: React.FC<CartButtonProps> = ({ itemId, onAddToCart }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(itemId);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    window.location.href = `/item-details/${itemId}`; 
  };

  // Fetch related products
  const relatedProducts = itemsData.filter(
    (item) => item.category === itemsData.find((data) => data.id === itemId)?.category && item.id !== itemId
  ).slice(0, 3); // Select 3 related items

  return (
    <>
      <button
        onClick={handleAddToCart}
        style={{
          width: '204px',
          height: '60px',
          position: 'absolute',
          top: '1324px',
          left: '736px',
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
      >
        ADD TO CART
      </button>

      {showPopup && (
        <>
          {/* Overlay */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 999,
            }}
          />
          {/* Popup Box */}
          <div
            style={{
              width: '1008px',
              height: '701px',
              position: 'absolute',
              top: '540px',
              left: '216px',
              background: 'linear-gradient(white 0%, #99C2FF 100%)',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
              borderRadius: '8px',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              padding: '20px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                cursor: 'pointer',
                fontSize: '24px',
                color: 'black',
                fontWeight: '800',
              }}
              onClick={closePopup}
            >
              ✕
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '70px',
              }}
            >
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  backgroundColor: 'green',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  marginRight: '10px',
                }}
              >
                ✓
              </div>
              <span
                style={{
                  fontFamily: 'Roboto',
                  fontSize: '22px',
                  fontWeight: 430,
                  color: 'black',
                  textShadow: '1px 1px rgba(0, 0, 0, 0.2)',
                }}
              >
                Added to Cart Successfully !
              </span>
            </div>
            <hr
              style={{
                width: '800px',
                margin: '20px 0',
                borderColor: '#BDC2C7',
              }}
            />
            <h2
              style={{
                fontFamily: 'Roboto',
                fontSize: '26px',
                fontWeight: 430,
                color: 'black',
                textShadow: '1px 1px rgba(0, 0, 0, 0.2)',
                marginTop: '20px',
              }}
            >
              RELATED PRODUCTS
            </h2>
            <div
              style={{
                display: 'flex',
                gap: '50px',
                marginTop: '40px',
              }}
            >
              {relatedProducts.map((product) => (
                <div key={product.id}  style={{ textAlign: 'center' }}>
                  <div className="hover:filter hover:brightness-75">
                  <Link href={`/item-details/${product.id}`} passHref>
                  <img
                    src={product.mainImage}
                    alt={product.name}
                    style={{
                      width: '211px',
                      height: '211px',
                      cursor: 'pointer',
                    }}
                  />
                  </Link>
                  </div>
                  {/* QUICK ADD Button */}
                <button
                  style={{
                    width: "211px",
                    height: "50px",
                    background: "linear-gradient(180deg, #3385FF 0%, #80B3FF 100%)",
                    border: "none",
                    color: "white",
                    fontFamily: "Roboto",
                    fontSize: "22px",
                    fontWeight: "500",
                    textAlign: "center",
                    cursor: "pointer",
                    marginTop: "0px",
                    transition: "background 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = "#f39c12")}
                  onMouseOut={(e) => (e.currentTarget.style.background = "linear-gradient(180deg, #3385FF 0%, #80B3FF 100%)")}
                >
                  QUICK ADD
                </button>


                  <p
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: '18px',
                      fontWeight: '500',
                      marginTop: '10px',
                      width: '211px'
                    }}
                  >
                    {product.name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: '22px',
                      fontWeight: '900',
                    }}
                  >
                    Rs. {product.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CartButton;
