import React from "react";

function TicketCard({ ticket, onSelect }) {
  return (
    <div
      onClick={() => onSelect(ticket)}
      style={{
        border: "1px solid #eee",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "10px",
        cursor: "pointer",
      }}
    >
      <h2>{ticket.title}</h2>
      <p>{ticket.description}</p>

      <p><b>Customer:</b> {ticket.customer}</p>
      <p><b>Priority:</b> {ticket.priority}</p>
      <p><b>Status:</b> {ticket.status}</p>
      <p><b>Created At:</b> {ticket.createdAt}</p>
    </div>
  );
}

export default TicketCard;
