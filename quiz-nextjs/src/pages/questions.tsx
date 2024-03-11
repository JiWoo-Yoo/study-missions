import React from "react";
import QuizData, { Question } from "./components/quizdata";

export default function Questions() {
  return (
    <div>
      <h1>All Questions</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {Object.keys(QuizData).map((category: string, index: number) => (
          <div key={index}>
            <h2>{category}</h2>
            <ul>
              {QuizData[category].map((question: Question, qIndex: number) => (
                <li
                  key={qIndex}
                  style={{
                    border: "1px solid tomato",
                    listStyleType: "none",
                    borderRadius: "5px",
                  }}
                >
                  <strong>Q: {question.Q}</strong>
                  <ul style={{ margin: "10px" }}>
                    {question.O.map((option, oIndex) => (
                      <li
                        style={{
                          listStyleType: "none",
                          borderBottom: "1px solid tomato",
                        }}
                        key={oIndex}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                  <p style={{ fontWeight: "bold" }}>Answer: {question.A}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
