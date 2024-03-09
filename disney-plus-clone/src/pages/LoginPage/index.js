import GithubButton from "../../components/GithubButton";

export default function LoginPage() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
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
          <GithubButton />
        </div>
      </nav>
      <div>
        <img
          alt="Disney+ logo"
          src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg"
          style={{
            width: "400px" /* 로고 이미지의 너비 */,
            height: "auto" /* 로고 이미지의 높이를 자동으로 조정 */,
            position: "absolute" /* 절대 위치로 설정 */,
            top: "50%" /* 상단에서 50% 위치에 배치 */,
            left: "50%" /* 좌측에서 50% 위치에 배치 */,
            transform: "translate(-50%, -50%)" /* 수평 및 수직 정렬 */,
          }}
        />
        <div>
          <button
            style={{
              border: "1px solid gray",
              borderRadius: "10px",
              padding: "10px 20px",
              fontSize: "20px",
              color: "white",
              backgroundColor: "#2b8236",
              width: "400px",
              height: "auto",
              position: "absolute" /* 절대 위치로 설정 */,
              bottom: "30%",
              left: "50%" /* 좌측에서 50% 위치에 배치 */,
              transform: "translate(-50%, -50%)" /* 수평 및 수직 정렬 */,
              cursor: "pointer",

              "&:hover": {
                backgroundColor: "#152717",
              },
            }}
          >
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
}
