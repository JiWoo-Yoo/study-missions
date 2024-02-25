const createBtn = document.getElementById("createBtn");
const checkboxContainer = document.getElementById("checkbox-container");
const num = document.getElementById("num");
const small = document.getElementById("small");
const capital = document.getElementById("capital");
const symbols = document.getElementById("symbols");
const lengthInput = document.getElementById("length");
const password = document.getElementById("password");
const copyBtn = document.getElementById("copy-btn");

let options = [];

const generateRandomString = (options, length) => {
  let randomString = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * options.length);
    let randomIndex_2 = Math.floor(Math.random() * options[randomIndex].length);
    randomString += options[randomIndex][randomIndex_2];
  }
  console.log(randomString);
  return randomString;
};

const checkOption = () => {
  if (num.checked && !options.includes("0123456789")) {
    options.push("0123456789");
  }
  if (small.checked && !options.includes("abcdefghijklmnopqrstuvwxyz")) {
    options.push("abcdefghijklmnopqrstuvwxyz");
  }
  if (capital.checked && !options.includes("ABCDEFGHIJKLMNOPQRSTUVWXYZ")) {
    options.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (symbols.checked && !options.includes("!@#$%^")) {
    options.push("!@#$%^");
  }
  if (!num.checked && options.includes("0123456789")) {
    let index = options.indexOf("0123456789");
    options.splice(index, 1);
  }
  if (!small.checked && options.includes("abcdefghijklmnopqrstuvwxyz")) {
    let index = options.indexOf("abcdefghijklmnopqrstuvwxyz");
    options.splice(index, 1);
  }
  if (!capital.checked && options.includes("ABCDEFGHIJKLMNOPQRSTUVWXYZ")) {
    let index = options.indexOf("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    options.splice(index, 1);
  }
  if (!symbols.checked && options.includes("!@#$%^")) {
    let index = options.indexOf("!@#$%^");
    options.splice(index, 1);
  }
  let lengthValue = parseInt(lengthInput.value);
  if (lengthValue < 5 || lengthValue > 70 || isNaN(lengthValue)) {
    alert("5 이상 70 이하의 수를 입력해주세요.");
  } else {
    if (options.length > 0) {
      const newPassword = generateRandomString(options, lengthValue);
      password.value = newPassword;
      password.textContent = newPassword;
    } else {
      alert("적어도 하나 이상의 옵션을 체크해주세요.");
    }
  }
};

createBtn.addEventListener("click", checkOption);
copyBtn.addEventListener("click", () => {
  if (password.value !== undefined) {
    navigator.clipboard.writeText(password.value);
    alert("복사 완료!");
    console.log(password.value);
  }
});
