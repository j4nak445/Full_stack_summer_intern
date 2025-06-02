console.log("Hello from JavaScript!");

let name = "Alice";
let age = 25;
let isStudent = true;
let hobbies = ["read", "code"];
let person = { name, age };

var x = 5;
let y = 10;
const z = 15;

console.log(a);
var a = 10;

console.log("5" == 5);
console.log("5" === 5);

function outer() {
  let count = 0;
  return function () {
    count++;
    console.log("Count:", count);
  };
}
let counter = outer();
counter();
counter();

const user = {
  name: "Bob",
  greet() {
    console.log("Hi, I'm " + this.name);
  }
};
user.greet();

let promise = new Promise((resolve) => {
  setTimeout(() => resolve("Promise done!"), 1000);
});
promise.then(msg => console.log(msg));
