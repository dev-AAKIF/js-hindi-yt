const clock = document.querySelector("#clock")
const clock2 = document.querySelector("#clock2")


setInterval(function() {
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()

}, 1000 );