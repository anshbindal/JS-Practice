// function abc() {
//   let a = 4;
//   x();
//   function x() {
//     console.log(a);
//   }
// }
// abc();

// In the above example a is being accessed from its lexical environment.
// Console.log will print 4
// Function along with it's lexical scope makes a closure

// Closure example:
function x() {
  var p = 20;
  return function a() {
    console.log(p);
  };
}
var ans = x();
console.log(ans);
ans();
