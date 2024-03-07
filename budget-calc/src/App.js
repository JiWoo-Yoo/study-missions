import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    expData: [],
    titleValue: "",
    costValue: 0,
    totalCost: Number(0),
  };
  btnStyle = {
    backgroundColor: "#7fb06d",
    color: "white",
    borderRadius: "3px",
    border: "none",
    fontSize: "20px",
    padding: "10px 20px",
    cursor: "pointer",
  };

  inputStyle = {
    padding: "10px",
    borderBottom: "1px #e6b265 solid",
    width: "47%",
    fontSize: "20px",
  };

  listStyle = () => {
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

  deleteData = (id) => {
    let newExpData = this.state.expData.filter((data) => data.id !== id);
    this.setState({ expData: newExpData }, () => {
      this.sumCost();
    });
  };

  addData = () => {
    if (this.state.titleValue === "" || this.state.costValue === 0) {
      alert("지출 항목 또는 비용을 입력해주십시오.");
      this.setState({ titleValue: "", costValue: 0 });
    } else {
      let newExpData = this.state.expData;
      newExpData.push({
        id: new Date().getTime(),
        title: this.state.titleValue,
        cost: this.state.costValue,
      });
      this.setState(
        { expData: newExpData, titleValue: "", costValue: 0 },
        () => {
          this.sumCost();
        }
      );
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  deleteAll = () => {
    this.setState({
      expData: [],
      titleValue: "",
      costValue: 0,
      totalCost: Number(0),
    });
  };

  sumCost = () => {
    if (this.state.expData.length < 1) {
      this.setState({ totalCost: Number(0) });
    } else {
      let total = 0;
      this.state.expData.forEach((data) => {
        total += Number(data.cost);
      });
      this.setState({ totalCost: total });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>예산 계산기</h1>
        </div>
        <div className="calcBlock">
          <div className="calcForm">
            <div className="calcInput">
              <div style={this.inputStyle}>
                지출 항목
                <input
                  name="titleValue"
                  onChange={this.handleChange}
                  type="text"
                  placeholder="예) 렌트비"
                  value={this.state.titleValue}
                />
              </div>
              <div style={this.inputStyle}>
                비용
                <input
                  name="costValue"
                  onChange={this.handleChange}
                  type="number"
                  value={this.state.costValue}
                />
              </div>
            </div>
            <div className="btnBlock">
              <button style={this.btnStyle} onClick={this.addData}>
                제출 &rarr;
              </button>
            </div>
          </div>
          <div className="listForm">
            <div className="lists">
              {this.state.expData.map((data) => (
                <div style={this.listStyle()} key={data.id}>
                  <div>{data.title}</div>
                  <div
                    style={{ color: "gray", position: "absolute", left: "50%" }}
                  >
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
                      onClick={() => this.deleteData(data.id)}
                    >
                      ❌
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="btnBlock">
              <button onClick={this.deleteAll} style={this.btnStyle}>
                목록 지우기 🗑
              </button>
            </div>
          </div>
        </div>
        <div className="total">
          <h1>총지출: {this.state.totalCost} 원</h1>
        </div>
      </div>
    );
  }
}
