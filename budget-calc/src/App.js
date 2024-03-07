import React, { useState, useCallback, useEffect } from "react";
// useCallback: 함수 렌더링 최적화
import "./App.css";
import Lists from "./components/Lists";
import Input from "./components/Input";
import CustomAlert from "./components/CustomAlert";

export default function App() {
  const [expData, setExpData] = useState([]);
  const [titleValue, setTitleValue] = useState("");
  const [costValue, setCostValue] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [keyword, keywordState] = useState("");

  const btnStyle = {
    backgroundColor: "#7fb06d",
    color: "white",
    borderRadius: "3px",
    border: "none",
    fontSize: "20px",
    padding: "10px 20px",
    cursor: "pointer",
  };

  const sumCost = useCallback(() => {
    if (expData.length < 1) {
      setTotalCost(0);
    } else {
      let total = 0;
      expData.forEach((data) => {
        total += Number(data.cost);
      });
      setTotalCost(total);
    }
  }, [expData]);

  // expData값이 바뀔때마다 sumCost 호출
  useEffect(() => {
    sumCost();
  }, [expData, sumCost]);

  const deleteAll = () => {
    setExpData([]);
    setTitleValue("");
    setCostValue(0);
    setTotalCost(0);
    keywordState("delete");
  };

  return (
    <div className="container">
      <div className="title">
        <h1>예산 계산기</h1>
        <CustomAlert keyword={keyword} />
      </div>
      <div className="calcBlock">
        <Input
          btnStyle={btnStyle}
          expData={expData}
          setExpData={setExpData}
          titleValue={titleValue}
          setTitleValue={setTitleValue}
          costValue={costValue}
          setCostValue={setCostValue}
          keywordState={keywordState}
        />
        <Lists
          expData={expData}
          setExpData={setExpData}
          sumCost={sumCost}
          keywordState={keywordState}
        />
        <div className="btnBlock">
          <button onClick={deleteAll} style={btnStyle}>
            목록 지우기 🗑
          </button>
        </div>
      </div>
      <div className="total">
        <h1>총지출: {totalCost} 원</h1>
      </div>
    </div>
  );
}
