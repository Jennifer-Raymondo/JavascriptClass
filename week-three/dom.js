console.log(document.title);
console.log(document.body);
console.log(document.forms);
console.log(document.links);
console.log(document.lastModified);

//D.O.M methods
let heading = document.getElementById("heading");
console.log(heading);
heading.textContent = "Welcome to Mayondo!";
heading.style.color = "Blue";

let header = document.getElementById("first");
header.innerHTML = "<h2>Quality Furniture Products</h2>";

//Events
//clicking, dragging, scrolling

//More methods
//1. document.getElementsByClassName
let paragraph = document.getElementsByClassName("long");
console.log(paragraph.length);

//2. document.getElementsByTagName
let subHeadings = document.getElementsByTagName("h2");
console.log(subHeadings);

for (let i = 0; i < subHeadings.length; i++) {
console.log(subHeadings[i]);
}

//3. document.querySelector() //works like css. Captures one by one

// let thirdTitle = document.querySelector("h3") //selects the first available element
// let thirdTitle = document.querySelector("#third-title") //selects the first available element with the class name third-title
// let thirdTitle = document.querySelector(."thirdTitle") //selects the first available element with the id name thirdTitle

//4. document.querySelectorAll()
let headingsArray = document.querySelectorAll("h2") //captures everything
headingsArray["1"].className = "container"
headingsArray["1"].id = "small-heading"

headingsArray["1"].setAttribute("class", "container")  
headingsArray["1"].setAttribute("id", "small-heading")
headingsArray[1].textContent = "Hello"
headingsArray[1].style.color = "pink"

//5. document.createElement();