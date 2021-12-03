/**
 * 1. Create an array of strings with the names of some items in the room you
 *    are sitting in right now. For example "chair", "keyboard" etc
 * 2. Now think of 3 drawers or shelves or boxes that you have nearby. Make an
 *    array with a sub-array for each drawer or box, and add 5 things in each
 *    sub-array. Do this for 3 boxes. You should have a two dimensional array.
 * 3. Pick 5 things from the two dimensional array just created, and log them to
 *    the console using array referencing.
 * 4. Use a for loop to create a array of the numbers from 1 to 100.
 * 5. Use another for loop to go through the array of numbers just created and
 *    log the sum of all the numbers.
 * 6. Use the random number generator from previous labs and another for loop to
 *    create a array of 100 random numbers.
 * 7. Use another for loop to go over each of these random numbers and put them
 *    in one of two arrays. One for odd numbers, and one for even numbers.
 * 8. Make the for loop that logs the sum of all the numbers in an array into a
 *    function that takes an array as an argument and returns the sum. Use this
 *    function to log the sum of the two arrays of odd and even numbers.
 */

// let furniture = [
//     "bed",
//     "exercise bike",
//     "chair"
// ]
// let drawersOrBoxes = [
//     [
//         "clothes",
//         "secret candy stash"
//     ],
//     [
//         "pencil",
//         "art"
//     ],
//     [
//         "books"
//     ]
// ]
// for (let i = 0; i < drawersOrBoxes.length; i++) {
//     for (let x = 0;x < drawersOrBoxes[i].length; x++) {
//         console.log(drawersOrBoxes[i][x]);
//     }
// }
let numbers = [];
for (let i = 1; i < 101; i++) {
    numbers.push(i)
}
// let sum = numbers[1];
// for (let i = 1; i < numbers.length; i++) {
//     sum += numbers[i];
// } console.log(sum);

let numbers2 = [];
for (let i = 1; i < 101; i++) {
    numbers2.push(Math.floor((Math.random() * 100) + 1));
} console.log(numbers2);


let oddNumbers = [];
let evenNumbers = [];
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] % 2 == 0) {
        evenNumbers.push(numbers2[i]);
    } else {
        oddNumbers.push(numbers2[i]);
    }
}
let sum = numbers[1];
function functionSum() {
    for (let i = 1; i < numbers.length; i++) {
        return sum += numbers[i];
    }
} console.log(functionSum);

sum = numbers[1];
for (let i = 1; i < numbers.length; i++) {
    sum += numbers[i];
} console.log(sum);

function sumLog(numbers) {
    for (let i = 1; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
} console.log(sumLog(numbers));
