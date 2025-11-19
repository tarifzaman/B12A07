export default function TicketCard({ ticket, onClick }) {
  // Logic: Jodi status 'open' na hoy, click disable hobe visually
  const isClickable = ticket.status === "open";

  return (
    <div
      className="ticket-card"
      onClick={() => isClickable && onClick(ticket.id)}
      style={{ 
        cursor: isClickable ? "pointer" : "default",
        opacity: isClickable ? 1 : 0.7 // Completed hole ektu fyakashe hobe
      }}
    >
      <h3 style={{ fontSize: "15px", marginBottom: "5px" }}>{ticket.title}</h3>

      <div className="ticket-meta">
        <span>{ticket.customer}</span>
        <span className="priority">{ticket.priority}</span>
      </div>

      <span className={`badge ${ticket.status}`}>
        {ticket.status === 'inprogress' ? 'In-Progress' : ticket.status}
      </span>
    </div>
  );
}