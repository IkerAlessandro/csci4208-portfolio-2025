const passcode = Math.floor(Math.random() * 1000);
let time = 30;
let gameOver = false;
const guesser = new Guesser();
console.log(passcode)
main();

function main() {
    setTimeout(() => {
        time--;
        if (time === 0) {
            gameOver = true;
            printGameOver('OVER');
        } else if (gameOver === false) {
            printTimeRemaining(time);
            window.requestAnimationFrame(main);
        }
    }, 1000);

}

function guessNumber(guess) {
    if (guess == passcode) {
        gameOver = true;
        printGameOver('WIN');
    }
    else giveClue(guess);
}

function giveClue(guess) {
    if (guess > passcode) printClue('HI');
    else if (guess < passcode) printClue('LO');
}
