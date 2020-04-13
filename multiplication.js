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
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();

  firstNumberContainer.innerHTML = firstNumber;
  secondNumberContainer.innerHTML = secondNumber;
  addPear(firstNumber);
  addOrange(secondNumber);
}

function addPear(firstPear) {
  const firstPearWrapper = document.querySelector(".firstPear");
  for (let i = 0; i < firstPear; i++) {
    const imgElement = document.createElement("img");
    imgElement.src = "images/pear.png";
    imgElement.classList.add("pearImage");
    firstPearWrapper.appendChild(imgElement);
  }
}

function addOrange(firstOrange) {
  const firstOrangeWrapper = document.querySelector(".firstOrange");
  for (let i = 0; i < firstOrange; i++) {
    const imgElement = document.createElement("img");
    imgElement.src = "images/orange.png";
    imgElement.classList.add("orangeImage");
    firstOrangeWrapper.appendChild(imgElement);
  }
}

function randomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

function calculate() {
  const firstNumber = document.querySelector(".firstNumber").innerHTML;
  const secondNumber = document.querySelector(".secondNumber").innerHTML;
  const answer = document.querySelector(".answer").value;
  const rightAnswer = +firstNumber * +secondNumber;
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
