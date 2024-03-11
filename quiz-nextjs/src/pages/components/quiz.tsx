import React, { useState, useEffect } from "react";
import { Question } from "./quizdata";
import style from "../../styles/Quiz.module.css";

interface QuizProps {
  questions: Question[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    const lis = document.querySelectorAll(`.${style.answerOption}`);
    lis.forEach((li, index) => {
      if (index === selectedOptionIndex) {
        li.classList.add(style.selected);
      } else {
        li.classList.remove(style.selected);
      }
    });
  }, [selectedOptionIndex]);

  const handleAnswerClick = (selectedAnswer: string, selectedIndex: number) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(updatedAnswers);
    setSelectedOptionIndex(selectedIndex);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
    setSelectedOptionIndex(null); // Reset selected option
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (question.A === userAnswers[index]) {
        score++;
      }
    });
    return score;
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowResults(false);
    setSelectedOptionIndex(null);
  };

  if (showResults) {
    return (
      <div className={style.quizContainer}>
        <h2>Quiz Results</h2>
        <p>
          You scored {calculateScore()} out of {questions.length}
        </p>
        <button className={style.btnNext} onClick={resetQuiz}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className={style.quizContainer}>
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p className={style.questionText}>{questions[currentQuestionIndex].Q}</p>
      <ul>
        {questions[currentQuestionIndex].O.map((option, index) => (
          <li
            key={index}
            className={`${style.answerOption} ${
              selectedOptionIndex === index ? style.selected : ""
            }`}
            onClick={() => handleAnswerClick(option, index)}
          >
            {option}
          </li>
        ))}
      </ul>
      <button className={style.btnNext} onClick={handleNextQuestion}>
        Next
      </button>
    </div>
  );
};

export default Quiz;
