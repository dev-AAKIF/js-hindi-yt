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
