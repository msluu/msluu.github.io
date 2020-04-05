function refreshPage(){
    window.location.reload();
}

function createCalculation() {
    const firstNumberContainer = document.querySelector('.firstNumber');
    const secondNumberContainer = document.querySelector('.secondNumber');
    const firstNumber = randomNumber();
    const secondNumber = randomNumber();

    firstNumberContainer.innerHTML = firstNumber;
    secondNumberContainer.innerHTML = secondNumber;
    addStrawberry(firstNumber);
    addPerson(secondNumber);

}

function addStrawberry(firstStrawberry){
    const firstStrawberryWrapper = document.querySelector('.firstStrawberry');
    for (let i = 0; i < firstStrawberry; i++){
        const imgElement = document.createElement('img');
        imgElement.src = 'images/strawberry.png';
        imgElement.classList.add('strawberryImage');
        firstStrawberryWrapper.appendChild(imgElement);
    }

}

function addPerson(firstPerson){
    const firstPersonWrapper = document.querySelector('.firstPerson');
    for (let i = 0; i < firstPerson; i++){
        const imgElement = document.createElement('img');
        imgElement.src = 'images/person.png';
        imgElement.classList.add('personImage');
        firstPersonWrapper.appendChild(imgElement);
    }
}

function randomNumber() {
    return Math.floor((Math.random() * 10) + 1);
}

function calculate() {
    const firstNumber = document.querySelector('.firstNumber').innerHTML;
    const secondNumber = document.querySelector('.secondNumber').innerHTML;
    const answer = document.querySelector('.answer').value;
    const rightAnswer = +firstNumber / +secondNumber;
    if (rightAnswer === +answer) {
        alert(' Rätt!!!');
        refreshPage();
    }
    else {
        alert(' Fel! Testa igen.');
    }
}
