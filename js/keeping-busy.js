/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number
 * (as a string) and street name separated by a space characters, and returns an object with
 * properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 **/
// const convertAddressToObject =(str)=>{
//     let index = str.indexOf(' ');
//     let addressToObj = str.substring(0,index);
//     const streetName = str.substring(index +1);
// }
/**
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 * Notes
 * All test arrays will have at least one element and are valid.
 */

let array1=[1, 2, 3, 4, 5];
let array2=[2334454, 5];
let array3=[1];

function minMax(array){
    return [Math.min(...array), Math.max(...array)];
}

/**
 * Drink Sorting
 * You will be given an array of drinks, with each drink being an object with two properties: name and price.
 * Create a function named sortDrinkByPrice that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
 *
 * Assume that the following array of drink objects needs to be sorted:
 * drinks = [
 *     {name: "lemonade", price: 50},
 *     {name: "lime", price: 10}
 * ]
 *
 * Examples
 * >> sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
 */
let drinks=[
    {
        name:'',
        price:'',
    },
    {
        name: "lemonade", price: 50,
    },
    {
        name: "lime", price: 10
    }
]
const sortDrinksByPrice=(drinks)=>{
    return
}