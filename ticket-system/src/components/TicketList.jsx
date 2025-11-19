import TicketCard from "./TicketCard";

export default function TicketList({ tickets, onTicketClick }) {
  return (
    <div className="ticket-list">
      <div className="ticket-grid">
        {tickets.map((t) => (
          <TicketCard
            key={t.id}
            ticket={t}
            onClick={onTicketClick}   // PASSING FUNCTION PROPERLY
          />
        ))}
      </div>
    </div>
  );
}
