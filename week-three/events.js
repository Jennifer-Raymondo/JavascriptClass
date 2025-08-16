//What are events? Is a triggered action by a user or browser which can result into signals, notifications e.t.c.

//Key words used in events
//1. Event listening :Click-(buttons are always watching/listening to an event)
//2. Event handling : Is that function that happens aft' listening.

//
// let button = document.getElementById("btn");   //this line is for selecting a button

// button.addEventListener("click", ()=>      //this line is for adding a function to the button
//      window.alert("You have clicked a button")
// );


// let price = document.getElementById("price").value;
// let qty =   document.getElementById("qty").value;
// let total = document.getElementById("total");
// let calcBtn = document.getElementById("calcBtn");

// function updateTotal(){
//     let cost = price * qty;
//     cost.toLocaleString();
//     total.textContent = Total: UGX  ${cost}
//     return;
// };

// calcBtn.addEventListener("click", updateTotal);    //problem: declaring price and cost outside the function
 
//correction for the above;
const form = document.getElementById("orderForm");
const furniture = document.getElementById("furniture");
const customer = document.getElementById("customer");
const total = document.getElementById("total");
const calcBtn = document.getElementById("calcBtn");
const placeOrder = document.getElementById("orderBtn");

function updateTotal() {
    const price = Number(document.getElementById("price").value);
    const qty = Number(document.getElementById("qty").value);
     
    const cost = price * qty;
    total.textContent = `Total: UGX ${cost.toLocaleString()}`;
}

qty.addEventListener("input", updateTotal);
price.addEventListener("input", updateTotal);
placeOrder.addEventListener("mouseover", updateTotal);