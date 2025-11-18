function Banner(props) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          padding: "30px",
          marginTop: "20px",
        }}
      >
        {/* Left Box */}
        <div
          style={{
            flex: 1,
            padding: "30px",
            borderRadius: "12px",
            background: "linear-gradient(90deg, #6A5ACD, #836FFF)",
            color: "#fff",
          }}
        >
          <h3>In Progress</h3>
          <h1>{props.inProgress}</h1>
        </div>
  
        {/* Right Box */}
        <div
          style={{
            flex: 1,
            padding: "30px",
            borderRadius: "12px",
            background: "linear-gradient(90deg, #FF7575, #FF9E9E)",
            color: "#fff",
          }}
        >
          <h3>Resolved</h3>
          <h1>{props.resolved}</h1>
        </div>
      </div>
    );
  }
  
  export default Banner;
  