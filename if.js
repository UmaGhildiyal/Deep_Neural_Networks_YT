// logic control or control flow
// contitional code --- login ke liye alag logout ke liye alag
// ___________________________________________________________________________

//if
// if (condition==true) {scope} --- if false code will not execute

// const temprature = 41;

// if (temprature < 50) {
//   console.log("Less than 50");
// } else {
//   console.log("Temoratue is greater than 50");
// }

// console.log("Today's Temprature ^^"); // always print if else nahi lagaya

// ____________________________________________________________________________

// <, >, <=, >=, ==, !=, ===, !==,

// == checks value
// if (2 == "2") {
//   console.log("Executed");
// }

// === strict eqaul also checks type
// if (2 === "2") {
//   console.log("Executed");
// }

// _____________________________________________________________________________

// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`You have gained power: ${power}`);
// }
// console.log(`You have gained power: ${power}`); // ReferenceError: power is not defined --- scope error

// _____________________________________________________________________________

// Short hand notation: ' ; ' at end necessary

const balance = 1000;
// if (balance > 500) console.log("Test");

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("Less than 1200");
// }

// _____________________________________________________________________________

// Nesting

const userLoggedIn = true;
const debitcard = true;
const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true;

if (userLoggedIn && debitcard) {
  console.log("Allowed to buy courses");
}

if (userLoggedInFromEmail || userLoggedInFromEmail) {
  console.log("User Logged in");
}
