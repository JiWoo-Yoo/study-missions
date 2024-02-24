const quizData = [
  {
    Q: "1 + 1 = ?",
    O: [1, 2, 3, 4],
    A: 1 + 1,
  },
  {
    Q: "3 - 10 = ?",
    O: [-10, -9, -8, -7],
    A: 3 - 10,
  },
  {
    Q: "7 + 8 = ?",
    O: [10, 15, 20, 25],
    A: 7 + 8,
  },
  {
    Q: "3 x 9 = ?",
    O: [9, 18, 27, 36],
    A: 3 * 9,
  },
  {
    Q: "12 * 12 = ?",
    O: [144, 169, 196, 225],
    A: 12 ** 2,
  },
];

const title = document.querySelector(".title");
const quizBoard = document.querySelector(".quiz-board");
const background = document.querySelector("body");
const options = document.querySelector(".quiz-options");
let score = 0;
let i = 0;

const restart = () => {
  score = 0;
  i = 0;
  const retryBtn = document.querySelector(".retry-btn");
  retryBtn.classList.remove(".retry-btn");
  quizBoard.removeChild(retryBtn);
  showQuiz();
};

const check = (option, answer) => {
  const nextBtn = document.createElement("button");
  if (option === answer) {
    score += 1;
    background.style.backgroundColor = "green";
  } else {
    background.style.backgroundColor = "red";
  }
  for (let j = 0; j < options.children.length; j += 1) {
    const btn = options.children[j];
    if (btn.textContent == answer) {
      btn.style.backgroundColor = "green"; // 정답인 버튼은 녹색으로 스타일 적용
    } else {
      btn.style.backgroundColor = "red"; // 오답인 버튼은 빨간색으로 스타일 적용
    }
    btn.disabled = true; // 선택 후에는 버튼 비활성화
  }
  nextBtn.textContent = "Next";
  nextBtn.classList.add("next-btn");
  nextBtn.addEventListener("click", () => showQuiz());

  quizBoard.appendChild(nextBtn);
};

const showQuiz = () => {
  i += 1;
  const nextBtn = document.querySelector(".next-btn");
  if (nextBtn) {
    background.style.backgroundColor = "gray";
    nextBtn.classList.remove("next-btn");
    quizBoard.removeChild(nextBtn);
  }

  if (i <= quizData.length) {
    const quiz = quizData[i - 1];
    quizBoard.textContent = `Q${i}. ${quiz.Q}`;

    options.innerHTML = "";
    const answer = quiz.A;
    // 선택지 생성
    let cnt = 0;
    quiz.O.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option-btn");
      button.id = `a${cnt + 1}`;
      cnt += 1;
      button.addEventListener("click", () => check(option, answer));
      options.appendChild(button);
    });
    quizBoard.appendChild(options);
  } else {
    // 퀴즈 끝나면 결과 보여주기
    quizBoard.textContent = `퀴즈가 끝났습니다. 점수: ${score}/${quizData.length}`;

    const retryBtn = document.createElement("button");
    retryBtn.textContent = "Retry!";
    retryBtn.classList.add("retry-btn");

    retryBtn.addEventListener("click", () => restart());
    quizBoard.appendChild(retryBtn);
  }
};

title.addEventListener("click", () => {
  title.style.display = "none";
  quizBoard.style.display = "grid";

  showQuiz();
});
