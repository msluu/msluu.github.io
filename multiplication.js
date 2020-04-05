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
    addPear(firstNumber);
    addOrange(secondNumber);

}

function addPear(firstPear){
    const firstPearWrapper = document.querySelector('.firstPear');
    for (let i = 0; i < firstPear; i++){
        const imgElement = document.createElement('img');
        imgElement.src = 'images/pear.png';
        imgElement.classList.add('pearImage');
        firstPearWrapper.appendChild(imgElement);
    }

}

function addOrange(firstOrange){
    const firstOrangeWrapper = document.querySelector('.firstOrange');
    for (let i = 0; i < firstOrange; i++){
        const imgElement = document.createElement('img');
        imgElement.src = 'images/orange.png';
        imgElement.classList.add('orangeImage');
        firstOrangeWrapper.appendChild(imgElement);
    }
}

function randomNumber() {
    return Math.floor((Math.random() * 10) + 1);
}

function calculate() {
    const firstNumber = document.querySelector('.firstNumber').innerHTML;
    const secondNumber = document.querySelector('.secondNumber').innerHTML;
    const answer = document.querySelector('.answer').value;
    const rightAnswer = +firstNumber * +secondNumber;
    if (rightAnswer === +answer) {
        alert(' Rätt!!!');
        refreshPage();
    }
    else {
        alert(' Fel! Testa igen.');
    }
}
