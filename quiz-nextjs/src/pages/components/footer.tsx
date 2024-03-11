export default function Footer() {
  const footerStyle = {
    color: "white",
    fontSize: "20px",
  };
  return (
    <div
      style={{
        width: "100vw",
        position: "fixed",
        bottom: 0,
      }}
    >
      <footer
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "tomato",
          textAlign: "center",
          padding: "40px 10px",
        }}
      >
        <div style={footerStyle}>footer</div>
      </footer>
    </div>
  );
}
