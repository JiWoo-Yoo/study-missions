import LoginButton from "../../components/LoginButton";

export default function LoginPage({ handleLogin }) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('/images/login-background.jpg')",
      }}
    >
      <nav
        className="nav"
        style={{
          width: "100%",
        }}
      >
        <img
          alt="Disney+ logo"
          src="https://upload.wikimedia.org/wikipedia/commons/archive/3/3e/20220128173228%21Disney%2B_logo.svg"
          className="nav__logo"
          onClick={() => window.location.reload()}
          style={{
            cursor: "pointer",
            position: "fixed",
            left: "40px",
            width: "80px",
            objectFit: "contain",
          }}
        />
        <div style={{ right: "10%", position: "absolute" }}>
          <LoginButton onClick={handleLogin} />
        </div>
      </nav>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div style={{ position: "relative" }}>
          <img
            alt="Disney+ logo"
            // src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg"
            src="https://upload.wikimedia.org/wikipedia/commons/archive/3/3e/20220128173228%21Disney%2B_logo.svg"
            style={{
              width: "400px",
              height: "auto",
            }}
          />
        </div>

        <div
          style={{ position: "relative", color: "white", textAlign: "center" }}
        >
          <div
            style={{
              fontSize: "50px",
              width: "800px",
              height: "auto",
              color: "white",
              marginBottom: "20px",
            }}
          >
            이 모든 이야기가 여기에
            <br />
            지금 스트리밍 중
          </div>
        </div>

        <div
          style={{ position: "relative", color: "white", textAlign: "center" }}
        >
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              fontSize: "30px",
              width: "400px",
              height: "auto",
              borderRadius: "6px",
              border: "none",
              padding: "10px 20px",
              margin: "20px 0",
            }}
          >
            월 13,900원
          </button>
          <div
            style={{
              fontSize: "10px",
              color: "white",
              width: "800px",
              height: "auto",
            }}
          >
            *월간 멤버십 12개월 구독료 대비 할인된 가격입니다.
            <br />
            추가 약관 적용.
          </div>
        </div>
      </div>
    </div>
  );
}
