let b;
// console.log(b);
// variable can be initialized as nothing using let and "undefined" will be assigned to it.

let a = 22;
a = 99;
a = 88;
// console.log(a);
//  variables declared using let can be assigned and reassigned.

// let c = 25;
// let c = 55;
// console.log(c);
// An identifier can be used only once to declare a variable

// console.log(d);
let d = 10;
// Error: variable cannot be accessed before initialization using let

// The below two examples highlight the block scope nature of let.
// First for loop is correct, second will throw a reference error.
// for (let i = 0; i < 3; i++) {
//   console.log(i + 2);
// }

for (let i = 0; i < 3; i++) {}
console.log(i + 2);
