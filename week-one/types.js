let nameOf = 'fiat';
let isworking = true;
let weight 
let color = null;


console.log(typeof nameOf);     // string → because 'fiat' is text
console.log(typeof isWorking);  // boolean → because true/false are boolean values
console.log(typeof weight);     // undefined → because we declared it but didn't give it a value
console.log(typeof color);      // object → this is a known issue in JS, null is shown as object, but it's still considered a special type


// | Variable    | Value    | `typeof` result | Why?                                                           |
// | ----------- | -------- | --------------- | -------------------------------------------------------------- |
// | `nameOf`    | `'fiat'` | `string`        | It's a text enclosed in quotes                                 |
// | `isWorking` | `true`   | `boolean`       | Boolean type only has `true` or `false`                        |
// | `weight`    | -        | `undefined`     | We created it but didn't assign a value                        |
// | `color`     | `null`   | `object`        | A JavaScript quirk — null means “no value” but shows as object |




//question 5
// Declare four variables without assigning values
let brand;
let model;
let year;
let owner;


//question 6
let brand = 'Toyota';
let model = 'Corolla';
let year = 2020;
let owner = 'Jennifer';


//quwstion 7
let firstName = 'Jennifer';
let lastName = 'john';
let maritalStatus = 'Single';
let country = 'south sudanes';
let age = 20;

//quetion 8
let firstName = 'Jennifer', lastName = 'john', maritalStatus = 'Single', country = 'Uganda', age = 20;

// question 9
let myAge = 20;
let yourAge = 30;

console.log('My age is:', myAge);
console.log('Your age is:', yourAge);

// quetion 10
let nameOf = 'fiat';       // string
let isWorking = true;      // boolean
let weight;                // undefined
let color = null;          // null (typeof returns 'object')

console.log(typeof nameOf);      // string
console.log(typeof isWorking);   // boolean
console.log(typeof weight);      // undefined
console.log(typeof color);       // object











