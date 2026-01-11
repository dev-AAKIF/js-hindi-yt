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