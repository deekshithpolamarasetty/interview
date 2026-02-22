// Temporal Dead Zone

console.log(a); // cannot access a before initialization
console.log(c); // undefined
console.log(x) // Not defined error

let a = 10;
const b = 20;
var c = 30;

// let a = 20; // Cannot redeclare block-scoped variable 'a' because its a syntax error
// It wont even read a single line of code if js sees a syntax error wont execute the first line itself
// Its only possible in var not in let and const (gets syntax error for re declaration)
// If we re assign a value to const type data we get - type error (const variable)
// If we initialize a const variable and don't assign a value we get , also for duplicate re declarations - syntax error
// JS finds a variable that if it access in a global scope it gives a (Temporal dead zone)- reference error

// Best way to use variables 1) const 2) let 3) var (rare)

// ---------------------------------------------------------------------------------------------------------------------------------- 

