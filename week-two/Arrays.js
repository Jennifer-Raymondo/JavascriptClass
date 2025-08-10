//group D

// // How to create an empty array
// // How to create an array with values
// // Creating an array using split
// // Accessing array items using index
// // Modifying array element
// // Array Methods 



// //Answers
// 1.    An array is a special type of variable in JavaScript that can hold multiple values at once, instead of just one.

// Think of an array like a container or a list that stores items in a specific order.

// An array is a variable used to store multiple values in a single variable.

// example

//     let fruits = ["apple", "banana", "orange"];
//     This fruits array holds 3 items: "apple", "banana", and "orange".

// Each item in an array has a position, called an index. Indexing starts from 0:

// fruits[0] is "apple"

// fruits[1] is "banana"

// fruits[2] is "orange"

// 1. How to Create an Empty Array in JavaScript
// An empty array is an array with no elements inside it.

// There are two main ways to create an empty array 

// Using Square Brackets []

// let myArray = [];
// This is the most common and recommended method.
// It creates an array with zero items.
//  2. Using the Array Constructor
// let myArray = new Array();

// [] is a literal way to say: “create a new array.”

// new Array() tells JavaScript to create an object of type Array



// 2. how to create an array with values

// let frutes = ['banana','grapes','apple'];
// let mixedArray = [42, "hello", true, null];
// let colors = ["red", "blue", "green"];
// Arrays can hold different types of data at the same time.


// 3.Creating an array using split

//   .split() is a string method that divides a string into parts (substrings),
//  based on a separator (like a space or comma), and stores them in an array.

//     split() is a string method used to convert a string into an array by breaking it up at a specified separator.


// These are characters (in quotes) that tell JavaScript where to break the string into parts.

// Separator	  Description   	 Example String       	Output Array

// ","         	Comma	           "a,b,c"	          ["a", "b", "c"]

// " "	            Space	          "hello world"	      ["hello", "world"]

// "-"	          Hyphen/dash	      "2025-08-02"	      ["2025", "08", "02"]

// ":"	            Colon	           "12:30:45"	       ["12", "30", "45"]

// "."         	Dot/period	     "www.example.com"	    ["www", "example", "com"]

// "/"	         Forward slash	      "Jan/Feb/Mar"	        ["Jan", "Feb", "Mar"]

// ""	          Empty string       	"car"	            ["c", "a", "r"]
//               (every character)


//   Why You Use Quotation Marks in .split()
//   Yes, you should always wrap the separator inside quotation marks ("" or '') because the .split() method expects a string as a separator.

// example
// let result = "one,two,three".split(",");

// The string is "one,two,three"

// The separator is "," — which means: “split wherever you see a comma”

// That comma is a character, and characters are always written in quotes in JavaScript



// Examples
//  a. Split by Comma

// let data = "one,two,three";
// let result = data.split(",");
// console.log(result); // ["one", "two", "three"]

// b. Split by Space

// let sentence = "JavaScript is awesome";
// let words = sentence.split(" ");
// console.log(words); // ["JavaScript", "is", "awesome"]

// c. Split Every Character

// let word = "code";
// let letters = word.split("");
// console.log(letters); // ["c", "o", "d", "e"]


//  d. Date Split Example

// let date = "2025-08-02";
// let parts = date.split("-");
// console.log(parts); // ["2025", "08", "02"]


//4. Accessing Array Items Using Index
Definition:
//An index is the position number of an element in an array. In JavaScript, array indexes start from 0, meaning:

//The first item is at index 0

//The second item is at index 1

Example:


//let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]); // "Apple"  (first element)
console.log(fruits[1]); // "Banana" (second element)
console.log(fruits[2]); // "Cherry" (third element)



//5.Modifying Array Elements
Definition:
You can change an array’s item by assigning a new value to its index.

Example:

javascript
Copy code
let fruits = ["Apple", "Banana", "Cherry"];

fruits[1] = "Mango"; // Change second element
console.log(fruits); // ["Apple", "Mango", "Cherry"]

fruits[0] = "Grapes"; // Change first element
console.log(fruits); // ["Grapes", "Mango", "Cherry"]

