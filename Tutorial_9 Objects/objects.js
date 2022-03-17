// JavaScript Objects (objects, properties, methods)
const car = {
  // name:value
  type: "Fiat",
  model: 550,
  color: "white",
};
console.log(car.type);

const person = {
  firstName: "Sabbir",
  lastName: "Hossain",
  age: 24,
  eyeColor: "blue",
  // Object Methods
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person["age"]);
// Accessing Object Methods
let name = person.fullName(); 
console.log(name);


// Do Not Declare Strings, Numbers, and Booleans as Objects!(They complicate your code and slow down execution speed.)
x = new String();
y = new Number();
z = new Boolean();
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);