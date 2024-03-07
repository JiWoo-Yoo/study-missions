import React from "react";

export default function List({ expData, setExpData, sumCost }) {
  const listStyle = () => {
    return {
      padding: "20px",
      borderRadius: "4px",
      border: "1px gray solid",
      width: "auto",
      display: "flex",
      position: "relative",
      margin: "20px auto",
    };
  };

  const deleteData = (id) => {
    let newExpData = expData.filter((data) => data.id !== id);
    setExpData(newExpData);
    sumCost();
  };

  return (
    <div className="lists">
      <div>
        {expData.map((data) => (
          <div className="list" style={listStyle()} key={data.id}>
            <div>{data.title}</div>
            <div style={{ color: "gray", position: "absolute", left: "50%" }}>
              {Number(data.cost)}
            </div>
            <div style={{ position: "absolute", right: "2%" }}>
              <button
                style={{
                  backgroundColor: "#7fb06d",
                  borderRadius: "3px",
                  border: "none",
                  cursor: "pointer",
                  marginRight: "5px",
                  fontSize: "20px",
                }}
              >
                🔨
              </button>
              <button
                style={{
                  backgroundColor: "salmon",
                  borderRadius: "3px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
                onClick={() => deleteData(data.id)}
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
