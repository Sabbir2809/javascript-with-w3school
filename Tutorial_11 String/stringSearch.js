// JavaScript String Search Methods


// String indexOf() : return -1 if the text is not found
let str1 = "I love to explore new technologies."
console.log(str1.indexOf("explore"));
console.log(str1.indexOf("Tech", 22));

// String lastIndexOf() : return -1 if the text is not found
let str2 = "Please locate where 'locate' occurs!";
console.log(str2.lastIndexOf("locate"));
console.log(str2.lastIndexOf("Sabbir"));

// String search()
let str3 = "Please locate where 'locate' occurs!";
console.log(str3.search("locate"));

// String includes()
let text1 = "Hello world, welcome to the universe.";
console.log(text1.includes("World"));

// String startsWith()
let text2 = "Hello world, welcome to the universe."
console.log(text2.startsWith("Hello"));

// String endsWith()
let text3 = "Md. Sabbir Hossain";
console.log(text3.endsWith("Hossain"));
