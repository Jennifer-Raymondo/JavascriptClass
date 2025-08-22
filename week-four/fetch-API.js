
//GROUP E

//- Fetch API (GET & POST requests)- Working with
//  JSON data- Web Storage (localStorage & sessionStorage)- 
// Combining async code with DOM updates

//1. Fetch API (GET & POST requests)

//The Fetch API allows us to request data from servers (like getting information from a database or sending form details).
//It replaces the old XMLHttpRequest and is much easier to use.

// GET request

//Used to retrieve data (e.g., fetch a list of products).

//Data is added in the URL (not hidden).

// Example: Get data from an API
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())   // convert response to JSON
  .then(data => console.log(data))     // use the data
  .catch(error => console.error("Error:", error));

// POST request

//Used to send data (e.g., sending a login form).

//Data is included in the request body (more secure).

// Example: Send data to a server
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",   // request type
  headers: { "Content-Type": "application/json" }, 
  body: JSON.stringify({ title: "My Post", body: "Hello world", userId: 1 })
})
  .then(response => response.json())
  .then(data => console.log("Success:", data))
  .catch(error => console.error("Error:", error));



//2. Working with JSON data

//JSON (JavaScript Object Notation) is a format for storing and exchanging data (like a text-based database).

//It looks like a JavaScript object but is always written in double quotes for keys & values (if string).

//Often used in APIs and databases.

//Example JSON:
{
  "name": "Jennifer",
  "age": 20,
  "skills": ["HTML", "CSS", "JavaScript"]
}

// Converting between JSON and JS object:
// JS object
//let user = { name: "Jennifer", age: 20 };

// Convert object -> JSON string
let jsonString = JSON.stringify(user);
console.log(jsonString); // {"name":"Jennifer","age":20}

// Convert JSON string -> object
let parsedData = JSON.parse(jsonString);
console.log(parsedData.name); // Jennifer

//3. Web Storage (localStorage & sessionStorage)
// localStorage

//Stores data in the browser permanently (until manually deleted).

//Useful for saving user preferences, login data, theme.

//Data does not expire after closing the browser.

// Save data
localStorage.setItem("username", "Jennifer");

// Get data
let user = localStorage.getItem("username");
console.log(user); // Jennifer

// Remove data
localStorage.removeItem("username");

//sessionStorage

//Stores data only for one browser session (gone when the tab/browser closes).

//Useful for temporary storage like shopping cart.

sessionStorage.setItem("cart", "3 items");
console.log(sessionStorage.getItem("cart")); // 3 items


// Difference:

//localStorage → Stays even after browser restart.

//sessionStorage → Disappears when tab/browser is closed.



//4. Combining async code with DOM updates

//Async code means code that runs in the background while the rest continues (non-blocking).

//Fetch requests are async → takes time to get data from the server.

//While waiting, JavaScript doesn’t stop; it continues with other tasks.

//Example: Fetch + Update DOM
// HTML
//<div id="user"></div>

<script>
  async function loadUser() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let user = await response.json();

    // Update DOM dynamically
    document.getElementById("user").innerText = `Name: ${user.name}, Email: ${user.email}`;
  }

  loadUser();
</script>



//We fetch user data (async).

//When data arrives, we update the DOM (display on page).

// Summary (Quick Notes for You)

//Fetch API → Makes HTTP requests (GET to receive, POST to send).

//JSON → Data format (easy for machines & humans). Use JSON.stringify() and JSON.parse().

//Web Storage →

localStorage = permanent

sessionStorage = temporary

//Async + DOM → Use async/await to fetch data and update the web page.