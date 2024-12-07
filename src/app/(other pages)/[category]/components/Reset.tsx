'use client'

import React, { useState } from 'react';

function Reset() {
  const [filters, setFilters] = useState<string[]>(["MEDALS", "SPORTS"]); // Example categories
  const [results, setResults] = useState<number>(100); // Example result count

  const clearAllFilters = () => {
    setFilters([]);
    setResults(100); // Reset to default results count
  };

  const removeFilter = (filter: string) => {
    setFilters(filters.filter((item) => item !== filter));
    // Update results count logic here if needed
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "850px",
        left: "109px",
        width: "321px",
        height: "175px",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      {/* Refind By */}
      <div
        style={{
          fontFamily: "Roboto",
          fontSize: "22px",
          fontWeight: "400",
          lineHeight: "40px",
          textAlign: "left",
          marginBottom: "10px",
        }}
      >
        Refind By
      </div>

      {/* Clear All */}
      <button
        onClick={clearAllFilters}
        style={{
          fontFamily: "Roboto",
          fontSize: "22px",
          fontWeight: "700",
          lineHeight: "40px",
          textAlign: "right",
          color: "black",
          background: "none",
          border: "none",
          cursor: "pointer",
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "blue")}
        onMouseOut={(e) => (e.currentTarget.style.color = "black")}
      >
        Clear All
      </button>

      {/* Results */}
      <div
        style={{
          fontFamily: "Roboto",
          fontSize: "22px",
          fontWeight: "400",
          lineHeight: "40px",
          textAlign: "left",
          marginBottom: "10px",
        }}
      >
        {results} results
      </div>

      {/* Selected Categories */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {filters.map((filter, index) => (
          <div
            key={index}
            style={{
              width: "140px",
              height: "50px",
              backgroundColor: "#CCE0FF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              fontFamily: "Roboto",
              fontSize: "22px",
              fontWeight: "400",
              lineHeight: "40px",
              textAlign: "center",
            }}
          >
            {filter}
            <button
              onClick={() => removeFilter(filter)}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                background: "none",
                border: "none",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reset;