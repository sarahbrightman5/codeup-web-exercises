const showMultiplicationTable=(num)=>{
    for(let i=1;i<=10;i++){
        console.log(`${i} x ${num} = ${i *num}`);
    }
}
showMultiplicationTable(7);

//let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
// function randomNumber(min, max) {
//     return Math.random() * (max - min) + min;
// }
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
for(let i=0;i<=10;i++){
    let input = randomNumber(20,200);
    if(input%2!==0){
        console.log(`${input} is odd`);
    } else{
    console.log(`${input} is even`);
    }
}
// const numPyramid=(rows)=>{
// for(let i=0;i<10; i++){
//
//     console.log()
// }


// const buildPyramid = (rows) => {
//     //loop through rows
//     for (let i = 1; i <= rows; i++){
//         let row = "";
//         //Loop to add spaces
//         for (let j = 1; j <= rows -i; j++){
//             row += "  ";
//         }
//         // Loop to add the asterisks
//         for (let k = 1; k <= 2 * i - 1; k++){
//             row += "* ";
//         }
//         console.log(row);
//     }
// }
// buildPyramid(5);

for(let i= 1;i<=9;i++){
    let rows =`${i}`.repeat(i);
    console.log(rows);
}

for(let i=100;i>0;i-=5){
    console.log(i);
}
