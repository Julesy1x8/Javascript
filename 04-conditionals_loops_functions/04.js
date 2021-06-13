/**
 * You have already made some functions for temperatures. Now you will make some
 * more functions!
 *
 * 1. Research the formula for conversions to and from Kelvin. Write a KtoC,
 *    CtoK, FtoK and a KtoF function. Be sure to return the value so that the
 *    code below functions without error.
 *
 * 2. Research and write a function that uses the pythagorean formula to get the
 *    length of the hypotenuse of a right angled triangle. It should take in two
 *    arguments, the two shorter sides of a triangle, and return the longest
 *    side. Call the function "pythagoras". After writing your function the code
 *    below should work without error.
 *
 * 3. Research and write a functions to convert
 *      - inches to centimeters (inchToCm)
 *      - centimeters to inches (CmToInch)
 *      - miles to kilometers (MToKm)
 *      - kilometers to miles (KmToM)
 *
 */

// Write your code here:
function KtoC(k) {
    return k - 273.15;
}
function CtoK(c) {
    return c + 274.15;
}
function FtoK(f) {
    return f + 255.927778;
}
function KtoF(k) {
    return (k - 273.15) * 9 / 5 + 32;
}
function MToKm(M) {
    return M / 1000;
}
function KmToM(Km) {
    return Km * 1000;
}
function inchToCm(inch) {
    return inch * 2.54;
}
function CmToInch(Cm) {
    return Cm * 0.39370078740157;
}
function pythagoras(a,b) {
    let value = (a * a) + (b * b);
    let answer = Math.sqrt(value);
    return answer;
}


// Do not modify anything below this line
console.log("272 K is " + KtoC(272) + " C");
console.log("0 C is " + CtoK(0) + " K");
console.log("30 C is " + FtoK(30) + " K");
console.log("100 K is " + KtoF(100) + " F");

console.log(pythagoras(10, 20));
console.log(pythagoras(30, 100));
console.log(pythagoras(20, 50));

console.log("100 meters is "+MToKm(100)+" kilometers");
console.log("25 kilimeters is "+KmToM(25)+" meters");

console.log("10 inches is "+inchToCm(10)+" centimeters");
console.log("425 centimeters is "+CmToInch(425)+" inches");