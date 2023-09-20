var a = 10;
a = 20;
// console.log(a);
var a = 50;
// console.log(a);

// variable declared using var can be assigned and then re-assigned.
// They can also be redeclared using the same identifier.

// console.log(b);
var b;
// Variable can be declared as empty and undefined will be assigned to it

// console.log(c);
var c = "HI";
// variable declare with var can be accessed before initialization as in the memory allocation stage "undefined" is assigned to it.

// Both the for loops will work. var is not block scoped. Its global scope.
for (var x = 0; x < 4; x++) {
  console.log(x + 1);
}

for (var p = 0; p < 4; p++) {}
console.log(p + 1);
