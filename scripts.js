// 1) Link this script file to the HTML file. Confirm it is linked by console.log-ing something.

// PART 1: SYNTAX PRACTICE
// PART 1.A: LOGICAL OPERATORS
console.log(`
PART 1.A LOGICAL OPERATORS`); 

// Directions: Use the variables below for the logical operator questions that follow. Each of your answers below should be in a separate console.log.
let logA = 5;
let logB = 10;
let logC = 11;
let logD = 42;
let logE = 55;

// Directions: Use a logical operator to write an expression that will evaluate to either TRUE or FALSE to figure out...

// Example) Is logA less than logB AND less than logC?
console.log((logA < logB) && (logA < logC));

// 1) Is logC less than logD AND less than logB?
console.log((logC < logD) && (logC < logB));

// 2) Is logC less than logD OR less than logB?
console.log((logC < logD) || (logC < logB));

// 3) Is logA greater than logD OR less than logE?
console.log((logA > logD) || (logA > logE));

// 4) Is logE greater than logB AND logD?
console.log((logE > logB) && (logE > logD));

// 5) Is logE divided by logA equal to log C, AND is logA multiplied by logC equal to logE? 
console.log((logC === logE / logA) && (logE === logA*logC));

// 6) Check to see if typeof(logE) does not equal "number".
console.log(typeof(logE) !== number);


// PART 1.B: ASSIGNMENT OPERATORS
console.log(`
PART 1.B ASSIGNMENT OPERATORS`); 

// Directions: Use the variables below for the assignment operator question that follow. You will need 3 separate console.logs for the following question

let sentence = "I am becoming good at "
let answerHtml = "HTML, ";
let answerCss = "CSS, ";
let answerJs = "and JavaScript.";

// 7) Write 3 console.logs below using only the 4 variables above + assignment operators to create the following three lines in the console:
// I am becoming good at HTML, 
// I am becoming good at HTML, CSS,
// I am becoming good at HTML, CSS, and JavaScript.
console.log(sentence + answerHtml);
console.log(sentence + answerHtml + answerCss);
console.log(sentence + answerHtml + answerCss + answerJs);



// PART 1.C: NESTED CONDITIONALS
console.log(`
PART 1.C NESTED CONDITIONALS`); 

// 8) 
// Directions: Write one or more nested conditional statements using the variable trafficLight below. Your conditional should do the following: 
    // The conditional should first test to see if trafficLight is equal to "red". If it is, console.log: "Stop!". 
    // If trafficLight does not equal "red", console.log: "You can keep going.". 
    // But after that, test whether trafficLight is equal to "yellow", and if it is, console.log: "Slow down though." 
    // If trafficLight is "green", console.log "It is green." 
    // If trafficLight does not equal any of these, console.log: "Caution! Something is very wrong. Proceed carefully."
    // You can change the value of trafficLight to test your code.

let trafficLight = prompt("What color is the light?");
if (trafficLight == "red") {
    console.log("Stop!");
} else {
    console.log("You can keep going");
    if (trafficLight == "yellow") {
        console.log("Slow down though.")
    } else if (trafficLight == "green") {
        console.log("It is green.")
    } else {
        console.log("Caution! Something is very wrong. Proceed carefully.")
    }
}

// PART 2: SHOPPING CART APP
console.log(`
PART 2 SHOPPING CART APP`); 

// Directions: Do your work below using the directions in the README.md file.
let name = prompt("What is your name?");
const prodOne = prompt("Enter first product.");
let prodOnePrice = Number(prompt(`${item}`))
let prodTwo = prompt("Enter second product.");      
let prodTwoPrice = prompt("Price of the second product?");  
let prodThree = prompt("Enter third product.");
let prodThreePrice = prompt("Price of the third product?");     