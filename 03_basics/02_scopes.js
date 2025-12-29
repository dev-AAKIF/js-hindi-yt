let a = 300

if (true) {
  let a = 10;
  const b = 20;
//   var c = 30;
  c = 30

  // console.log("Inner :",a);
  
}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);
function one() {
  const username = "Akif"

  function two() {
    const website = "www.google.com"
    console.log(username);
  }
  // console.log(website);
  two()
}

// one()

if(true) {
  const username = "Akboss"
  if(username === "Akboss") {
    const website = " github.com"
    // console.log(username + website);
  }
  // console.log(website);
  
}
// console.log(username);

// +++++++++++++++ Interesting +++++++++++++++

console.log(addOne(5));

function addOne(num1) {
  return num1 + 1
}

const addTwo = function(num) {
  return num + 2
}

addTwo(8)
