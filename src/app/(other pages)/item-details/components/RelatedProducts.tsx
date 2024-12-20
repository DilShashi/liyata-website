import React from 'react'; 
import {itemsData} from '../../[category]/data/itemsData';
import Link from 'next/link';

interface RelatedProductsProps {
    itemId: number; 
  }
  
  const RelatedProducts: React.FC<RelatedProductsProps> = ({ itemId }) => {
    const item = itemsData.find((data) => data.id === itemId);
  
    if (!item) {
      return <div>Item not found.</div>;
    }
  
    // Fetch related products
    const relatedProducts = itemsData.filter(
        (item) => item.category === itemsData.find((data) => data.id === itemId)?.category && item.id !== itemId
    ).slice(0, 4); // Select 3 related items

    return (
      <div 
          style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center', 
              marginTop: '50px',
              position: 'absolute',
              top: '2500px',
              left: '112px' 
              }}>
        {/* RELATED PRODUCTS Label */}
        <h2
          style={{
            fontFamily: 'Roboto',
            fontSize: '32px',
            fontWeight: '500',
            color: 'black',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          }}
        >
          RELATED PRODUCTS
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
            {/* Related products */}
            <div
              style={{
                display: 'flex',
                gap: '70px',
                marginTop: '100px',
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
      
    );
  };
  

export default RelatedProducts
