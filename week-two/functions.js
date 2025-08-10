// Declaration function
// Expression function
// Anonymous function
// Arrow function
// Function without a parameter and return
// Function returning value
// Function with a parameter(s)
// Unlimited number of parameters in arrow function
// Self Invoking Functions
// Scope

//1. Declaration Function
Definition:
//A function defined using the function keyword with a name. It can be called before it’s defined because of hoisting.

Example:

function greet() {
    console.log("Hello World");
}

greet(); // Output: Hello World



//2. Expression Function
Definition:
//A function stored in a variable. It cannot be called before it’s defined.

Example:

const greet = function() {
    console.log("Hello World");
};

greet(); // Output: Hello World



//3. Anonymous Function
Definition:
//A function without a name. Often used as a value for variables, or passed as arguments to other functions.

Example:


setTimeout(function() {
    console.log("This is an anonymous function");
}, 1000);


//4. Arrow Function
Definition:
//A shorter syntax for writing functions, introduced in ES6, using =>.

Example:

const greet = () => {
    console.log("Hello from arrow function");
};

greet(); // Output: Hello from arrow function



//5. Function Without a Parameter and Return
Definition:
//A function that takes no input (parameters) and returns nothing.

Example:

function sayHello() {
    console.log("Hello!");
}

sayHello(); // Output: Hello!


//6. Function Returning Value
Definition:
//A function that returns a value using the return keyword.

Example:

function add() {
    return 2 + 3;
}

let result = add();
console.log(result); // Output: 5


//7. Function with a Parameter(s)
Definition:
//A function that accepts values (parameters) when it’s called.

Example:

function greet(name) {
    console.log("Hello " + name);
}

greet("Jennifer"); // Output: Hello Jennifer

//8. Unlimited Number of Parameters in Arrow Function
Definition:
//You can use the rest parameter (...) to accept any number of arguments.

Example:

const sumAll = (...numbers) => {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
};

console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

//9. Self-Invoking Functions (IIFE)
Definition:
//A function that runs immediately after it’s defined. Wrapped in () and followed by ().

Example:

(function() {
    console.log("This function runs automatically");
})();

//10. Scope
Definition:
//Scope defines where variables can be accessed in your code.

//Global Scope: Variables accessible anywhere.

//Local/Function Scope: Variables accessible only inside a function.

//Block Scope: Variables declared with let or const inside {} are accessible only inside that block.

Example:

let globalVar = "I am global"; // Global scope

function myFunction() {
    let localVar = "I am local"; // Function scope
    console.log(globalVar); // Works
    console.log(localVar);  // Works
}

myFunction();

console.log(globalVar); // Works
// console.log(localVar); // ❌ Error: localVar is not defined