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



```




## Project 4

```Javascript



```




## Project 5

```Javascript



```
