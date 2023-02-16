"use strict";
//traditional method
// function helloWorld(){
//     alert('Hello World');
//  }

//the arrow function
const helloWorld=(name)=>{
 //   alert(`Hello ${name}!`);
    let message=`Hello ${name}!`
    return message;

}

// helloWorld("Sarah");
// helloWorld("brightman");
let first= helloWorld("Sarah");
console.log(firsthello);
let secondhello= helloWorld("brightman");
console.log(secondhello);


const isEven = (num) => num % 2 === 0;

let student = 24;
let evenStudent = isEven(student);

//IIFE (immediately invoked function expression) arrow function
(()=>{

})();
//traditional IIFE
(function (){

})();