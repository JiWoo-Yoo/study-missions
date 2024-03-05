const wrapper = document.querySelector(".wrapper");
const dataBoard = document.querySelector(".data-container");
const errors = dataBoard.querySelector("#errors");
const time = dataBoard.querySelector("#time");
const accuracy = dataBoard.querySelector("#accuracy");
const sentence = document.querySelector("#sentence");
const input = document.querySelector("#input");

const sentences = [
  "he realized what was happening and told the others.",
  "I want to eat some food.",
  "We all need to do exercise.",
];

const timeH2 = time.querySelector("h2");
const accuracyH2 = accuracy.querySelector("h2");
const errorsH2 = errors.querySelector("h2");

let i = 0;
let err = 0;
let sec = 20;
let acc = 0;
let interval;
const gameEnd = () => {
  clearInterval(interval);
  // 3. 타임 오버 혹은 문장 전부 클리어
  // 다시 시작 버튼 활성화
  const retryBtn = document.createElement("button");
  retryBtn.textContent = "Retry!";
  retryBtn.classList.add("retry-btn");
  retryBtn.addEventListener("click", () => startGame());
  wrapper.appendChild(retryBtn);
};

const timer = () => {
  sec -= 1;
  timeH2.innerText = `${sec}S`;
  if (sec === 0) {
    gameEnd();
  }
};

const startGame = () => {
  i = 0;
  err = 0;
  sec = 20;
  acc = 0;
  interval;
  input.removeEventListener("click", startGame);
  // 1-1. 문장 보여주기
  sentence.textContent = sentences[i];
  // 1-2. 시간초 카운트다운 시작
  interval = setInterval(timer, 1000);

  // 2. 타이핑 할 경우
  // 2-1. 오류 체크
  // 2-2. 정확도 체크
  // 2-3. 틀린 부분 문장에 표시
  // 2-4. 타이핑 완료하면 다음 단계로 넘어가기
};

// 1. 입력 부분에 클릭했을 때 게임 시작
input.addEventListener("click", startGame);
