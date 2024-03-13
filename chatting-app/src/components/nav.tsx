export default function Nav() {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "tomato",

          padding: "10px",
          fontWeight: "bold",
        }}
      >
        <div style={{ fontSize: "30px", fontStyle: "bold" }}>Tomato App</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button
            style={{
              marginRight: "10px",
              padding: "5px 10px",
              color: "tomato",
              backgroundColor: "white",
              borderRadius: "5px",
              border: "none",
            }}
          >
            Profile
          </button>
          <button
            style={{
              marginRight: "10px",
              padding: "5px 10px",
              color: "tomato",
              backgroundColor: "white",
              borderRadius: "5px",
              border: "none",
            }}
          >
            Out
          </button>
        </div>
      </nav>
    </div>
  );
}
