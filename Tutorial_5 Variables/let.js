// let cannot be redeclared.
let name = "Sabbir";
name = "Sabbir Hossain";
/*
    let x = "John Doe";
    let x = 0; // SyntaxError: 'x' has already been declared
*/
// let have Block Scope (global Scope, Function Scope)
let x = 10;
console.log(x); // Here x is 10
{
let x = 2;
console.log(x); // Here x is 2
}
console.log(x); // Here x is 10


// Hoisting
carName = "Volvo";
let carName;

