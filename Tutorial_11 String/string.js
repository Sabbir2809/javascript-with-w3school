// JavaScript Strings
let name = "Sabbir Hossain"; // Double quotes
let varsity = "DIU"; // Single quotes

// String Length
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(alphabet.length);

// Escape Character (\', \", \\, \b, \f, \n, \r, \t, \v)
let text1 = 'We are\n the\f so-called\n "Vikings" from the north';
let text2 = "It's alright. Hello \
Dolly!";
let text3 = "The character \\ is called ackslash.";
console.log(text1);

// JavaScript Strings as Objects
let x = "Sabbir";
let y = new String("Sabbir"); // new Keyword Complicates the code and slows down execution speed.
console.log(typeof x);
console.log(typeof y);

let ansX = (x == y);
let ansY = (x === y);
console.log(ansX);
console.log(ansY);


