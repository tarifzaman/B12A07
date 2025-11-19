import { useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import TaskStatus from "./components/TaskStatus";
import TicketList from "./components/TicketList";
import { tickets as initialTickets } from "./data/tickets";
import "./index.css";

export default function App() {
  const [tickets, setTickets] = useState(initialTickets);
  const [tasks, setTasks] = useState([]); // In-Progress List
  const [resolvedList, setResolvedList] = useState([]); // Resolved List (Sidebar er jonno)

  // 1. TICKET CLICK → In-Progress (+1) & Add to Task Bar
  const handleTicketClick = (id) => {
    const clickedTicket = tickets.find((t) => t.id === id);

    // Jodi ticket already open na hoy, tahole kichu korbe na
    if (clickedTicket.status !== "open") return;

    // Update Status in Main List
    const updatedTickets = tickets.map((t) =>
      t.id === id ? { ...t, status: "inprogress" } : t
    );

    setTickets(updatedTickets);
    setTasks((prev) => [...prev, { ...clickedTicket, status: "inprogress" }]);
  };

  // 2. COMPLETE BUTTON CLICK → Resolved (+1) & Add to Resolved List
  const completeTask = (id) => {
    // Task khuje ber kora
    const taskToResolve = tasks.find((t) => t.id === id);

    if (!taskToResolve) return;

    // Main List update (Status -> resolved)
    const updatedTickets = tickets.map((t) =>
      t.id === id ? { ...t, status: "resolved" } : t
    );

    setTickets(updatedTickets);

    // Remove from "In-Progress" Task Bar
    setTasks((prev) => prev.filter((t) => t.id !== id));

    // Add to "Resolved Task" list in Sidebar
    setResolvedList((prev) => [
      ...prev,
      { ...taskToResolve, status: "resolved" },
    ]);
  };

  // Banner Counts Calculation
  const openCount = tickets.filter((t) => t.status === "open").length;
  const inProgressCount = tickets.filter(
    (t) => t.status === "inprogress"
  ).length;
  const resolvedCount = tickets.filter((t) => t.status === "resolved").length;

  return (
    <div className="app-container">
      <Navbar />
      {/* Banner e count pass kora */}
      <Banner
        open={openCount}
        inprogress={inProgressCount}
        resolved={resolvedCount}
      />

      <div className="main-grid">
        {/* Left Side: Ticket List */}
        <TicketList tickets={tickets} onTicketClick={handleTicketClick} />

        {/* Right Side: Task Status & Resolved History */}
        <TaskStatus
          tasks={tasks}
          resolvedList={resolvedList}
          onComplete={completeTask}
        />
      </div>
    </div>
  );
}
