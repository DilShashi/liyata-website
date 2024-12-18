import React, { useState } from 'react';
import { itemsData } from '../../[category]/data/itemsData';
import CartButton from './CartButton';
import RequestButton from './RequestButton';

const Details = ({ id }: { id: number }) => {
  // Find the item based on the provided id
  const item = itemsData.find((item) => item.id === id);

  const handleAddToCart = (itemId: number) => {
    // Logic to add the item to the cart
    console.log(`Item with ID ${itemId} added to the cart`);
  };

  // State for quantity
  const [quantity, setQuantity] = useState(1);

  // State for customization description
  const [customizationDescription, setCustomizationDescription] = useState("");
  const [isPlaceholderVisible, setPlaceholderVisible] = useState(true);

  if (!item) {
    return <div>Item not found</div>;
  }

  // Handle quantity increase
  const increaseQuantity = () => setQuantity((prev) => prev + 1);

  // Handle quantity decrease
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div>
      {/* Page name label */}
      <div
        style={{
          position: "absolute",
          top: "402px",
          left: "736px",
          fontFamily: "Roboto, sans-serif",
          fontSize: "40px",
          fontWeight: "500",
          lineHeight: "120%",
          textAlign: "left",
          color: "black",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        {item.name} {/* Dynamically display the name */}
      </div>

      {/* Line under page name */}
      <div
        style={{
          position: "absolute",
          top: "469px",
          left: "736px",
          width: "580px",
          borderTop: "1px solid #65707B",
          boxShadow: "inset 0px 1px 2px rgba(0, 0, 0, 0.1)",
        }}
      ></div>

      {/* Price */}
      <div
        style={{
          position: "absolute",
          top: "551px",
          left: "736px",
          fontFamily: "Roboto, sans-serif",
          fontSize: "38px",
          fontWeight: "400",
          lineHeight: "120%",
          textAlign: "left",
          color: "black",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        Rs. {item.price}
      </div>

      {/* Quantity Label */}
      <div
        style={{
          position: "absolute",
          top: "654px",
          left: "736px",
          fontFamily: "Roboto, sans-serif",
          fontSize: "22px",
          fontWeight: "400",
          textAlign: "left",
          color: "black",
        }}
      >
        Quantity:
      </div>

      {/* Quantity Input Box */}
      <div
        style={{
          position: "absolute",
          top: "654px",
          left: "840px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          border: "1px solid #9199A1",
          width: "80px",
          height: "32px",
          boxSizing: "border-box",
        }}
      >
        {/* Decrease Quantity Button */}
        <button
          onClick={decreaseQuantity}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "black",
            fontSize: "18px",
            cursor: "pointer",
            width: "20px",
          }}
        >
          -
        </button>

        {/* Quantity Number */}
        <div
          style={{
            textAlign: "center",
            width: "40px",
            fontFamily: "Roboto, sans-serif",
            fontSize: "18px",
          }}
        >
          {quantity}
        </div>

        {/* Increase Quantity Button */}
        <button
          onClick={increaseQuantity}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "black",
            fontSize: "18px",
            cursor: "pointer",
            width: "20px",
          }}
        >
          +
        </button>
      </div>

      {/* Subtotal Label */}
      <div
        style={{
          position: "absolute",
          top: "754px", // 100px below the Quantity label
          left: "736px",
          fontFamily: "Roboto, sans-serif",
          fontSize: "22px",
          fontWeight: "400",
          textAlign: "left",
          color: "black",
        }}
      >
        Subtotal:<b> Rs. {item.price * quantity}</b> <br />
        (Delivery charge will be added)
      </div>

      {/* Description Label */}
      <div
        style={{
          position: "absolute",
          top: "860px",
          left: "736px",
          fontFamily: "Roboto, sans-serif",
          fontSize: "22px",
          fontWeight: "400",
          textAlign: "left",
          color: "black",
        }}
      >
        Description:
      </div>

      {/* Customization Input Box */}
      <textarea
        value={customizationDescription}
        onChange={(e) => setCustomizationDescription(e.target.value)}
        onFocus={() => setPlaceholderVisible(false)}
        onBlur={() => setPlaceholderVisible(customizationDescription === "")}
        style={{
          position: "absolute",
          top: "920px",
          left: "736px",
          width: "580px",
          height: "375px",
          backgroundColor: "white",
          border: "1px solid #9199A1",
          padding: "10px",
          fontFamily: "Roboto, sans-serif",
          fontSize: "22px",
          color: "black",
          boxSizing: "border-box",
          resize: "none",
        }}
      />
      {isPlaceholderVisible && (
        <div
          style={{
            position: "absolute",
            top: "950px", // Adjusted for padding
            left: "766px", // Adjusted for padding
            width: "572px",
            color: "#9199A1",
            fontFamily: "Roboto, sans-serif",
            fontSize: "22px",
            pointerEvents: "none",
          }}
        >
          Please provide details of your customization <br/>
          requirements here...
        </div>
      )}

      <div>
        {/* Other components and details */}
        <CartButton itemId={id} onAddToCart={handleAddToCart} />
      </div>

      <RequestButton
        itemId={item.id}
        itemName={item.name}
        itemPrice={item.price}
        userDescription={customizationDescription}
      />
    </div>
  );
};

export default Details;