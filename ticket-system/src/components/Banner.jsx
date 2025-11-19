// src/components/Banner.jsx
import React from "react";

export default function Banner({ inProgress = 0, resolved = 0 }) {
  return (
    <div
      className="banner-row app-container"
      style={{ paddingLeft: 0, paddingRight: 0 }}
    >
      <div
        className="banner-card"
        style={{ background: "linear-gradient(90deg,#7b61ff,#a67bff)" }}
      >
        <div className="banner-title">In-Progress</div>
        <div className="banner-count">{inProgress}</div>
      </div>

      <div
        className="banner-card"
        style={{ background: "linear-gradient(90deg,#2ecc71,#18a884)" }}
      >
        <div className="banner-title">Resolved</div>
        <div className="banner-count">{resolved}</div>
      </div>
    </div>
  );
}
