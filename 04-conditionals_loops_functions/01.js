

/**
 * The function above is a random number generator. It generates a number
 * between 1 and 10. Don't worry about how it works, its just a tool to practice
 * with right now. Do not modify the function, only modify anything below this
 * comment block.
 *
 * The variable defined below uses the random number generator to generate a
 * random number between 1 and 20.
 *
 * With the HTML file from this folder (test.html) loaded in Chrome and the
 * console open, refresh the browser (F5) various times and look at the console.
 * Notice how the number is different each time!
 *
 * Once you have seen how it works, you can delete the code below.
 *
 * Then do the following
 *
 *      1. Create 3 variables, one with a random number between 1 and 100
 *         called "age", one initialized to 0 called "price" and one
 *         with an empty string ("") called "fare".
 *      2. Write some conditional statements to simulate bus ticket
 *         cost. Something like: Under 5s go free, under 13s pay
 *         child fare, under 21s pay teenager fare, under 30s pay young
 *         person fare, under 65s pay adult fare, and over 65s pay
 *         pensioner fare.
 *      3. Within each condition, assign the price to be paid and the name
 *         of the fare to the appropriate variables.
 *      4. Log a message to the console with a message like: "You pay the
 *         young person fare, that will be 5 dollars, please."
 *
 * Once you have this working, see if you can implement a way to give each
 * passenger a 1 in 10 chance of going free, regardless of age, and modify the
 * message with something like "Lucky you! Today you get to ride free of
 * charge." For bonus points, if the person would ride free anyway, make sure it
 * doesn't log the "Lucky you!" message!
 *
 */
// variable set up
let age = Math.floor((Math.random() * 100) + 1);
let fair = "";
let price = 0;

// conditional that decides how much the bus ticket costs
if (age < 5) {
    fair = "you get to go for free";
} else if (age < 13) {
    fair = "you pay the child fair";
    price = 2;
} else if (age < 21) {
    fair = "you pay the teenager fair";
    price = 4;
} else if (age < 30) {
    fair = "you pay the young person fair";
    price = 5;
} else if (age < 65) {
    fair = "you pay the adult fair";
    price = 7;
} else {
    fair = "you pay the pensioner fair";
    price = 10;
}
// this gives you a 1 in 10 chance of getting to go for free
let goForFree = Math.floor((Math.random() * 10) + 1);
if (goForFree == 10) {
    fair = "this is your lucky day you get to go for free";
    price = 0;
}
// tells you your fair and price
alert(fair + " " + price + " dollars please");


