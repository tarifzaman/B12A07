import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import { tickets } from "./data/ticket";

function App() {
  return (
    <>
      <Navbar />
      <Banner inProgress={5} resolved={0} />
      <div style={{ padding: "20px 40px" }}>
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            title={ticket.title}
            description={ticket.description}
            customer={ticket.customer}
            priority={ticket.priority}
            status={ticket.status}
            createdAt={ticket.createdAt}
          />
        ))}
      </div>
    </>
  );
}

export default App;
