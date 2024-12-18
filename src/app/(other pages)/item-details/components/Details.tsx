import React from 'react';
import { itemsData } from '../../[category]/data/itemsData'; // Adjust the import according to your file structure

const Details = ({ id }: { id: number }) => {
  // Find the item based on the provided id
  const item = itemsData.find((item) => item.id === id);

  if (!item) {
    return <div>Item not found</div>;
  }

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
          fontSize: "40px",
          fontWeight: "500",
          lineHeight: "120%",
          textAlign: "left",
          color: "black",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        Rs. {item.price} {/* Dynamically display the name */}
      </div>
    </div>
  );
};

export default Details;
