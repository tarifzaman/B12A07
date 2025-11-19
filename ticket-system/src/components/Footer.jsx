import React from "react";

export default function Footer() {
  return (
    <footer className="footer app-container">
      <div
        style={{
          display: "flex",
          gap: 30,
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ maxWidth: 360 }}>
          <div style={{ fontWeight: 800, marginBottom: 8 }}>
            CS — Ticket System
          </div>
          <div style={{ color: "#aaa", fontSize: 14 }}>
            Short footer text about the product or company.
          </div>
        </div>
        <div style={{ color: "#fff", opacity: 0.85 }}>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>Company</div>
          <div style={{ fontSize: 14, color: "#cbd5e1" }}>
            About Us
            <br />
            Contact
          </div>
        </div>
      </div>
    </footer>
  );
}
