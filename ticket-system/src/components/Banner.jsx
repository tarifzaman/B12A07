import React from "react";

// Props e 'inprogress' (lowercase) use koro, karon App.jsx theke lowercase e ashche
export default function Banner({ inprogress = 0, resolved = 0 }) {
  return (
    <div
      className="banner-row"
      style={{ 
        display: "flex", 
        gap: "20px", 
        marginBottom: "20px" 
      }}
    >
      {/* In-Progress Banner (Purple Gradient) */}
      <div
        className="banner-card"
        style={{
          flex: 1,
          padding: "20px",
          borderRadius: "10px",
          color: "white",
          // Sundor Gradient (Purple)
          background: "linear-gradient(135deg, #8A2BE2 0%, #9F7AEA 100%)", 
          boxShadow: "0 4px 15px rgba(138, 43, 226, 0.3)"
        }}
      >
        <div className="banner-title" style={{ fontSize: "14px", opacity: 0.9 }}>
          In-Progress
        </div>
        <div className="banner-count" style={{ fontSize: "32px", fontWeight: "bold" }}>
          {inprogress}
        </div>
      </div>

      {/* Resolved Banner (Green Gradient) */}
      <div
        className="banner-card"
        style={{
          flex: 1,
          padding: "20px",
          borderRadius: "10px",
          color: "white",
          // Sundor Gradient (Green)
          background: "linear-gradient(135deg, #0B9B45 0%, #2ECC71 100%)",
          boxShadow: "0 4px 15px rgba(11, 155, 69, 0.3)"
        }}
      >
        <div className="banner-title" style={{ fontSize: "14px", opacity: 0.9 }}>
          Resolved
        </div>
        <div className="banner-count" style={{ fontSize: "32px", fontWeight: "bold" }}>
          {resolved}
        </div>
      </div>
    </div>
  );
}