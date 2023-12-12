"use strict";
// BTN

const againBtn = document.querySelector(".again");
const languageEng = document.querySelector(".eng");
const languageUzb = document.querySelector(".uzb");
const languageRus = document.querySelector(".rus");
const check = document.querySelector(".check");

const body = document.querySelector("body");
const between = document.querySelector(".between");
const h1 = document.querySelector("h1");
const hiddenNumber = document.querySelector(".numberHidden");
const message = document.querySelector(".message");
const opportunity = document.querySelector(".opportunity");
const opportunity_num = document.querySelector(".opportunity_num");
const highscore = document.querySelector(".highscore");
const highscore_num = document.querySelector(".highscore_num");

//input
const inputNumber = document.querySelector(".guess");

const winAudio = new Audio("./win.mp3");
const defeatAudio = new Audio("./defeat.mp3");

languageUzb.addEventListener("click", () => {
  againBtn.textContent = "Takror!";
  check.textContent = "Tekshir";
  h1.textContent = "O'ylangan raqam ?";
  message.textContent = "Taxmin qilishni boshlang";
  opportunity.textContent = "Urinishlar soni";
  highscore.textContent = "Yuqori natija";
  between.textContent = "(1 va 20 oralig'i)";
});

languageEng.addEventListener("click", () => {
  againBtn.textContent = "Again!";
  check.textContent = "Check!";
  h1.textContent = "Guess My Number!";
  message.textContent = "Start guessing...";
  opportunity.textContent = "Opportunity";
  highscore.textContent = "Highscore";
  between.textContent = "(Between 1 and 20)";
});

languageRus.addEventListener("click", () => {
  againBtn.textContent = "Повторить!";
  check.textContent = "Проверять!";
  h1.textContent = "Угадай мой номер!";
  message.textContent = "Начни гадать...";
  opportunity.textContent = "Возможность";
  highscore.textContent = "Рекорд";
  between.textContent = "(От 1 до 20)";
});

let randomNumber = null;
let record = 0;

const random = () => {
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(randomNumber);
};
random();

check.addEventListener("click", () => checkNumber());

inputNumber.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkNumber();
  }
});

function checkNumber() {
  if (randomNumber === +inputNumber.value) {
    hiddenNumber.textContent = randomNumber;
    body.style.backgroundColor = "green";
    winAudio.play();
    highscore_num.textContent =
      opportunity_num.textContent > highscore_num.textContent
        ? opportunity_num.textContent
        : highscore_num.textContent;
    if (record < +highscore_num.textContent) {
      record = +opportunity_num.textContent;
    }
    return;
  }
  opportunity_num.textContent--;
  if (+opportunity_num.textContent === 0) {
    body.style.backgroundColor = "red";
    defeatAudio.play();
    inputNumber.value = "";
    
    return;
  }
  inputNumber.value = "";
}

againBtn.addEventListener("click", () => {
  body.style.backgroundColor = "#222";
  inputNumber.value = "";
  hiddenNumber.textContent = "?";
  opportunity_num.textContent = "6";
  random();
});
