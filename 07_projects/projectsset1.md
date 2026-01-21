# Projects related to DOM

## Project Link
[Click Here]("https://stackblitz.com/edit/vitejs-vite-bz7hv2fu?file=1-colorChanger%2Fchaiaurjs.js"
)

# Solution Code

## Project 1 Solution

```Javascript

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    // console.log(e);
    console.log(e.target);

    // if (e.target.id === "grey") {
    //   body.style.backgroundColor = e.target.id;
    // } 
    // if (e.target.id === "white") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "blue") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if(e.target.id === "yellow") {
    //   body.style.backgroundColor = e.target.id;
    // }

    //-------------- above code  isnot efficient and not good for a 2y experience banda

    // --------------------------------

    // this one is using if and else if

    // if (e.target.id === "grey") {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === "white") {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === "blue") {
    //   body.style.backgroundColor = e.target.id;
    // } else if(e.target.id === "yellow") {
    //   body.style.backgroundColor = e.target.id;
    // }

    //----------------------------------

    // now using switch cases

    switch(e.target.id) {

    case "grey" :
        body.style.backgroundColor = e.target.id
        break;
        
    case "white" :
        body.style.backgroundColor = e.target.id
        break;

    case "blue" :
        body.style.backgroundColor = e.target.id
        break;

    case "yellow" :
        body.style.backgroundColor = e.target.id
        break;
    
    default:
        body.style.backgroundColor = e.target.id
        break
    }
     
  });
});


```





## Project 2 Solution

```Javascript

const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    const bmiResult= document.querySelector("#bmi-result");

    if (height === "" || height < 0 ||isNaN(height)) {
        results.innerHTML = `Please enter a valid Height: ${height}`
        results.style.backgroundColor = "#DC2626"
        results.style.color = "#ffe"
        
    } else if (weight === "" || weight < 0 ||isNaN(weight)) {
        results.innerHTML = `Please enter a valid weight: ${weight}`
        results.style.backgroundColor = "#DC2626"
        results.style.color = "#ffe"
    } else  {
        const bmi = (weight / ((height * height)  / 10000 )).toFixed(2);
        results.innerHTML = `${bmi}`
        results.style.backgroundColor = "#16A34A"
        results.style.color = "#000"
        if (bmi < 18.6) {
            bmiResult.innerHTML = `Your BMI is Under Weight: ${bmi}`
            bmiResult.style.backgroundColor = "#DC2626"
            bmiResult.style.color = "#ffe"
            
        } else if (bmi > 24.9 ) {
            bmiResult.innerHTML = `Your BMI is Over Weight: ${bmi}`
            bmiResult.style.backgroundColor = "#DC2626"
            bmiResult.style.color = "#ffe"
        } else  {
            bmiResult.innerHTML = `Your BMI is in Average Range : ${bmi}`
            bmiResult.innerHTML = `${bmi}`
            bmiResult.style.backgroundColor = "#16A34A"
            bmiResult.style.color = "#000"
        }
    }

})



```




## Project 3

```Javascript

const clock = document.querySelector("#clock")
const clock2 = document.querySelector("#clock2")


setInterval(function() {
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()

}, 1000 );


```




## Project 4

```Javascript
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
```




## Project 5

```Javascript


const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class='color'>
        <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>
    `
})


```



## Project 6

```javascript

// Generating a Random Color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;

const startChangingColor = function() {
    if(!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
    }

    function changeBgColor() {
    document.body.style.backgroundColor = randomColor()
    }  
};


const stopChangingColor = function() {
    clearInterval(intervalId)
    intervalId = null;    
}

document.querySelector("#start").addEventListener('click', startChangingColor);

document.querySelector("#stop").addEventListener('click', stopChangingColor);


```

## Project 7

```javascript

```

## Project 8

```javascript


```

## Project 9

```javascript


```