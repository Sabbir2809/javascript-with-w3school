// JavaScript String Methods (All string methods return a new string. They don't modify the original string.)
let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text1.length); // String Length (JS Counts positions from zero.)

// There are 3 methods for extracting a part of a string:
// String slice()
let str = "Sohan, Sabbir, Maruf";
console.log(str.slice(7, 13));
console.log(str.slice(-21, -15));
console.log(str.slice(7));

// String substring()
let webDev = "HTML, CSS, Javascript";
console.log(webDev.substring(6, 21)); // cannot accept negative indexes.

// String substr()
let mern = "MongoDB, ExpressJS, React, Node";
console.log(mern.substr(7));

// Replacing String Content (does not change the string, returns a new string, replaces only the first match)
let text = "Please visit MICROSOFT and Microsoft!";
let newText = text.replace("Microsoft", "Linux");
console.log(text);
console.log(newText);

// Converting to Upper and Lower Case
let me = "I'm a Web Developer.";
console.log(me.toUpperCase()); // toUpperCase()
console.log(me.toLowerCase()); // toLowerCase()

// String Concat()
let str1 = "Tech";
let str2 = "Enthusiast";
console.log(str1.concat(" ", str2));
console.log(str1 + " " + str2);

// String trim()
let versity = "    DIU    ";
console.log(versity.trim());

// String charAt()
let character = str1.charAt(0);
console.log(character);

// String split()
let fontEnd = "HTML, CSS, JS, React";
console.log(fontEnd.split(""));
