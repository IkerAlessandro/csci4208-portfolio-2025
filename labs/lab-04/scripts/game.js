const passcode = Math.floor( Math.random() * 1000 );
let tries = 10;

const number = document.getElementById('guess-text');
const guess_button = document.getElementById('guess-button');
const attemptsView = document.getElementById('attempts');
const cluesList = document.getElementById('clues');

guess_button.addEventListener('click', guessNumber);

function guessNumber() {
    tries--;
    attemptsView.textContent = tries;

    const guess = number.value;
    
    if (guess == passcode){
        document.body.innerHTML = `<h1>YOU WON</h1> <p>You got it with ${tries} attempts left</p>`;
    } else if (tries <= 0){
        document.body.innerHTML = `<h1>Game over</h1> <p>The passcode was ${passcode}<p>`;
    } else {
        giveClue(guess);
    }
}

function giveClue(guess) {
    if (guess > passcode) cluesList.innerHTML += `<li>${guess} is too high</li>`;
    else cluesList.innerHTML += `<li>${guess} is too low</li>`;
}