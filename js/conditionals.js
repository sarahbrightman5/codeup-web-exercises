"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// const analyzeColor =(colors)=>{
//     if(colors ==="blue"){
//         return "blue is the color of the sky";
//     }else if(colors==="red"){
//         return "Strawberries are red";
//     }else if(colors ==="cyan"){
//         return "I don't know anything about cyan";
//     }else if(colors==="orange") {
//         return"orange is the only word that can't rhyme";
//     }else if(colors==="yellow") {
//         return"my dog is a yellow lab";
//     }else if(colors==="green") {
//         return"green is my favorite color too";
//     }else if(colors==="indigo") {
//         return"indigo is cool";
//     }else if(colors==="violet") {
//         return"i love violet";
//     }else{
//             return("i dont know that color")
//         }
//     }
//


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
 let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
 let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// let analyzeColor = prompt("what's your favorite color");
// switch(analyzeColor){
//     case "red":
//         alert('Strawberries are red');
//         break;
//     case "orange":
//         alert("orange is the only word that can't rhyme");
//         break;
//     case "yellow":
//         alert("my dog is a yellow lab");
//         break;
//     case "green":
//         alert("green is my favorite color");
//         break;
//     case "blue":
//         alert("blue is the color of the sky");
//         break;
//     case "indago":
//         alert("indigo is cool");
//         break;
//     case "violet":
//         alert("i love violet");
//         break;
// }

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// let luckyNumber = Math.floor(Math.random() * 6);
//
// let discount = luckyNumber;
// switch(discount <6 ){
//     case 0:
//         console.log("Sorry no discount for you.");
//         break;
//     case 1:
//        console.log("yay you get a 10% discount.");
//        break;
//     case 2:
//         console.log("YAY you get a 25% discount.");
//         break;
//     case 3:
//         console.log("YAYYY you get a 35% discount.");
//         break;
//     case 4:
//         console.log("YAAAYYY you get a 45% discount.");
//         break;
//     case 5:
//         console.log("OMG IT'S FREE!");
//         break;
//     default :
//         console.log("none");
// }
// let bill = parseFloat(prompt("What was you bill total"));
//
//
//
// //let moneyOff;
// const calculateTotal =(luckyNumber,bill)=>{
//
//     switch(luckyNumber){
//        case (0):
//             return (bill);
//        case ( 1):
//            return (bill -(bill*.1))
//            // moneyOff=10-parseFloat(price);
//            // break
//        case (2):
//            return (bill -(bill *.25))
//            // moneyOff=25-parseFloat(price);
//            // break;
//        case (3):
//            return (bill -(bill*.35))
//            // moneyOff=35-parseFloat(price);
//            // break;
//        case (4):
//            return (bill -(bill*.5))
//            // moneyOff=50-parseFloat(price);
//            // break;
//        case (5):
//             return ("free")
//            // moneyOff=100-parseFloat(price);
//            // break;
// }}
//
// alert(`this was your bill ${bill} this was your lucky number ${discount}`);
// alert(`this was the price before the discount ${bill} and your price after discount ${calculateTotal(luckyNumber,bill)}`);
//
//
// console.log(parseFloat(calculateTotal));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

// Generate a random number between 0 and 6


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

let okButton= confirm(`would you like to enter a number`);
switch (okButton){
    case(okButton=true):
        let numEnter = prompt("what number: ");
        if(numEnter % 2 === 0){
            alert("Your number is even");
        }else {
            alert("Your number is odd");
        }
        alert("here's your number plus a hundred is  " + (parseFloat(numEnter )+100));
        if(numEnter >0){
            alert('your number is positive');
        }else{
            alert('your number is negative');
        }
        break;
    case(okButton=false):
        alert('That is not a number');
        break;
}
