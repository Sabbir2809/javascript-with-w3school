// const
// Const connot be (Redeclared, Reassigned)
const PI = 3.141592653589793;
// PI = 3.1416; // This will give an error

// JavaScript const variables must be assigned a value when they are declared
const id = 2809;

// Block Scope
const x = 10;
console.log(x); // Here x is 10
{
const x = 2;
console.log(x);// Here x is 2
}
console.log(x);// Here x is 10

// Hoisting



