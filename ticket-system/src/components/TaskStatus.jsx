export default function TaskStatus({ tasks, resolvedList, onComplete }) {
  return (
    <div className="task-panel">
      {/* --- IN PROGRESS SECTION --- */}
      <h3 style={{ marginBottom: "12px", fontWeight: "700", color: "#333" }}>
        Task Status
      </h3>

      {tasks.length === 0 && (
        <p style={{ fontSize: "13px", color: "#888", marginBottom: "20px" }}>
          Select a ticket to add to Task Status
        </p>
      )}

      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
            <small style={{ color: "#666" }}>{task.title}</small>
            <span style={{ fontSize: "10px", fontWeight: "bold", color: "orange" }}>In-Progress</span>
          </div>
          
          <button
            onClick={() => onComplete(task.id)}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              borderRadius: "4px",
              border: "none",
              background: "#0B9B45",
              color: "#fff",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "12px"
            }}
          >
            Complete
          </button>
        </div>
      ))}

      {/* --- RESOLVED SECTION (New Add) --- */}
      <div style={{ marginTop: "30px", borderTop: "1px solid #eee", paddingTop: "15px" }}>
        <h4 style={{ fontSize: "14px", fontWeight: "700", marginBottom: "10px", color: "#333" }}>
          Resolved Task
        </h4>

        {resolvedList && resolvedList.length === 0 && (
           <p style={{ fontSize: "12px", color: "#aaa" }}>No resolved tasks yet.</p>
        )}

        {resolvedList && resolvedList.map((task) => (
          <div 
            key={task.id} 
            style={{
              background: "#E6E6FA", // Light purple background like image
              padding: "8px 12px",
              borderRadius: "6px",
              marginBottom: "8px",
              fontSize: "12px",
              fontWeight: "600",
              color: "#555"
            }}
          >
            {task.title}
          </div>
        ))}
      </div>
    </div>
  );
}