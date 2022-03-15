// 3 Ways to Declare a JavaScript Variable: var, let, const

// Using var
var x = 5;
var y = 6
var z = x + y;
// var can be redeclared
var name = "John Doe";
var name = 0;

// Block Scope
var x = 10;
console.log(x); // Here x is 10
{
var x = 2;
console.log(x); // Here x is 2
}
console.log(x); // Here x is 2

// Hoisting
carName = "Volvo";
var carName;


// Using let
let a = 50;
let b = 25;
let c = a - b;

// Using const
const price1 = 100;
const price2 = 150;
let total = price1 + price2;

// JavaScript Identifiers
// 1. Names can contain letters, digits, underscores, and dollar signs.
// 2. Names must begin with a letter
// 3. Names can also begin with $ and _ (but we will not use it in this tutorial)
// 4. Names are case sensitive (y and Y are different variables)
// 5. Reserved words (like JavaScript keywords) cannot be used as names
