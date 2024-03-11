export type Question = {
  Q: string;
  O: string[];
  A: string;
};

export type QuizData = {
  [key: string]: Question[];
};

const quizData: QuizData = {
  math: [
    {
      Q: "1 + 1 = ?",
      O: ["1", "2", "3", "4"],
      A: "2",
    },
    {
      Q: "3 - 10 = ?",
      O: ["-10", "-9", "-8", "-7"],
      A: "-7",
    },
    {
      Q: "7 + 8 = ?",
      O: ["10", "15", "20", "25"],
      A: "15",
    },
    {
      Q: "3 x 9 = ?",
      O: ["9", "18", "27", "36"],
      A: "27",
    },
  ],
  english: [
    {
      Q: "사과는 영어로?",
      O: ["apple", "banana", "fox", "pear"],
      A: "apple",
    },
    {
      Q: "손은 영어로?",
      O: ["foot", "tooth", "mano", "hand"],
      A: "hand",
    },
    {
      Q: "아침식사는 영어로?",
      O: ["breakfast", "breakleg", "breakslow", "breakarm"],
      A: "breakfast",
    },
    {
      Q: "우산은 영어로?",
      O: ["paraguas", "umbrella", "rainbow", "elephant"],
      A: "umbrella",
    },
  ],
};

export default quizData;
