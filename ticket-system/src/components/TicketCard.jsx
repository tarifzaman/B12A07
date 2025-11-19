import React from "react";

export default function TicketCard({ ticket, onClick }) {
  // Check if ticket can be clicked (only if 'open')
  const isClickable = ticket.status === "open";

  // Helper to get priority color based on the design
  const getPriorityColor = (p) => {
    if (p === "High") return "#D93025"; // Red
    if (p === "Medium") return "#F9AB00"; // Orange/Yellow
    return "#1E8E3E"; // Green (Low)
  };

  return (
    <div
      className="ticket-card"
      onClick={() => isClickable && onClick(ticket.id)}
      style={{
        cursor: isClickable ? "pointer" : "default",
        opacity: isClickable ? 1 : 0.8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      {/* --- HEADER: Title & Status Badge --- */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
        {/* Title */}
        <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#202124", width: "75%" }}>
          {ticket.title}
        </h3>
        
        {/* Status Badge (Oval/Gol shape) */}
        <span className={`badge ${ticket.status}`}>
           {ticket.status === 'inprogress' ? 'In-Progress' : 'Open'}
        </span>
      </div>

      {/* --- BODY: Description --- */}
      <p style={{ 
          fontSize: "14px", 
          color: "#5F6368", 
          lineHeight: "1.4", 
          marginBottom: "16px", 
          flexGrow: 1, 
          // Max two lines for description, then ellipsis
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden"
        }}>
        {ticket.description}
      </p>

      {/* --- FOOTER: ID, Priority, Name, Date --- */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: "13px", borderTop: "1px solid #f1f3f4", paddingTop: "12px" }}>
        
        {/* Left Block: ID & Priority */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <span style={{ color: "#5F6368", fontWeight: "500", fontSize: "12px" }}>
             {/* Ticket ID & Priority in one line, as per the image */}
            <span style={{ color: "#9AA0A6", fontWeight: "600", marginRight: '8px' }}>{ticket.ticketId}</span>
            <span style={{ 
              fontWeight: "700", 
              color: getPriorityColor(ticket.priority), 
              textTransform: "uppercase",
              fontSize: "10px" // Smaller font for priority text
            }}>
              {ticket.priority} PRIORITY
            </span>
          </span>
        </div>

        {/* Right Block: Name & Date */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#5F6368" }}>
          <span style={{ fontWeight: '600', color: '#5F6368' }}>{ticket.customer}</span>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {/* Calendar Icon SVG */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5F6368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ minWidth: '15px' }}>
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span style={{ fontSize: '13px' }}>{ticket.date}</span>
          </div>
        </div>

      </div>
    </div>
  );
}