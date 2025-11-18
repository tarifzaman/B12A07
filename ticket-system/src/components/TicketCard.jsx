function TicketCard(props) {
    return (
      <div
        style={{
          padding: "20px",
          borderRadius: "12px",
          background: "#fff",
          border: "1px solid #eee",
          marginBottom: "20px",
        }}
      >
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p><strong>Customer:</strong> {props.customer}</p>
        <p><strong>Priority:</strong> {props.priority}</p>
        <p><strong>Status:</strong> {props.status}</p>
        <p><strong>Created At:</strong> {props.createdAt}</p>
      </div>
    );
  }
  
  export default TicketCard;
  