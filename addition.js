const closeButtonElement = document.querySelector(".popUpWrapper");
const rightNum = document.querySelector(".popUpWrapper");
closeButtonElement.addEventListener("click", refreshPage);

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
  addBananas(firstNumber);
  addApples(secondNumber);
}

function addBananas(firstBananas) {
  const firstBananaWrapper = document.querySelector(".firstBananas");
  for (let i = 0; i < firstBananas; i++) {
    const imgElement = document.createElement("img");
    imgElement.src = "images/banana2.png";
    imgElement.classList.add("bananaImage");
    firstBananaWrapper.appendChild(imgElement);
  }
}

function addApples(firstApples) {
  const firstAppleWrapper = document.querySelector(".firstApples");
  for (let i = 0; i < firstApples; i++) {
    const imgElement = document.createElement("img");
    imgElement.src = "images/apple2.png";
    imgElement.classList.add("appleImage");
    firstAppleWrapper.appendChild(imgElement);
  }
}

function randomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

function calculate() {
  const firstNumber = document.querySelector(".firstNumber").innerHTML;
  const secondNumber = document.querySelector(".secondNumber").innerHTML;
  const answer = document.querySelector(".answer").value;
  const rightAnswer = +firstNumber + +secondNumber;
  if (rightAnswer === +answer) {
    rightNum.classList.toggle("show");
  } else {
    alert(" Fel! Testa igen.");
  }
}
