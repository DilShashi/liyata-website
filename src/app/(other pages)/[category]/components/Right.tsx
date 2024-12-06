"use client";

import React, { useState, useEffect } from "react";
import { itemsData } from "../data/itemsData"; // Import itemsData from the created file
import Link from "next/link";

function Right({ category }: { category: string }) {
  const [view, setView] = useState<number>(1); // Default view: 1 column (list view)
  const [filteredItems, setFilteredItems] = useState<any[]>([]);

  const pageName = category ? category.toUpperCase() : "ALL CATEGORIES";

  useEffect(() => {
    // Filter items based on category and subcategory
    if (category) {
      setFilteredItems(
        itemsData.filter(
          (item) =>
            item.category.toLowerCase() === category.toLowerCase() ||
            (item.category.toLowerCase() === "awards & plaques" &&
              item.subCategory.toLowerCase() === category.toLowerCase())
        )
      );
    } else {
      setFilteredItems(itemsData); // Show all items when no category is selected
    }
  }, [category]);

  const changeView = (newView: number) => {
    setView(newView);
  };

  return (
    <div style={{ position: "relative", padding: "0 20px" }}>
      {/* Page name label */}
      <div
        style={{
          position: "absolute",
          top: "202px",
          left: "528px",
          fontFamily: "Roboto, sans-serif",
          fontSize: "56px",
          fontWeight: "600",
          lineHeight: "120%",
          textAlign: "left",
          color: "black",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        {pageName}
      </div>

      {/* Line under page name */}
      <div
        style={{
          position: "absolute",
          top: "269px",
          left: "528px",
          width: "800px",
          borderTop: "1px solid #65707B",
          boxShadow: "inset 0px 1px 2px rgba(0, 0, 0, 0.1)",
        }}
      ></div>

      {/* VIEW AS section */}
      <div
        style={{
          position: "absolute",
          top: "300px",
          left: "528px",
          fontFamily: "Roboto",
          fontSize: "18px",
          fontWeight: "400",
          color: "black",
        }}
      >
        VIEW AS
      </div>

      {/* View icons */}
      <div
        style={{
          position: "absolute",
          top: "300px",
          left: "620px",
          display: "flex",
          gap: "15px",
        }}
      >
        <div onClick={() => changeView(1)} style={{ cursor: "pointer" }}>
          <img
            src="/view1.png"
            alt="View1 Icon"
            width={30}
            height={30}
            className="drop-shadow-md object-contain"
          />
        </div>
        <div onClick={() => changeView(2)} style={{ cursor: "pointer" }}>
          <img
            src="/view2.png"
            alt="View2 Icon"
            width={30}
            height={30}
            className="drop-shadow-md object-contain"
          />
        </div>
        <div onClick={() => changeView(3)} style={{ cursor: "pointer" }}>
          <img
            src="/view3.png"
            alt="View3 Icon"
            width={30}
            height={30}
            className="drop-shadow-md object-contain"
          />
        </div>
      </div>

      {/* Items section */}
      <div
        style={{
          position: "absolute",
          top: "376px",
          left: "528px",
          display: "grid",
          gridTemplateColumns: `repeat(${view}, 1fr)`, // Dynamically set the columns based on the view state
          gap: "80px", // Adjust the gap 
          maxHeight: "calc(100vh - 600px)", // Ensure the items section is scrollable
          overflowY: "auto", // Add vertical scroll bar
        }}
      >
        {filteredItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              flexDirection: view === 1 ? "row" : "column",
              alignItems: view === 1 ? "flex-start" : "center",
              gap: view === 1 ? "20px" : "0px",
            }}
          >
            {/* Item Image */}
            <img
              src={item.mainImage}
              alt={item.name}
              style={{
                width: view === 1 ? "350px" : view === 2 ? "350px" : "211px",
                height: view === 1 ? "350px" : view === 2 ? "350px" : "211px",
                objectFit: "fill",
                borderRadius: "8px",
              }}
            />

            {view === 1 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  paddingLeft: "5px",
                }}
              >


                {/* Item Name */}
                <div
                  style={{
                    width: "400px",
                    fontFamily: "Roboto",
                    fontSize: "32px",
                    fontWeight: "500",
                    lineHeight: "44px",
                    textAlign: "left",
                    color: "black",
                  }}
                >
                  {item.name}
                </div>

                {/* Item Price */}
                <div
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "40px",
                    fontWeight: "900",
                    lineHeight: "40px",
                    textAlign: "left",
                    color: "black",
                    marginTop: "25px",
                  }}
                >
                  Rs. {item.price}
                </div>
                {/* QUICK ADD Button */}
                <button
                  style={{
                    width: "350px",
                    height: "80px",
                    background: "linear-gradient(180deg, #3385FF 0%, #80B3FF 100%)",
                    border: "none",
                    borderRadius: "8px",
                    color: "white",
                    fontFamily: "Roboto",
                    fontSize: "30px",
                    fontWeight: "700",
                    textAlign: "center",
                    cursor: "pointer",
                    marginTop: "40px",
                    transition: "background 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = "#f39c12")}
                  onMouseOut={(e) => (e.currentTarget.style.background = "linear-gradient(180deg, #3385FF 0%, #80B3FF 100%)")}
                >
                  QUICK ADD
                </button>
              </div>
            )}

            {view !== 1 && (
              <>
                {/* QUICK ADD Button */}
                <button
                  style={{
                    width: view === 2 ? "350px" : "211px",
                    height: view === 2 ? "80px" : "50px",
                    background: "linear-gradient(180deg, #3385FF 0%, #80B3FF 100%)",
                    border: "none",
                    borderRadius: "8px",
                    color: "white",
                    fontFamily: "Roboto",
                    fontSize: view === 2 ? "30px" : "22px",
                    fontWeight: "700",
                    textAlign: "center",
                    cursor: "pointer",
                    marginTop: "10px",
                    transition: "background 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = "#f39c12")}
                  onMouseOut={(e) => (e.currentTarget.style.background = "linear-gradient(180deg, #3385FF 0%, #80B3FF 100%)")}
                >
                  QUICK ADD
                </button>

                {/* Item Name and Price */}
                <div
                  style={{
                    width: view === 2 ? "350px" : "211px",
                    fontFamily: "Roboto",
                    fontSize: view === 2 ? "24px" : "18px",
                    fontWeight: "500",
                    lineHeight: view === 2 ? "44px" : "32px",
                    textAlign: "center",
                    color: "black",
                    marginTop: "10px",
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    fontFamily: "Roboto",
                    fontSize: view === 2 ? "30px" : "22px",
                    fontWeight: "900",
                    lineHeight: view === 2 ? "40px" : "32px",
                    textAlign: "center",
                    color: "black",
                    marginTop: "5px",
                    marginBottom: view === 2 ? "20px" : "0px",
                  }}
                >
                  Rs. {item.price}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Right;