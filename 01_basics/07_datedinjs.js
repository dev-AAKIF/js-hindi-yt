// Dates

let myDate = new Date()

// console.log(myDate); //  => returns current date

// console.log(typeof myDate); // => Returns the typeof - Object

// console.log(myDate.toString()); // => Returns date in string - Sat Dec 20 2025 19:30:15 GMT+0000 (Coordinated Universal Time)

// console.log(typeof (myDate.toString())); // returns - typeof string

// console.log(myDate.toDateString()); // returns only date and no time in the format of day, date - month - year Sat Dec 20 2025

// console.log(typeof myDate.toDateString()); // returns string 

// console.log(myDate.toLocaleDateString()); // returns onlynumeric date and no alphabetical date like mon,tue,wed - 12/20/2025

// console.log(typeof myDate.toLocaleDateString()); // returns - string

// let myCreatedDate = new Date(2025, 10, 9 ) // inserts this specific date into the date object

// let myCreatedDate = new Date(2025, 10, 9, 23, 55, 3 ) // inserts this specific date along with time into the date object

// console.log(myCreatedDate); // returns whole date in this format of date along with time and milliseconds -> 2025-11-09T23:55:03.000Z 

// let myCreatedDate = new Date("12-21-2025")
// console.log(myCreatedDate) // returns 2025-12-21T00:00:00.000Z

// console.log(myCreatedDate.toLocaleString()); // returns 12/21/2025, 12:00:00 AM

let myCreatedDate = new Date("12-21-2025")
// console.log(myCreatedDate);

let myTimeStamp = Date.now() 
// console.log(myTimeStamp); // returns time in milliseconds => 1766259825172
// console.log(myCreatedDate.getTime()); // returns stored time from object i.e. myCreatedDate in milliseconds => 1766275200000
// console.log(Date.now() / 1000);// returns time with decimal in milliseconds . => 1766260133.771
// console.log(Math.floor (Date.now() / 1000)); // returns time without decimal and in seconds and not in milliseconds => 1766260156

let newDate = new Date()
// console.log(newDate); // returns current date => 2025-12-21T00:00:00.000Z

// console.log(newDate.getMonth()); // returns month in number and from 0 index

// console.log(newDate.getMonth() + 1); // often used to show current month cause it increases the indexing 1, often used to show month to the end users

// console.log(newDate.getDay()); // return numberic day (0-6) due to indexing 0

// console.log(newDate.getDay() +  1);// returns numeric day along with an additional 1 so that the end user gets the exact value without 0 indexing 0

// console.log(`The Current Day is ${newDate.getDay()} and current time is ${newDate.getTime()}`);

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    month: "long",
})); // returns the exact current day and current month in full format
