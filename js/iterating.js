(function(){
    "use strict";

    // /**
    //  * TODO:
    //  * Create an array of 4 people's names and store it in a variable called
    //  * 'names'.
    //  */
    //
    // /**
    //  * TODO:
    //  * Create a log statement that will log the number of elements in the names
    //  * array.
    //  */
//     const names = ['Sunny','Stien','Moss','FeLix'];
//     names.forEach((name,placement)=>{
//        console.log("here is a name: "+name);
//        console.log('here is the names index '+placement);
//     for(let i=0;i<names.length;i++){
//         const name = names[placement]
//         console.log(`here's the names in a loop: ${name}`);
//     }
// })


    // /**
    //  * TODO:
    //  * Create log statements that will print each of the names individually by
    //  * accessing each element's index.
    //  */

    // /**
    //  * TODO:
    //  * Write some code that uses a for loop to log every item in the names
    //  * array.
    //  */

    // /**
    //  * TODO:
    //  * Refactor your above code to use a `forEach` loop
    //  */

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
   const first=()=>{
    let numbers = [1,2,3,4,5];
    //numbers.forEach((element,index)=>{
        let first1 =numbers[1,0] ;
        console.log(`here is the first function: `+first1);
        let second = numbers[2,1];
        console.log(`here is the second function: `+second);
        let last = numbers[5,4];
        console.log(`here is the last function: `+last);
    }
    first();
})();

