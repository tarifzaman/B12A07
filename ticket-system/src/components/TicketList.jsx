// src/components/TicketList.jsx
import React from "react";
import TicketCard from "./TicketCard";

export default function TicketList({ tickets, onSelect }) {
  return (
    <div className="ticket-list">
      <h3 style={{ marginBottom: 12 }}>Customer Tickets</h3>
      <div className="ticket-grid">
        {tickets.map((t) => (
          <TicketCard key={t.id} ticket={t} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}
