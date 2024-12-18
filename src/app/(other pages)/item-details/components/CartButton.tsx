import React from 'react';

interface CartButtonProps {
  itemId: number; // Item ID to identify the product
  onAddToCart: (id: number) => void; // Callback function to add the item to the cart
}

const CartButton: React.FC<CartButtonProps> = ({ itemId, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(itemId);
  };

  return (
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
  );
};

export default CartButton;
