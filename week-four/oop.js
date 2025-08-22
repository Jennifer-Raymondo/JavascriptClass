
//Group A

//1. Introduction to OOP in JavaScript

//OOP (Object-Oriented Programming) is a way of writing code where you organize it into objects.

//Each object represents a real-world thing with:

//Attributes (fields/properties) → What it has.

//Methods (functions/behaviors) → What it can do.

// Why use OOP?

//Makes code organized and reusable.

//Easier to model real-world things (like furniture, stock items, employees).

//Easier to extend with new features.




// 2. Classes & Objects

//A class is a blueprint (like a plan or mold).

//An object is an instance (a real thing created from the class).

Example:
// Class = blueprint
class Furniture {
  constructor(type, material) {
    this.type = type;       // attribute
    this.material = material; // attribute
  }

  describe() {
    console.log(`This is a ${this.material} ${this.type}.`);
  }
}

// Object = instance of class
let chair = new Furniture("Chair", "Wood");
let table = new Furniture("Table", "Metal");

chair.describe(); // This is a Wood Chair.
table.describe(); // This is a Metal Table.


// Classes → define the structure.
// Objects → real examples created using new.

// 3. Attributes (Fields) and Methods (Behaviors)

//Attributes (Fields): Store data/properties of an object.

//Methods (Behaviors): Functions inside a class that describe actions.

Example:
class Employee {
  constructor(name, role) {
    this.name = name;   // attribute
    this.role = role;   // attribute
  }

  work() {             // method
    console.log(`${this.name} is working as a ${this.role}.`);
  }
}

let emp1 = new Employee("Alice", "Carpenter");
emp1.work(); // Alice is working as a Carpenter.

// 4. Encapsulation

//Encapsulation = hiding internal details and only exposing what’s necessary.

//In JavaScript classes, we can use:

//Public fields → accessible everywhere.

//Private fields (with #) → hidden from outside.

Example:
class BankAccount {
  #balance = 0;  // private field (cannot be accessed outside)

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
    }
  }

  getBalance() {
    return this.#balance;
  }
}

let acc = new BankAccount("John");
acc.deposit(100);       // Deposited 100. New balance: 100
console.log(acc.getBalance()); // 100
console.log(acc.#balance);     // ❌ Error: private field


// Encapsulation keeps sensitive data safe and only exposes what we need (via methods).


//OOP in JS: Organize code into objects.

//Classes: Blueprints for creating objects.

//Objects: Instances created from classes.

//Attributes (Fields): Variables inside classes (what it has).

//Methods (Behaviors): Functions inside classes (what it can do).

//Encapsulation: Hiding details (use # for private fields).

class person{
    constructor(firstName,lastName){
        firstName = firstName
        lastName =  lastName
    }
}

const person1 = new Person()
console.log(person1)

class furniture(
    constructor (prodoctName,price,stock){
    this.prodoctName= prodoctName;
    this.price = price;
    this.stock;
});
 sell(){
    console.log(`sold: ${this.stock})`);
 }

//inherit using the keyword extends
class chair extends furniture{
    constructor(prodoctName,price,stock){
    super(productName,price,stock);
this.material = this.material; //additional characteristic
    };

showMterial(){
    console.log(`${this.productName}`made of ${this.material}) 
}

}


