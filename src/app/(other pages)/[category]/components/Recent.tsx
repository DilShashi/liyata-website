import React from 'react'

function Recent() {
  return (
      <div>
        {/* Recent viewed items */}
       <div
          style={{
            position: "absolute",
            top: "2900px",
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
          RECENTLY VIEWED ITEMS
        </div>

        {/* Line under page name */}
        <div
          style={{
            position: "absolute",
            top: "2975px",
            left: "528px",
            width: "800px",
            borderTop: "1px solid #65707B",
            boxShadow: "inset 0px 1px 2px rgba(0, 0, 0, 0.1)",
         }}
        >
      </div>  
    </div>
  )
}

export default Recent
