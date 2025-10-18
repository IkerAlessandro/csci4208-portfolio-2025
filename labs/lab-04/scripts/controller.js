initControls();

function initControls() {
    // button to submit guess number
    const button = document.getElementById('guess-button');

    //up buttons
    const upHundredsButton = document.getElementById('up-100s');
    const upTensButton = document.getElementById('up-10s');
    const upOnesButton = document.getElementById('up-1s');

    //down buttons
    const downHundredsButton = document.getElementById('down-100s');
    const downTensButton = document.getElementById('down-10s');
    const downOnesButton = document.getElementById('down-1s');

    // listener for guess button
    button.addEventListener('click', buttonEventHandler);

    //listeners for up buttons
    upHundredsButton.addEventListener('click', () => incrementEventHandler('hundreds'));
    upTensButton.addEventListener('click', () => incrementEventHandler('tens'));
    upOnesButton.addEventListener('click', () => incrementEventHandler('ones'));

    //listeners for down buttons
    downHundredsButton.addEventListener('click', () => decrementEventHandler('hundreds'));
    downTensButton.addEventListener('click', () => decrementEventHandler('tens'));
    downOnesButton.addEventListener('click', () => decrementEventHandler('ones'));
}

function buttonEventHandler() {
    const guess = guesser.toString(); 
    guessNumber(guess);
}

function incrementEventHandler(key) {
    guesser.increment(key);
    printDigits();
}

function decrementEventHandler(key) {
    guesser.decrement(key);
    printDigits();
}