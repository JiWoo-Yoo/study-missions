const GithubButton = (props) => {
  const cliendId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const GITHUB_LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${cliendId}`;
  const handleLogin = () => {
    window.location.assign(GITHUB_LOGIN_URL);
  };
  return (
    <div>
      <button
        onClick={handleLogin}
        style={{
          color: "white",
          background: "none",
          border: "1px solid white",
          borderRadius: "10px",
          fontSize: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        로그인
      </button>
    </div>
  );
};

export default GithubButton;
