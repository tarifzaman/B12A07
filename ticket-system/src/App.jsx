import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import TaskStatus from "./components/TaskStatus";
import { tickets } from "./data/ticket";

function App() {
  const [inProgress, setInProgress] = useState([]);

  const handleAddToProgress = (ticket) => {
    // duplicate prevent
    if (!inProgress.find((t) => t.id === ticket.id)) {
      setInProgress([...inProgress, ticket]);
    }
  };

  return (
    <>
      <Navbar />
      <Banner inProgress={inProgress.length} resolved={0} />

      {/* 2 Column Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 0.7fr",
          gap: "20px",
          padding: "20px 40px",
        }}
      >
        {/* LEFT SIDE — Ticket List */}
        <div>
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onSelect={handleAddToProgress}
            />
          ))}
        </div>

        {/* RIGHT SIDE — Task Status Panel */}
        <TaskStatus tasks={inProgress} />
      </div>
    </>
  );
}

export default App;
