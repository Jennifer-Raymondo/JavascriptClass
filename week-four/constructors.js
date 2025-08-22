
//GROUP G


// Functional programming principles- Higher-order
//  functions- Closures and scope- Constructor
//  functions vs factory functions  same to this too 



//1. Functional Programming Principles

//Functional programming (FP) is a style of writing code where functions are treated as the main building blocks.
//It focuses on writing clean, reusable, predictable functions.

// Main principles:

//Pure Functions – Always return the same output for the same input, without changing external data.

// Pure function
function add(a, b) {
  return a + b; // always predictable
}


//Immutability – Don’t change (mutate) existing data, instead create new data.

let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4]; // create new array, don’t modify old


//First-Class Functions – Functions can be stored in variables, passed as arguments, or returned.

const greet = () => "Hello!";
const say = greet; // store function in variable
console.log(say()); // Hello!


//Declarative code – Focus on what to do, not how.

// Imperative (step-by-step)
let doubled = [];
for (let i of [1,2,3]) doubled.push(i*2);

// Declarative (functional way)
let doubled2 = [1,2,3].map(x => x*2);

//2. Higher-Order Functions (HOFs)

//A function is higher-order if:

//It takes another function as a parameter, OR

//It returns another function.

// Example 1: Passing a function as argument

function greet(name) {
  return "Hello " + name;
}

function processUserInput(callback) {
  let name = "Jennifer";
  return callback(name); // passing function
}

console.log(processUserInput(greet)); // Hello Jennifer


// Example 2: Returning a function

function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}

let double = multiplier(2);
console.log(double(5)); // 10


// Examples of HOFs in JS: .map(), .filter(), .reduce().

//3. Closures and Scope
// Scope

//Scope is where variables are accessible.

//Global scope → available everywhere.

//Function scope → available only inside a function.

//Block scope (let, const) → available only in { }.

let x = 10; // global

function test() {
  let y = 20; // function scope
  console.log(x); // can access global
}

// Closures

//A closure happens when an inner function remembers variables from its outer function, even after the outer function has finished running.

function outer() {
  let count = 0;  // outer variable

  return function inner() {
    count++;  // inner function uses outer variable
    return count;
  };
}

let counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


// Closure is useful for data privacy and creating functions that "remember" values.

//4. Constructor Functions vs Factory Functions
// Constructor Function

//A special function used with new keyword to create objects.

//Uses this to assign properties.

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function() {
    return "Hi, I'm " + this.name;
  };
}

let user1 = new Person("Jennifer", 20);
console.log(user1.sayHi()); // Hi, I'm Jennifer

//// Factory Function

//A normal function that returns a new object (no new keyword).

//More flexible, no need for this.

function createPerson(name, age) {
  return {
    name,
    age,
    sayHi() {
      return "Hi, I'm " + name;
    }
  };
}

let user2 = createPerson("Jennifer", 20);
console.log(user2.sayHi()); // Hi, I'm Jennifer

// Difference (Constructor vs Factory)
//Feature	Constructor Function	Factory Function
//Uses new keyword	✅ Yes	❌ No
//Uses this	✅ Yes	❌ No
//Easy inheritance	✅ Built-in with prototype	❌ Manual
//Simplicity	❌ More boilerplate	✅ Simpler
// Summary (Quick Notes)

//Functional Programming → Pure functions, immutability, first-class functions.

//Higher-Order Functions → Functions that take/return other functions.

//Closures → Inner functions remember outer variables.

//Constructor Functions → Create objects with new & this.

//Factory Functions → Return new objects without new.