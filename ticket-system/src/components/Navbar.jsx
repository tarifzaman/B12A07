function Navbar() {
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid #eee",
          background: "#fff",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <h2>CS — Ticket System</h2>
  
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <a>Home</a>
          <a>FAQ</a>
          <a>Changelog</a>
          <a>Blog</a>
          <a>Download</a>
          <a>Contact</a>
  
          <button
            style={{
              background: "#7A5CFF",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            + New Ticket
          </button>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  