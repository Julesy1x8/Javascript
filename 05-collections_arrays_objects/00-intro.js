function test(f){
    return (f - 32) / 1.8;
}
let temperatures = [
    123,32,42,94,34,0,-10,30,63,84,56,94,87,43,26,75,90,-43,-23,153,41,74,54,24,85,80,56,35,23,45,87,-90,87,56,23,56,71,37,56,34
];

for (let index = 0; index < temperatures.length; index++) {
    let f = temperatures[index];
    let c = test(f);
    c = c.toFixed(2);
    console.log(f + "F is " + c + "C")
}
console.log("test");
