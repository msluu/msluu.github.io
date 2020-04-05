function refreshPage(){
    window.location.reload();
}

function createCalculation() {
    const firstNumberContainer = document.querySelector('.firstNumber');
    const secondNumberContainer = document.querySelector('.secondNumber');
    const firstNumber = randomNumber(10);
    const secondNumber = randomNumber(firstNumber);

    firstNumberContainer.innerHTML = firstNumber;
    secondNumberContainer.innerHTML = secondNumber;
    addPineapple(firstNumber);
    addCherry(secondNumber);

}

function addPineapple(firstPineapple){
    const firstPineappleWrapper = document.querySelector('.firstPineapple');
    for (let i = 0; i < firstPineapple; i++){
        const imgElement = document.createElement('img');
        imgElement.src = 'images/pineapple.png';
        imgElement.classList.add('pineappleImage');
        firstPineappleWrapper.appendChild(imgElement);
    }

}

function addCherry(firstCherry){
    const firstCherryWrapper = document.querySelector('.firstCherry');
    for (let i = 0; i < firstCherry; i++){
        const imgElement = document.createElement('img');
        imgElement.src = 'images/cherry.png';
        imgElement.classList.add('cherryImage');
        firstCherryWrapper.appendChild(imgElement);
    }
}

function randomNumber(maxNumber) {
    return Math.floor((Math.random() * maxNumber) + 1);
}

function calculate() {
    const firstNumber = document.querySelector('.firstNumber').innerHTML;
    const secondNumber = document.querySelector('.secondNumber').innerHTML;
    const answer = document.querySelector('.answer').value;
    const rightAnswer = +firstNumber - +secondNumber;
    if (rightAnswer === +answer) {
        alert(' Rätt!!!');
        refreshPage();
    }
    else {
        alert(' Fel! Testa igen.');
    }
}
