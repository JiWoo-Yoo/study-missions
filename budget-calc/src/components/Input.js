import React from "react";

export default function Input({
  btnStyle,
  expData,
  setExpData,
  titleValue,
  setTitleValue,
  costValue,
  setCostValue,
  keywordState,
}) {
  const inputStyle = {
    padding: "10px",
    borderBottom: "1px #e6b265 solid",
    width: "47%",
    fontSize: "20px",
  };

  const addData = () => {
    if (titleValue === "" || costValue === 0) {
      alert("지출 항목 또는 비용을 입력해주십시오.");
      setTitleValue("");
      setCostValue(0);
    } else {
      const newExpData = [
        // 리액트 불변성 지키기 위한 전개 연산자
        ...expData,
        {
          id: new Date().getTime(),
          title: titleValue,
          cost: costValue,
        },
      ];

      setExpData(newExpData);
      setTitleValue("");
      setCostValue(0);
      keywordState("add");
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "titleValue") {
      setTitleValue(e.target.value);
    } else if (e.target.name === "costValue") {
      setCostValue(e.target.value);
    }
  };
  return (
    <div>
      <div className="calcForm">
        <div className="calcInput">
          <div style={inputStyle}>
            지출 항목
            <input
              name="titleValue"
              onChange={handleChange}
              type="text"
              placeholder="예) 렌트비"
              value={titleValue}
            />
          </div>
          <div style={inputStyle}>
            비용
            <input
              name="costValue"
              onChange={handleChange}
              type="number"
              value={costValue}
            />
          </div>
        </div>
        <div className="btnBlock">
          <button style={btnStyle} onClick={addData}>
            제출 &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
