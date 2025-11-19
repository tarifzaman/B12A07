import React from "react";

function TaskStatus({ tasks }) {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #eee",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>In Progress Tasks</h2>

      {tasks.length === 0 && <p>No tasks selected yet.</p>}

      {tasks.map((t) => (
        <div
          key={t.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
            background: "#fafafa",
          }}
        >
          <b>{t.title}</b>
          <p>Priority: {t.priority}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskStatus;
