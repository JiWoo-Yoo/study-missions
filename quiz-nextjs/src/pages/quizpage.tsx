import React, { useEffect, useState } from "react";
import QuizData, { Question } from "./components/quizdata";
import Quiz from "./components/quiz";
import Questions from "./questions";

export default function QuizPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [qstate, setQstate] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("quiz-state");
      if (savedState) {
        setQstate(savedState);
      }
    }
  }, []);

  useEffect(() => {
    if (qstate) {
      const selectedQuestions = QuizData[qstate];
      setQuestions(selectedQuestions);
    }
  }, [qstate]);

  return (
    <div>
      <h1>Quiz Page</h1>
      <div>
        <h2>
          Category: <span style={{ color: "tomato" }}>{qstate}</span>
        </h2>
        <h3>Go to 'State' to change Category.</h3>
      </div>
      {questions.length > 0 && (
        <div>
          <Quiz questions={questions} />
        </div>
      )}
    </div>
  );
}
