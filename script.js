let randomNumber = parseInt((Math.random() * 100 + 1));
const button = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const lastGuesses = document.querySelector('.guesses');
const guessRemaining = document.querySelector('.lastResult');
const output = document.querySelector('.output');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
// const text = document.createTextNode("");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    
    button.addEventListener('click', (event) => {

        event.preventDefault();

        const guess = parseInt(userInput.value);

        validateGuess(guess);
    })
}


const validateGuess = (guess) => {
    /*
        Validate Enter Number:
        Always a Number
        Number between 1 and 100

    */

    if (isNaN(guess)) {
    
        displayMessage(`Please Enter a valid number`);

    }
    else if (guess < 0) {
        
        displayMessage(`Please Enter a valid (positive) number`);

    }
    else if (guess > 100) {
        
        displayMessage(`Please Enter a number between 1 and 100`);

    }
    else {
        prevGuess.push(guess);
        
        if (numGuess >= 10) {

            cleanUpGuess(guess);

            displayMessage(`Game Over. Random number is ${randomNumber} `);

            endGame();

        }
        else {

            cleanUpGuess(guess);

            checkGuess(guess);
        }
    }
}



const checkGuess = (guess) => {

    /*
         
    */
    if (guess === randomNumber) {

        displayMessage(`You guessed it right`);

        endGame();

    }
    else if (guess < randomNumber) {

        displayMessage(`Number is TOOO Low`)

    }
    else if (guess > randomNumber) {

        displayMessage(`Number is TOOO High`)

    }
}



const cleanUpGuess = (guess) => {

    userInput.value = '';

    lastGuesses.innerHTML += `${guess} `;

    numGuess = numGuess + 1;

    guessRemaining.innerHTML = `${11 - numGuess}`;

}



const displayMessage = (message) => {

    output.innerHTML = `<h2>${message}</h2>`;

}



const endGame = () => {
    
    userInput.value = '';
    userInput.setAttribute('disabled', '');

    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;

    startOver.appendChild(p);

    playGame = false;

    newGame();
}



const newGame = () => {
    const newGameBtn = document.querySelector('#newGame');

    newGameBtn.addEventListener('click', (event) => {

        randomNumber = parseInt((Math.random() * 100 + 1));

        prevGuess = [];

        numGuess = 1;

        lastGuesses.innerHTML = '';

        guessRemaining.innerHTML = `${11 - numGuess}`;

        userInput.removeAttribute('disabled');

        output.innerHTML = '';

        startOver.removeChild(p);

        playGame = true;

    })
}

