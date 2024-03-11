import style from "../styles/Navbar.module.css";
import { useState, useEffect } from "react";
export default function State() {
  const [selectedValue, setSelectedValue] = useState<string>("math");

  useEffect(() => {
    localStorage.setItem("quiz-state", selectedValue);
  }, [selectedValue]);
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    localStorage.setItem("quiz-state", selectedValue);
  };

  return (
    <div
      style={{
        height: "auto",
        position: "absolute" /* 절대 위치로 설정 */,
        top: "50%" /* 상단에서 50% 위치에 배치 */,
        left: "50%" /* 좌측에서 50% 위치에 배치 */,
        transform: "translate(-50%, -50%)" /* 수평 및 수직 정렬 */,
      }}
    >
      <select
        name="quiz-type"
        className={style.btnStyle}
        style={{ width: "50vw", textAlign: "center", fontSize: "30px" }}
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option value="math">Math</option>
        <option value="english">English</option>
      </select>
    </div>
  );
}
