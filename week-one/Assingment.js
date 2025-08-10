

//  2. Using the Array Constructor
// let myArray = new Array();

// [] is a literal way to say: “create a new array.”

// new Array() tells JavaScript to create an object of type Array



// //how to create an array with values

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
//  1. Split by Comma

// let data = "one,two,three";
// let result = data.split(",");
// console.log(result); // ["one", "two", "three"]

// 2. Split by Space

// let sentence = "JavaScript is awesome";
// let words = sentence.split(" ");
// console.log(words); // ["JavaScript", "is", "awesome"]

// 3. Split Every Character

// let word = "code";
// let letters = word.split("");
// console.log(letters); // ["c", "o", "d", "e"]


//  4. Date Split Example

// let date = "2025-08-02";
// let parts = date.split("-");
// console.log(parts); // ["2025", "08", "02"]






























// COMMON ARRAY METHODS

// 1. push()
// Adds a new item at the end of the array.

// let furniture = ["sofa", "table"];
// furniture.push("bed");
// console.log(furniture); // ["sofa", "table", "bed"]



// 2. pop()
// Removes the last item from the array.


// let furniture = ["sofa", "table", "bed"];
// furniture.pop();
// console.log(furniture); // ["sofa", "table"];



// 3. unshift()
// Adds a new item at the beginning of the array.


// let furniture = ["table", "bed"];
// furniture.unshift("sofa");
// console.log(furniture); // ["sofa", "table", "bed"]


// 5. length
// Returns the number of elements in the array.


// let furniture = ["sofa", "table", "bed"];
// console.log(furniture.length); // 3



// 6.indexOf()
// Returns the index of a specific item.
//  Returns -1 if not found.


// let furniture = ["sofa", "table", "bed"];
// console.log(furniture.indexOf("table")); // 1


// 7. includes()
// Checks if an item is in the array. Returns true or false.

// let furniture = ["sofa", "table", "bed"];
// console.log(furniture.includes("table")); // true



// 8. join()
// Joins all elements into a string with a separator.


// let furniture = ["sofa", "table", "bed"];
// console.log(furniture.join(", ")); // "sofa, table, bed"

// The join() method takes all the elements of an array and joins
//  them into a single string, with a separator of your choice between the elements.




// 9. reverse()
// Reverses the order of elements in place.


// let furniture = ["sofa", "table", "bed"];
// furniture.reverse();
// console.log(furniture); // ["bed", "table", "sofa"]




// 10. sort()
// Sorts the array alphabetically (by default).


// let furniture = ["sofa", "table", "bed"];
// furniture.sort();
// console.log(furniture); // ["bed", "sofa", "table"]








// question one
//group A

// String Concatenation
// Long Literal Strings
// Escape Sequences in Strings
// Template Literals (Template Strings)
// String Methods
// StringData Type (Casting)



// let quote = "jennifer said, \'Hello world\'"
// console.log(quote);

// let a = 10;
// let b = 5;
// let result = `the total is ${a + b}`;
// console.log(result);




// function greet(name){
//     return `hi ${name.toUpperCase()}!`;
// }
// let welcome = `${greet("jennifer")}`;
// console.log(welcome);





// //increment and decreament
// let z = 5; z ++;
// let y = 4; y--;
// console.log(z)
// console.log(y)

// let stockquantity = 20; stockquantity -= 2  //stockquantity--;
// console.log(`stock left is ${stockquantity}`)

 



// let productsold = 0; productsold++;
// let message = `product sold are ${productsold}`
// console.log(message)

// function recordProducts(){
//     productsold++;
// let message = `product sold are ${productsold}`
// console.log(message)
// }

// //comparision opperators

// let stock = 5;

// console.log("product is available")
// }else{
//     console.log("we are out of stock")
// }



// let stock= 5;
// let payment = 50000;
// let price = 500000;
// if (stock<0&& payment>=price){
// console.log("product is available")
// console.log("sale approved")
// }else{
//     console.log("out of stock")
//     console.log("can not process sale")
// }





// let greeting = "hello";
// // greeting += "world";
// console.log(greeting); 