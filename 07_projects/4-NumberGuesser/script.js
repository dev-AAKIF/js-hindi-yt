let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];

let numGuess = 0;
let totalGuess = 10;

let playGame = true;

submit.addEventListener("click", function(e) {
    e.preventDefault();

    if(!playGame) {
        resetGame()
        return;
    } else {
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    }
});

const uiAlert = document.querySelector("#uiAlert");

function showAlert(message, type = "error") {
  uiAlert.textContent = message;
  uiAlert.className = `ui-alert ${type}`;
  setTimeout(() => {
    uiAlert.classList.add("hidden");
  }, 2500);
}


function validateGuess(guess) {
  if (isNaN(guess)) {
    showAlert("Please add a valid Number");
  } else if (guess < 1) {
    showAlert("Please add a Number greater than 1");
  } else if (guess > 100) {
    showAlert("Please add a Number lesser than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === totalGuess -1) {
      cleanUpGuess(guess);
      displayMessage(`Game Over, Random Number was ${randomNumber}`);
      submit.value = "Start Game"
      endGame();
    } else {
      cleanUpGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guessed it Right`);
      submit.value = "Start Game"
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function cleanUpGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${totalGuess - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  playGame = false;
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;

  prevGuess = [];
  numGuess = 0;

  guessSlot.innerHTML = "";
  remaining.innerHTML = totalGuess;
  lowOrHi.innerHTML = "";

  userInput.value = "";
  userInput.removeAttribute("disabled");

  submit.value = "Submit Guess";
  playGame = true;
}
