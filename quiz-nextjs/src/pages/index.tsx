import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    if (!localStorage.getItem("quiz-state")) {
      localStorage.setItem("quiz-state", "math");
    }
  });
  return (
    <div>
      <section
        style={{
          fontSize: "100px",
          width: "1000px",
          height: "auto",
          position: "absolute" /* 절대 위치로 설정 */,
          top: "50%" /* 상단에서 50% 위치에 배치 */,
          left: "50%" /* 좌측에서 50% 위치에 배치 */,
          transform: "translate(-50%, -50%)" /* 수평 및 수직 정렬 */,
        }}
      >
        Welcom To Quiz App!
      </section>
    </div>
  );
}
