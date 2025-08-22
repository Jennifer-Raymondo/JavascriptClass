//GROUP D


/* Arrow functions and this binding- 
 Template literals- Default parameters- ES6 
 classes compared to ES5 constructor functions  
  please explain more about all these with good
   notes and examples with code each part */





//1. Arrow Functions and this Binding
// Normal Functions

//Regular functions create their own this depending on how they are called.

//If you call them as object methods → this = that object.

//If you call them standalone → this = undefined (in strict mode) or window (in browsers).

function normalFunction() {
  console.log(this);
}

normalFunction(); // In browser: Window (or undefined in strict mode)

// Arrow Functions

//Arrow functions do not create their own this.

//They inherit this from their surrounding (parent) scope.

const arrowFunction = () => {
  console.log(this);
};

arrowFunction(); // 'this' comes from outer scope

// Example in Objects
const person = {
  name: "John",
  normal: function () {
    console.log("Normal:", this.name); // 'this' = person
  },
  arrow: () => {
    console.log("Arrow:", this.name); // 'this' = outer scope (not person!)
  }
};

person.normal(); // Normal: John
person.arrow();  // Arrow: undefined


// Use arrow functions when you don’t want this to change (e.g., in callbacks).



// 2. Template Literals

//Template literals make working with strings easier. They use backticks (`).

// String Concatenation (Old Way)
//let name = "Mary";
//let age = 22;
console.log("My name is " + name + " and I am " + age + " years old.");

// Template Literals (New Way)
let name = "Mary";
let age = 22;
console.log(`My name is ${name} and I am ${age} years old.`);

// Multi-line Strings
let message = `Hello,
This is a multi-line
string without using \n!`;
console.log(message);

// Cleaner and easier for string formatting.



// 3. Default Parameters

//Default parameters let functions have automatic fallback values when no argument is provided.

// Example
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet();        // Hello, Guest
greet("Sarah"); // Hello, Sarah

// Multiple Defaults
function calculatePrice(price, tax = 0.05, discount = 0) {
  return price + (price * tax) - discount;
}

console.log(calculatePrice(100));           // 105
console.log(calculatePrice(100, 0.1));      // 110
console.log(calculatePrice(100, 0.1, 20));  // 90

//Helps avoid undefined values and makes functions safer.



// 4. ES6 Classes vs ES5 Constructor Functions

//JavaScript originally used constructor functions + prototypes to create objects.
//ES6 introduced class syntax to make it easier.

// ES5 Constructor Function
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Add method via prototype
// Person.prototype.sayHello = function() {
//   console.log("Hi, I'm " + this.name);
// };

// let john = new Person("John", 30);
// john.sayHello(); // Hi, I'm John





// ES6 Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hi, I'm ${this.name}`);
  }
}


const person1 = new Person 

const createPerson = function(name, age){
return  {
  name, 
  age,
  sayHello() {
    console.log(`Hi, I'm ${this.name}`);
  }

}
}






//  {
//   name, 
//   age,
//   sayHello() {
//     console.log(`Hi, I'm ${this.name}`);
//   }

// }



// let jane = new Person("Jane", 28);
// jane.sayHello(); // Hi, I'm Jane

// Inheritance Example
ES5
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(this.name + " makes a noise.");
};

function Dog(name) {
  Animal.call(this, name); // call parent constructor
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  console.log(this.name + " barks.");
};

let d = new Dog("Rex");
d.speak(); // Rex barks





ES6
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog("Rex");
d.speak(); // Rex barks


// Classes are much shorter and cleaner.

//Arrow Functions → Short syntax, inherit this from parent scope.

//Template Literals → Use backticks, embed variables with ${}, support multi-line.

//Default Parameters → Give functions fallback argument values.

//ES6 Classes vs ES5 Functions → Classes are modern syntax, easier inheritance, but both use prototypes under the hood.






//researched work
1. Object Creation
ES5 Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("Alice", 25);
console.log(p1.name); // Alice

ES6 Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const p2 = new Person("Bob", 30);
console.log(p2.name); // Bob


✅ Both create objects, but class syntax is cleaner.



// 2. Adding Methods
ES5 (Prototype-based)
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};

const p1 = new Person("Alice");
p1.greet(); // Hello, my name is Alice

ES6 (Class Method)
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {   // No need for prototype
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p2 = new Person("Bob");
p2.greet(); // Hello, my name is Bob


✅ In ES5 you must use prototype, in ES6 you just define methods inside the class.




// 3. Inheritance
ES5 Inheritance
function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  console.log(this.type + " makes a sound");
};

function Dog(name) {
  Animal.call(this, "Dog"); // call parent constructor
  this.name = name;
}

// Link prototypes for inheritance
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
  console.log(this.name + " barks!");
};

const dog1 = new Dog("Max");
dog1.speak(); // Dog makes a sound
dog1.bark();  // Max barks!



ES6 Inheritance
class Animal {
  constructor(type) {
    this.type = type;
  }

  speak() {
    console.log(this.type + " makes a sound");
  }
}

class Dog extends Animal {
  constructor(name) {
    super("Dog"); // call parent class constructor
    this.name = name;
  }

  bark() {
    console.log(this.name + " barks!");
  }
}

const dog2 = new Dog("Charlie");
dog2.speak(); // Dog makes a sound
dog2.bark();  // Charlie barks!


✅ ES6 makes inheritance much simpler with extends and super.



// 4. Static Methods

Static methods belong to the class itself, not the instances.

ES5
function Person(name) {
  this.name = name;
}

Person.create = function () {
  return new Person("Default");
};

const p1 = Person.create();
console.log(p1.name); // Default

ES6
class Person {
  constructor(name) {
    this.name = name;
  }

  static create() {
    return new Person("Default");
  }
}

const p2 = Person.create();
console.log(p2.name); // Default

 5. Summary Table
Feature	ES5 Constructor Function	ES6 Class
Definition	function Person(...)	class Person { ... }
Methods	Person.prototype.method = ...	Define directly inside class
Inheritance	Manual with Object.create() + call()	extends + super
Static methods	Attached manually to function	static methodName()
Readability	Verbose, harder to read	Cleaner, modern

✅ Takeaway:

Both work the same internally (classes are just syntactic sugar).

ES6 class makes OOP simpler, cleaner, and easier to maintain.