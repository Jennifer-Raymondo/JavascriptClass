Assignment:
// String Concatenation
// Long Literal Strings
// Escape Sequences in Strings
// Template Literals (Template Strings)
// String Methods
// StringData Type (Casting)


1. //String Concatenation

//String concatenation is the process of joining two or more strings together into a single string. In JavaScript,
//  this can be done using the + operator or the += operator.

//example
let firstName = "Jennifer";
let lastName = "Brown";

// Using + operator
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: Jennifer Brown

// Using += operator
let greeting = "Hello";
greeting += " World";
console.log(greeting); // Output: Hello World



//2. Long Literal Strings – Using Backticks
//With backticks (`), you can write multi-line strings directly without using a backslash.

let longMessage = `This is a very long message
that spans multiple lines
without needing a backslash.`;

console.log(longMessage);
Output:

//This is a very long message
//that spans multiple lines
//without needing a backslash.


//3. Escape Sequences in Strings
Definition:
//Escape sequences are special characters in a string that start with a backslash (\) and have a special meaning — like creating new lines, tabs, or inserting special symbols.

Example:

let text = "Hello\nWorld"; // \n = new line
console.log(text);
/*
Output:
Hello
World
*/


4. //Template Literals (Template Strings)
Definition:
//Template literals are strings enclosed in backticks (`) that allow:

//Multi-line strings (without needing \)

//String interpolation — embedding variables or expressions directly inside the string using ${}.

Example:


let name = "Jennifer";
let age = 20;

// Multi-line string
let bio = `My name is ${name}.
I am ${age} years old.`;
console.log(bio);
/*
Output:
My name is Jennifer.
I am 25 years old.
*/


//5. String Methods
Definition:
//String methods are built-in functions in JavaScript used to manipulate and work with strings.

Example:

let message = "Hello World";

console.log(message.toUpperCase()); // "HELLO WORLD"
console.log(message.toLowerCase()); // "hello world"
console.log(message.includes("World")); // true
console.log(message.length); // 11
console.log(message.slice(0, 5)); // "Hello"
console.log(message.replace("World", "JavaScript")); // "Hello JavaScript"



//6. String Data Type (Casting)
Definition:
//Casting means converting another data type (like a number, boolean, etc.) into a string. This is done using String() or .toString().

Example:


let num = 123;
let bool = true;

let numToString = String(num);
let boolToString = bool.toString();

console.log(numToString); // "123"
console.log(typeof numToString); // string

console.log(boolToString); // "true"
console.log(typeof boolToString); // string