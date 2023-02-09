let a =1;
//prediction 1
console.log(a);
//answer 1
let b = a++;
//prediction 1
console.log(b);
//answer 1
let c =++a;
//prediction 3
console.log(c);
//answer 3

let d="hello";
//hello
console.log(d);
//answer hello as a string
let e=false;
//false
console.log(e);
//answer false as a number
d++;
//NaN
console.log(d);
//answer NaN
e++
//1
console.log(e);
//answer 1
let perplexed;
perplexed + 2;
//undefined
console.log(perplexed);
//answer undefined

let price = 2.7;
price.toFixed(2);
//prediction 2.70
console.log(price);
//answer 2.7

let price1 = "2.7";
price.toFixed(2);
//prediction NaN
console.log(price1);
//answer 2.7 as a string

// isNaN(0)
// //prediction false
// console.log(isNaN(0));
// //answer false

// isNaN(1);
// //prediction false
// console.log(isNaN(1));
// // //answer false


// isNaN("");
// //prediction true
// console.log(isNaN(""));
// //answer false

//  isNaN("string");
// //prediction true
// console.log(isNaN("string"));
// //answer true

// isNaN("0");
// //prediction false
// console.log(isNaN("0"));
// // answer false

// isNaN("1");
// // prediction false
// console.log(isNaN("1"));
// //answer false


// isNaN("3.145");
// //prediction false
// console.log(isNaN(3.145));
// //answer false

// isNaN(Number.MAX_VALUE);
// //prediction false
// console.log(isNaN(Number.MAX_VALUE));
// //answer false

//  isNaN(Infinity);
// //prediction false
// console.log(isNaN(Infinity));
// //answer false

// isNaN("true");
// //prediction true
// console.log(isNaN("true"));
// //answer true

// isNaN(true);
// //prediction false
// console.log(isNaN(true));
// //answer false

// isNaN("false");
// //prediction true
// console.log(isNaN("false"));
// //answer true

// isNaN(false)
// //prediction false
// console.log(isNaN(false));
// //answer false

// // to illustrate why the isNaN() function is needed:
// NaN == NaN;
// //prediction true
// console.log(NaN===NaN);
// //answer false

// !true;
// //prediction false
// console.log(!true);
// //answer false


// !false;
// // prediction true
// console.log(!false);
// //answer true


//  !!true
// //prediction true
// console.log(!!true);
//  //answer true

//  !!false
// //prediction false
// console.log(!!false);
//  //answer false

// !!0;
// //prediction false
// console.log(!!0);
// //answer false


//  !!-0;
// //prediction true
// console.log(!!-0);
// //answer false

//  !!1
// //prediction true
// console.log(!!1);
//  //answer true

//  !!-1
// //prediction true
// console.log(!!-1);
//  // answer true

//  !!0.1
// //prediction true
// console.log(!!0.1);
//  //answer true

// !!"hello"
// //prediction true
// console.log(!!"hello");
// //answer true

//  !!""
// //prediction true
// console.log(!!"");
//  //answer false

//  !!''
// //prediction false
// console.log(!!'');
//  // answer false

//  !!"false"
// //prediction false
// console.log(!!"false");
//  //answer true

//  !!"0"
// //prediction false
// console.log(!!"0");
//  //answer true

let sample="Hello Codeup";
//sample= sample.length;
//sample=sample.toUpperCase();
str= "Students";
str= str.replace("Students","Class");
console.log(`${sample} ${str}`);

message= sample + str;

console.log(`${message.indexOf("c")}`);
console.log(`${message.indexOf("C")}`);
let begining =sample.indexOf(" ");
let end =sample.indexOf("p");
let message1=sample.substring(begining , end+1);
console.log( message1 );

let tlm=3;
let bb=5;
let h=1;
let movies= 3*(tlm+bb+h);
console.log(movies);

let google =400*6;
let amazon =380*4;
let facebook =350*10;
let work =google+amazon+facebook;
console.log(`$ ${work}`);


let openclass = true;
let schedule = true;
let student;
if(!(openclass && schedule)) {
    student = false;
    console.log("student is not allowed to enroll")
} else {
     student = true
     console.log("student is allowed in")}


let items = true;
let member = true;
let date = true;
let discount = items && date || member ;
if(discount){
    console.log("Yay you got a discount");
}else {
    console.log("no discount for you")
}

let username='codeup';
let password='notastrongpassword';
let minchar = password.length >= 5;
console.log(minchar)
let nousername = password.indexOf(username) >=0;
console.log(nousername)
let maxchar = password.length <=20;
console.log(maxchar);
let whitespace = password.indexOf(" ") >=0 && username.indexOf(" ") >= 0;
console.log(whitespace);
