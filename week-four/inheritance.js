
//GROUP B


//1. Inheritance

//Inheritance means one class (child/subclass) can reuse properties and methods of another class (parent/superclass).

//Avoids repeating code and makes it easier to extend functionality.

Example:
class Furniture {
  constructor(type, material) {
    this.type = type;
    this.material = material;
  }

  describe() {
    console.log(`This is a ${this.material} ${this.type}.`);
  }
}

// Child class (inherits from Furniture)
class Chair extends Furniture {
  constructor(material, legs) {
    super("Chair", material); // call parent constructor
    this.legs = legs;
  }

  describe() {
    console.log(`This chair is made of ${this.material} and has ${this.legs} legs.`);
  }
}

let chair = new Chair("Wood", 4);
chair.describe(); // This chair is made of Wood and has 4 legs.


// Child classes can reuse parent methods or override them.




//2. Polymorphism

//Polymorphism = many forms.

//Different classes can implement the same method in different ways.

//Allows you to write flexible code that works with different types of objects.

Example:
class Animal {
  speak() {
    console.log("This animal makes a sound.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("The dog barks.");
  }
}

class Cat extends Animal {
  speak() {
    console.log("The cat meows.");
  }
}

let animals = [new Dog(), new Cat(), new Animal()];
animals.forEach(a => a.speak());

// The dog barks.
// The cat meows.
// This animal makes a sound.


//Same method (speak()), but different behaviors depending on the object.

// 3. Abstraction

//Abstraction = hiding unnecessary details and showing only the essential parts.

//In JS, abstraction is done by:

//Using methods to hide logic.

//Using abstract base classes (not directly enforced, but we can simulate).

//Using interfaces (not native in JS, but common in TypeScript).

Example:
class Payment {
  pay(amount) {
    throw new Error("This method should be overridden by subclasses");
  }
}

class CashPayment extends Payment {
  pay(amount) {
    console.log(`Paying ${amount} using cash.`);
  }
}

class CardPayment extends Payment {
  pay(amount) {
    console.log(`Paying ${amount} using card.`);
  }
}

let p1 = new CashPayment();
p1.pay(100); // Paying 100 using cash.

let p2 = new CardPayment();
p2.pay(200); // Paying 200 using card.


// Users just call pay(), without worrying about how it works inside.



// 4. Real-world OOP Examples in JavaScript

//Here’s how OOP can apply to your wood & furniture system.

Example: Stock Management
// Parent class
class StockItem {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }

  checkStock() {
    console.log(`${this.name} has ${this.quantity} items in stock.`);
  }
}

// Inheritance
class FurnitureItem extends StockItem {
  constructor(name, quantity, material) {
    super(name, quantity);
    this.material = material;
  }

  checkStock() {
    console.log(`${this.material} ${this.name}: ${this.quantity} left in stock.`);
  }
}

// Polymorphism
let items = [
  new StockItem("Nails", 500),
  new FurnitureItem("Chair", 20, "Wood")
];

items.forEach(item => item.checkStock());

// Nails has 500 items in stock.
// Wood Chair: 20 left in stock.

//xample: Delivery System with Abstraction
class Delivery {
  deliver() {
    throw new Error("Method must be implemented by subclass");
  }
}

class TruckDelivery extends Delivery {
  deliver() {
    console.log("Delivering furniture using a truck.");
  }
}

class BikeDelivery extends Delivery {
  deliver() {
    console.log("Delivering small items using a bike.");
  }
}

let deliveries = [new TruckDelivery(), new BikeDelivery()];
deliveries.forEach(d => d.deliver());

// Delivering furniture using a truck.
// Delivering small items using a bike.



//Inheritance → Child class reuses parent’s fields & methods (extends, super).

//Polymorphism → Same method, different behavior (e.g., speak() for Dog vs Cat).

//Abstraction → Hiding details, showing only essentials (base classes, abstract methods).

//Real-world JS OOP → Stock items, employees, deliveries, sales records can all be modeled with classes.