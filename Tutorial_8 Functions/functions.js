// Void Function
function myFunction(p1, p2) {
  return p1 * p2;
}

// Return Function
function myFunction(a, b) {
  return a + b; // Return
}
let ans = myFunction(4, 3); // Function Called
console.log(ans);

// Why Functions?
function toCelcius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
let x = toCelcius(77);
let text = "This Temperature is " + x + " Celsius";
// let text = "The temperature is " + toCelsius(77) + " Celsius";


// Local Variables
function CarFunction(){
  let carName = "Volvo";
  console.log(carName);
}
// console.log(carName);  

