function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}

/**
 * 1. Create while loop equivalents of the loops in the previous exercises!
 *
 * 2. Using the random number generator above, write a while loop that generates
 *    random numbers until it has generated one that is divisible by 11. Do you
 *    remember what operator to use?
 */
/*
let number = 5;
while (number < 1000) {
    number+= 5;
    console.log(number);
}

let number = 101;
while(number > -100) {
    number--;
    console.log(number);
}
*/
let number = 0;
let repeat = 0;
while (repeat < 2500) {
    number += 3;
    console.log(number);
    number -= 1;
    console.log(number);
    repeat++;
}