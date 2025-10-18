function printTimeRemaining (time) {
    const timeElement = document.getElementById('time');
    timeElement.textContent = time;
}

function printClue (status) {
    const [digit100, digit10, digit1] = (status === 'HI') ? ['H', 'I', '-'] : ['L', 'O', '-'];
    document.getElementById('digit-100s').src = `assets/${digit100}.png`;
    document.getElementById('digit-10s').src = `assets/${digit10}.png`;
    document.getElementById('digit-1s').src = `assets/${digit1}.png`;
    setTimeout(printDigits, 1000);
}

function printDigits () {
    document.getElementById('digit-100s').src = `assets/${guesser.hundreds}.png`;
    document.getElementById('digit-10s').src =  `assets/${guesser.tens}.png`;
    document.getElementById('digit-1s').src =  `assets/${guesser.ones}.png`;
}

function printGameOver (status) {
    let result;
    if (status === 'WIN') result = `<h1>YOU WON</h1> <p>You got it in ${30 - time} seconds</p>`;
    else result = `<h1>Game over</h1> <p>The passcode was ${passcode}<p>`;
    document.body.innerHTML = result;
}