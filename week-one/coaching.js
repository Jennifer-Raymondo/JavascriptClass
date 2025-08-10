
// //revision
function calculateTotalCost(quantity , unitprice){
    let totalcost = quantity*unitprice
    return totalcost
}
console.log(calculateTotalCost(5,2000))



function wantTotalPrice(){
    let quantity = 5
    let unitPrice= 2000
    let totalcost = `${quantity * unitPrice}`
    
    return totalcost
}
console.log(wantTotalPrice())

let quantity = 3

let addTotalCost = {
    quantity : 5,
    unitPrice : 2000,
    totalcost : function(){
        return this.quantity * this.unitPrice
    }
}

console.log(addTotalCost.totalcost())


let personname = {
    firstName: "jennifer",
    lastName: "john",
    space: " ",
    fullName: function(){
        return this.firstName + this.lastName

    }
}

console.log(personname.fullName())





//no.1 model a phone object 
//with properties;color,size,type
//with methods;take picture, play music, ring
//create 2 phone objects sumsang and iphone
//display the properties of the phone objects
//call the different methods of the phone objects


//no.2 model a user object 
//with properties;email, username, gender
//with methods;login, logout
//create 2 user objects Bob, Alice
//display the properties of the user objects
//call the different methods of the user objects





// let sumsung = {
//         color: "blue",
//         size: "large",
//         type: "s23",

//         takePicture: function(){
//             return this.type +  ' snap'
//         },
//         playMusic: function(){
//             return this.type + ' play + pause'
//         },
//         ring: function(){
//             return this.type + ' vibrate + sound'
//         }

// }
// console.log(sumsung.takePicture());
// console.log(sumsung.playMusic());
// console.log(sumsung.ring());

// let iphone = {
//         color: "red",
//         size: "large",
//         type: "iphone12",

//         takePicture: function(){
//             return this.type +  ' click and shoot'
//         },
//         playMusic: function(){
//             return this.type + ' music is playing'
//         },
//         ring: function(){
//             return this.type + ' rington'
//         }

// }
// console.log(iphone.takePicture());
// console.log(iphone.playMusic());
// console.log(iphone.ring());

//combined function for phone
function createPhone(color,size,type){
    return{
        color: color,
        size: size,
        type:type,
        takePicture: function(){
            return this.type + ' click + snap'
        },
        playMusic: function(){
            return this.type + ' play + pause'
        },
        ring:function(){
            return this.type + ' ringing'
        },
    }
}
let sumsung = createPhone("blue","large","s23");
let iphone = createPhone("gray","large","iphon12");
console.log(sumsung.takePicture());
console.log(sumsung.playMusic());
console.log(sumsung.ring());



// let Bob = {
//         email: "bobjohn@gmail.com",
//         userName: "BobOne",
//         gender: "male",

//         login: function(){
//             return this.userName +  ' welcome'
//         },
//         logout: function(){
//             return this.userName + ' goodBye'
//         },
//         }
// console.log(Bob.login());
// console.log(Bob.logout());




// let Alice = {
//         email: "alicehellen@gmail.com",
//         userName: "AliceHellen",
//         gender: "female",

//         login: function(){
//             return this.userName +  ' welcome'
//         },
//         logout: function(){
//             return this.userName + ' goodBye'
//         },
//         }
// console.log(Alice.login());
// console.log(Alice.logout());

// //combined function
// function addUser (email, userName,gender){
// return{
//     email:email,
//     userName:userName,
//     gender:gender,
//     login:function(){
//         return this.userName + ' welcome'
//     },
//     logout:function(){
//         return this.userName + ' goodbye'
//     },
// }
// }
// let Bobone = addUser( "bobjohn@gmail.com","BobOne","male");
// let Aliceone = addUser("alicehellen@gmail.com", "AliceHellen","female");

// console.log("addUser:",Bobone);
// console.log(Bobone.login);
// console.log(Bobone.logout);
// console.log("addUser:",Aliceone);
// console.log(Aliceone.login);
// console.log(Aliceone.logout);





//no.1 Create a function to create a user object 
//no.2 Create three users using the function
//no.3 Logout the properties of each user object
//no.4 Call the methods of each user object


function createUser (userName,email,gender){        //parameters
    return {
userName: userName,
email: email,
gender:gender,

login: function(){
return this.userName + ' welcome'

},
logOut: function(){
    return this.userName + ' goodbye'
}
    }

}
let userOne = createUser("jennifer","jennifer@gmail.com","female")
console.log(userOne.login());
console.log(userOne.logOut());
console.log(userOne.email,userOne.gender); //we dont put parenthesis inside this console.log because this are properties we only put them in methods

let userTwo = createUser( "Becky","becky@gmail.com","female")
console.log(userTwo.login());
console.log(userTwo.logOut());
console.log(userTwo.email,userOne.gender);

let userThree = createUser("poul","poul@gmail.com","male")
console.log(userThree.login());
console.log(userThree.logOut());
console.log(userThree.email,userThree.gender);

//1.findout the differencess btn function declarations and function expressions
//2.what are the limitatoins of using functions expressions over function declarations
//3.addavtages of using function expressions  over function declations

answers
//guestion one
//A Function Declaration defines a named function using the function keyword at the top level of your code.

function functionName(parameters) {
  // code to run
}


function sayHello() {
  console.log("Hello, world!");
}


//A Function Expression is when a function is assigned to a variable (or constant).

const functionName = function(parameters) {
  // code to run
};

const sayHello = function () {
  console.log("Hello, world!");
};

//Or using Arrow Functions (a modern version of function expressions):

const sayHello = () => {
  console.log("Hello, world!");
};

// the main differences are that function declarations are hoisted and must have names, 
// while function expressions are not hoisted and can be anonymous. Function declarations
//  are ideal for defining reusable functions across your code, whereas function expressions 
//  are more suitable for dynamic or one-time use, such as in callbacks or event handlers.


///question two
// 1. Hoisting Limitation
// Function Declarations are hoisted completely — meaning you can call them before they are defined in the code.

function sayHello() {
  console.log("Hello!");
}

// Function Expressions, especially with const or let, are not hoisted the same way. You cannot call them 
// before the line they are defined on.

const greet = function () {
  console.log("Hi!");
};
//2. No Name (if Anonymous)
//Many function expressions are anonymous, which makes debugging errors harder because stack traces don't show a function name.

// 3. Self-reference (Recursion)
//Function declarations can easily refer to themselves . But if you use an anonymous function expression, self-reference is harder
//  unless you name it manually.

//4. Code Organization and Readability
//Function declarations keep code clean and easier to organize at the top of files. Function expressions scattered inside code blocks may
//  reduce readability and make maintenance harder.


//question three
// 1. Better Control of Scope and Timing
//Function expressions are not hoisted like declarations, meaning they are only available after the line they're defined on.
//  This gives you better control over when and where the function can be used, helping avoid bugs from calling a function too early.


//2. Great with Arrow Functions
//Arrow functions are a type of function expression and provide a cleaner, shorter syntax:


const greet = () => console.log("Hi!");

//Arrow functions also do not have their own "this", making them useful inside classes and event handlers.

//3.More Flexible for Functional Programming
// Function expressions allow you to treat functions as first-class citizens:

// Pass them around like variables

// Return them from other functions

// Assign dynamically

// This is a key strength for modern JavaScript techniques.

// 4. Can Be Stored in Variables or Objects
// Function expressions can be assigned to:

// Variables

// Object properties

// Arrays

const calculator = {
  add: function (a, b) {
    return a + b;
  },
};



