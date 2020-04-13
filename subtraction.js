const closeButtonElement = document.querySelector(".nextBtn");
const tryAgain = document.querySelector(".tryAgainBtn");
const popUpWrapper = document.querySelector(".popUpWrapper");
const popUpText = popUpWrapper.querySelector(".popUpText");
const popUp = document.querySelector(".popUp");
const nextBtn = document.querySelector(".nextBtn");
const tryAgainBtn = document.querySelector(".tryAgainBtn");

const popUpWrong = document.querySelector(".popUpWrong");
const popUpTextWrong = popUpWrong.querySelector(".popUpTextWrong");

closeButtonElement.addEventListener("click", refreshPage);
tryAgain.addEventListener("click", closePopUp);

function closePopUp() {
  popUpWrapper.classList.remove("show");
  tryAgainBtn.classList.remove("show");
}

function refreshPage() {
  window.location.reload();
}

function createCalculation() {
  const firstNumberContainer = document.querySelector(".firstNumber");
  const secondNumberContainer = document.querySelector(".secondNumber");
  const firstNumber = randomNumber(10);
  const secondNumber = randomNumber(firstNumber);

  firstNumberContainer.innerHTML = firstNumber;
  secondNumberContainer.innerHTML = secondNumber;
  addPineapple(firstNumber);
  addCherry(secondNumber);
}

function addPineapple(firstPineapple) {
  const firstPineappleWrapper = document.querySelector(".firstPineapple");
  for (let i = 0; i < firstPineapple; i++) {
    const imgElement = document.createElement("img");
    imgElement.src = "images/pineapple.png";
    imgElement.classList.add("pineappleImage");
    firstPineappleWrapper.appendChild(imgElement);
  }
}

function addCherry(firstCherry) {
  const firstCherryWrapper = document.querySelector(".firstCherry");
  for (let i = 0; i < firstCherry; i++) {
    const imgElement = document.createElement("img");
    imgElement.src = "images/cherry.png";
    imgElement.classList.add("cherryImage");
    firstCherryWrapper.appendChild(imgElement);
  }
}

function randomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber + 1);
}

function calculate() {
  const firstNumber = document.querySelector(".firstNumber").innerHTML;
  const secondNumber = document.querySelector(".secondNumber").innerHTML;
  const answer = document.querySelector(".answer").value;
  const rightAnswer = +firstNumber - +secondNumber;
  popUpWrapper.classList.toggle("show");
  nextBtn.classList.toggle("show");
  if (rightAnswer === +answer) {
    popUpWrong.classList.toggle("hide");
    popUpText.innerText = "RÄTT!";
  } else {
    popUp.classList.toggle("hide");
    popUpTextWrong.innerText = "FEL!";
    tryAgainBtn.classList.toggle("show");
  }
}
