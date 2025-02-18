const LoginButton = ({ onClick }) => {
  return (
    <div>
      <button
        style={{
          color: "white",
          background: "none",
          border: "1px solid white",
          borderRadius: "10px",
          fontSize: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        LOGIN
      </button>
    </div>
  );
};

export default LoginButton;
