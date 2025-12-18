const score = 400
// console.log(score);

const balance = new Number(100.4567890)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// toFixed is always used for post decimals (numbers after decimals)
// toPrecision is always used for overall number including no decimal numbers

const otherNumber = 123.78957
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // .toLocaleString add `,` between numbers
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++ Maths ++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.4)); // rounds off a number based on 0-5,6-9 
// console.log(Math.ceil(4.2)); // takes highest value
// console.log(Math.floor(4.9)); // takes lowest value
// console.log(Math.min(4,3,5,6,8)); //finds minimum value among the array
// console.log(Math.max(4,3,5,6,8)); // finds maximum value among the array

// console.log(Math.random());
// console.log(Math.random() * 10);
// console.log((Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
console.log(Math.floor(Math.random() * (max - min + 1)));

// console.log(Math.floor(Math.random() * (max - min - 1)) + min + 1); // exlcuding 10 and 20