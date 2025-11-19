// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">CS — Ticket System</div>
      <div className="nav-right">
        <nav>
          <a style={{ marginRight: 12 }}>Home</a>
          <a style={{ marginRight: 12 }}>FAQ</a>
          <a style={{ marginRight: 12 }}>Changelog</a>
          <a style={{ marginRight: 12 }}>Blog</a>
          <a style={{ marginRight: 12 }}>Download</a>
          <a style={{ marginRight: 12 }}>Contact</a>
        </nav>
        <button
          style={{
            background: "#7A5CFF",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
          }}
        >
          + New Ticket
        </button>
      </div>
    </header>
  );
}
