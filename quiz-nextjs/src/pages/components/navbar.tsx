import { useRouter } from "next/router";
import style from "../../styles/Navbar.module.css";
export default function Navbar() {
  const router = useRouter();

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "tomato",
        }}
      >
        <div
          onClick={() => window.location.reload()}
          style={{ cursor: "pointer" }}
        >
          <h1 style={{ color: "white", fontSize: "50px" }}>Quiz App</h1>
        </div>
        <div
          style={{
            margin: "10px 20px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "10px 20px",
            width: "40%",
          }}
        >
          <button
            type="button"
            onClick={() => {
              router.push("/");
            }}
            className={style.btnStyle}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => {
              router.push("/questions");
            }}
            className={style.btnStyle}
          >
            Question
          </button>
          <button
            type="button"
            onClick={() => {
              router.push("/state");
            }}
            className={style.btnStyle}
          >
            State
          </button>
          <button
            type="button"
            onClick={() => {
              router.push("/quizpage");
            }}
            className={style.btnStyle}
          >
            Quiz
          </button>
        </div>
      </nav>
    </div>
  );
}
