// src/App.jsx
import React, { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketList from "./components/TicketList";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";
import { tickets } from "./data/ticket";

function App() {
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const addToProgress = (ticket) => {
    if (!inProgress.find(t => t.id === ticket.id) && !resolved.find(t => t.id === ticket.id)) {
      setInProgress(prev => [...prev, ticket]);
    }
  };

  const handleComplete = (ticket) => {
    // remove from inProgress
    setInProgress(prev => prev.filter(t => t.id !== ticket.id));
    // add to resolved
    setResolved(prev => [...prev, ticket]);
  };

  return (
    <div>
      <div className="app-container">
        <Navbar />
        <Banner inProgress={inProgress.length} resolved={resolved.length} />

        <div className="main-grid">
          <TicketList tickets={tickets} onSelect={addToProgress} />
          <TaskStatus tasks={inProgress} onComplete={handleComplete} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
