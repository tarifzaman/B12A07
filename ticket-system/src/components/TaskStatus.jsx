// src/components/TaskStatus.jsx
import React from "react";

export default function TaskStatus({ tasks, onComplete }) {
  return (
    <aside>
      <h3 style={{ marginBottom: 12 }}>Task Status</h3>

      <div className="task-panel">
        <div style={{ marginBottom: 12, color: "#666" }}>
          Select a ticket to add to Task Status
        </div>

        <div style={{ marginBottom: 10, fontWeight: 700 }}>In Progress</div>
        {tasks.length === 0 && (
          <div style={{ color: "#666" }}>No in-progress tasks yet.</div>
        )}

        {tasks.map((t) => (
          <div key={t.id} className="task-item">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontWeight: 700 }}>{t.title}</div>
                <div style={{ fontSize: 12, color: "#666" }}>
                  {t.customer} • {t.createdAt}
                </div>
              </div>

              <div style={{ marginLeft: 12 }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onComplete && onComplete(t);
                  }}
                  style={{
                    background: "#16a34a",
                    color: "#fff",
                    border: "none",
                    padding: "6px 10px",
                    borderRadius: 6,
                    cursor: "pointer",
                  }}
                >
                  Complete
                </button>
              </div>
            </div>
          </div>
        ))}

        <div style={{ marginTop: 14, fontWeight: 700 }}>Resolved Task</div>
        <div style={{ color: "#666", marginTop: 8 }}>
          No resolved tasks yet.
        </div>
      </div>
    </aside>
  );
}
