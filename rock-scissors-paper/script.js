const scoreboard = document.querySelector(".scoreboard");
const gameboard = document.querySelector(".gameboard");

let player_cnt = 0;
let computer_cnt = 0;
let remaining = 10;

const rsp = (hand, remain, playerScore, computerScore, whoWin) => {
  // 가위바위보 구현
  // 1~3까지의 정수 난수 생성(1: 가위, 2: 바위, 3: 보)
  const comRsp = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  let result = "";

  // 겨루기
  if (hand === "가위") {
    if (comRsp === 1) {
      // tie
      result = "tie";
    } else if (comRsp === 2) {
      // user lose
      result = "lose";
    } else if (comRsp === 3) {
      // user win
      result = "win";
    }
  } else if (hand === "바위") {
    if (comRsp === 1) {
      // user win
      result = "win";
    } else if (comRsp === 2) {
      // tie
      result = "tie";
    } else if (comRsp === 3) {
      // user lose
      result = "lose";
    }
  } else if (hand === "보") {
    if (comRsp === 1) {
      // user lose
      result = "lose";
    } else if (comRsp === 2) {
      // user win
      result = "win";
    } else if (comRsp === 3) {
      // tie
      result = "tie";
    }
  }

  // 점수 처리
  if (result == "win") {
    whoWin.style.color = "green";
    whoWin.textContent = `당신의 승리!`;
    player_cnt += 1;
  } else if (result == "lose") {
    whoWin.style.color = "red";
    whoWin.textContent = `컴퓨터의 승리!`;
    computer_cnt += 1;
  } else if (result == "tie") {
    whoWin.style.color = "#3a01df";
    whoWin.textContent = `비겼습니다!`;
  }

  remaining -= 1;
  if (remaining == 0) {
    gameEnd();
  } else {
    remain.textContent = `남은 횟수: ${remaining}`;
    playerScore.textContent = player_cnt;
    computerScore.textContent = computer_cnt;
  }
};

const defaultDisplay = () => {
  // 시작 화면
  const startBtn = document.createElement("button");
  startBtn.textContent = "시작!";
  startBtn.classList.add("start-btn");
  startBtn.addEventListener("click", gameDisplay);

  gameboard.appendChild(startBtn);
};

const gameDisplay = () => {
  gameboard.innerHTML = "";
  gameboard.style.display = "block";

  const player = document.querySelector("#player");
  const computer = document.querySelector("#computer");

  const playerScore = document.createElement("div");
  const computerScore = document.createElement("div");
  playerScore.classList.add("player-score");
  computerScore.classList.add("computer-score");

  playerScore.textContent = player_cnt;
  computerScore.textContent = computer_cnt;

  const choose = document.createElement("h2");
  const remain = document.createElement("h3");

  choose.textContent = "선택하기";
  remain.textContent = `남은 횟수: ${remaining}`;
  gameboard.appendChild(choose);
  gameboard.appendChild(remain);

  player.appendChild(playerScore);
  computer.appendChild(computerScore);

  // 누가 이겼습니다
  const whoWin = document.createElement("div");
  whoWin.classList.add("who-win");

  // 가위 바위 보
  const rockBtn = document.createElement("button");
  const scissorsBtn = document.createElement("button");
  const paperBtn = document.createElement("button");

  const btnDiv = document.createElement("div");
  btnDiv.classList.add("btn-div");

  rockBtn.textContent = "바위";
  scissorsBtn.textContent = "가위";
  paperBtn.textContent = "보";

  rockBtn.addEventListener("click", () => {
    rsp(rockBtn.textContent, remain, playerScore, computerScore, whoWin);
  });
  scissorsBtn.addEventListener("click", () => {
    rsp(scissorsBtn.textContent, remain, playerScore, computerScore, whoWin);
  });
  paperBtn.addEventListener("click", () => {
    rsp(paperBtn.textContent, remain, playerScore, computerScore, whoWin);
  });

  btnDiv.appendChild(scissorsBtn);
  btnDiv.appendChild(rockBtn);
  btnDiv.appendChild(paperBtn);

  gameboard.appendChild(btnDiv);
  gameboard.appendChild(whoWin);
};

const gameEnd = () => {
  gameboard.innerHTML = "";
  const gameOver = document.createElement("div");
  const gameResult = document.createElement("div");
  const retryBtn = document.createElement("button");

  gameOver.classList.add("game-over");
  gameOver.textContent = `게임 종료!`;

  gameResult.classList.add("game-result");
  if (player_cnt > computer_cnt) {
    gameResult.style.color = "green";
    gameResult.textContent = `😊게임에서 이겼습니다!😊`;
  } else if (player_cnt < computer_cnt) {
    gameResult.style.color = "red";
    gameResult.textContent = `😥게임에서 졌습니다!😥`;
  } else {
    gameResult.style.color = "#3a01df";
    gameResult.textContent = `😎컴퓨터와 비겼습니다!😎`;
  }

  retryBtn.textContent = "재도전";
  retryBtn.classList.add("retry-btn");
  retryBtn.addEventListener("click", retry);

  gameOver.appendChild(gameResult);
  gameOver.appendChild(retryBtn);
  gameboard.appendChild(gameOver);
};

const retry = () => {
  player_cnt = 0;
  computer_cnt = 0;
  remaining = 10;

  const player = document.querySelector("#player");
  const computer = document.querySelector("#computer");

  const playerScore = document.querySelector(".player-score");
  const computerScore = document.querySelector(".computer-score");

  playerScore.innerHTML = "";
  computerScore.innerHTML = "";

  playerScore.classList.remove("player-score");
  computerScore.classList.remove("computer-score");

  player.removeChild(playerScore);
  computer.removeChild(computerScore);

  gameDisplay();
};

defaultDisplay();
