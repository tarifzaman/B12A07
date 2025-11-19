// src/components/TicketCard.jsx
import React from "react";

export default function TicketCard({ ticket, onSelect }) {
  const priorityColor = ticket.priority.includes("HIGH")
    ? "#e74c3c"
    : ticket.priority.includes("MEDIUM")
    ? "#f39c12"
    : "#2ecc71";

  return (
    <div className="ticket-card" onClick={() => onSelect(ticket)}>
      <div
        style={{ display: "flex", justifyContent: "space-between", gap: 12 }}
      >
        <div style={{ fontWeight: 700, fontSize: 16 }}>{ticket.title}</div>
        <div style={{ textAlign: "right", minWidth: 64 }}>
          <div style={{ fontSize: 12, color: "#666" }}>#{ticket.id}</div>
          <div style={{ marginTop: 6 }}>
            <span
              className={`badge ${
                ticket.status === "Open"
                  ? "open"
                  : ticket.status === "In Progress"
                  ? "inprogress"
                  : ""
              }`}
            >
              {ticket.status}
            </span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 8, color: "#444", fontSize: 14 }}>
        {ticket.description}
      </div>

      <div className="ticket-meta">
        <div>
          <div style={{ fontWeight: 700 }}>{ticket.customer}</div>
          <div style={{ fontSize: 12, color: "#888" }}>{ticket.createdAt}</div>
        </div>

        <div style={{ textAlign: "right" }}>
          <div className="priority" style={{ color: priorityColor }}>
            {ticket.priority}
          </div>
        </div>
      </div>
    </div>
  );
}
