// Creating an empty object
// Creating an objecting with values
// Getting values from an object
// Creating object methods
// Setting new key for an object
// Object Methods


// object = A collection of related properties and methods
// can represent real world objects (people, products, places)
//object = {key: value
//function}.
// //creating an empty object
let emptyObject = {};
console.log(emptyObject);

// //creating an object with values
let person = {
  firstName: "Treasure",
  lastName: "Latifah",
  age: 23,
  district: "Wakiso",
  isStudent: true,
};

person.maritalStatus = "single";
person["hobby"] = "watching movies";

console.log(person);

//getting values from an object
console.log(person.age); //dot notation
console.log(person["firstName"]); //bracket notation


// creating object methods
let person2 = {
name : "Ankunda",
classification : "man",
sayHello : function(){console.log("Hi! my name is treasure")},
}
person2.sayHello();
// let person3 = {
//   name: "Ankunda",
//   classification: "man",
//   sound: () => console.log("talks"),
// }
    
  

// person2.sound();

//     return "talks";
// }
// }
// console.log(person2.sound());

// //setting new key for an object
// person.maritalStatus = "single"; //dot notation
// person["hobby"] = "watching movies"; // bracket notation

// //object methods
let student = {
  name: "Treasure",
  level: "Beginner",
  introduce: function () {
    return `(Hi, I am ${this.name} and I am a ${this.level} JavaScript student)`;
  },
};

console.log(student.introduce());


// //how it is put in real life (your project)
// let product = {
//   name: "dresserDrawer",
//   price: 1000000,
//   inStock: true,
//   display: function () {
//     return ${this.name} costs UGX ${this.price};
//   },
// };

// console.log(product.display());