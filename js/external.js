"use strict";

console.log("hello from external javascript");
 alert ("Welcome to my Website!");
let promptmessage = prompt(`What is your favorite color`);
if(promptmessage === "blue"){
     alert("Great, blue is my favorite color too!");
}else{
    alert("nice I like that color to");
 }
let tlm = prompt("How many days did you rent the little mermaid?");
let bb = prompt("How many days did you rent brother bear?");
let h = prompt("how many days did you rent brother bear");
let charge = prompt("how much are movies a day");
let total = parseFloat(charge)* (parseInt(tlm)+parseInt(bb)+parseInt(h));
alert(total);

let google= prompt("How many hours did you work at Google?");
let amazon= prompt("How many hours did you work at Amazon?");
let facebook= prompt("How many hours did you work at Facebook?");
let ghr = prompt("How much does Google pay you per hour?");
let ahr = prompt("How much does Amazon pay? you per hour");
let fhr = prompt("How much does Facebook pay you per hour?");
alert((parseFloat(google)*parseFloat(ghr))+(parseFloat(amazon)*parseFloat(ahr))+(parseFloat(facebook)*parseFloat(fhr)));

let max =  prompt("What is the max Students in the class");
let currentStu = prompt("How many students are currently enrolled in the class?");
let schedule = prompt("does you schedule conflict with the class time");
let yesSche =(schedule !=="yes");
let enroll = ((max !== currentStu) && yesSche);
if (!(enroll)){
    alert ("sorry you cant enroll");
}else{
    alert("yay you can enroll");
}


let item = prompt("how many items did you buy?");
let mem = prompt("are you a member?");
let date = prompt("is the offer still active?");
let yesItems = (item > 2);
let mem1 = (mem ==="yes");
let date1 =(date === "yes");

if((mem1||yesItems)&&date1){
    alert("yay you get the offer");
} else {
    alert("no offer for you");
