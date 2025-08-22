

 for (i = 0; i<= 5; i++){
    console.log(i);
}


//for (initialization; condition; increament/decreament) : for loops
// initialize ; if (condition) {code if true}

//for, 
//for--of--in,
//forEach(),
// while, do while


 const products = ['chair', 'table', 'cupbord', 'wardrobe' ];
//for fixed repeatitions, loop through the code
for (i=0; i<products.length; i++){
    // console.log(products[i]);
    console.log(`item ${i+1}: ${products[i]}`);
}



//while (condition){code if condition is true ; increment/decrement}


let stock = 20
while (stock>0){
    console.log (`selling item -- stock left is ${stock}`);
stock--; 
}


let order;
let totalStock = 1000


// do{
//     order =prompt(`enter order (available stock is ${totalStock}):`)
// }while (stock>0);
// // while (order > total)
//     {
//     alert (`your oder has been recieved`)

// }

let payment;
let totalDue = 500000;


do{
    payment = Number(prompt(`enter order (available stock is ${totalStock}):`));
}while (payment < totalDue);
    
alert (`your payment has been recieved`)



//do { code to be executed at least once before iteration}
//while (condition)

// let i = 0;
// do {

// console.log(i)
// i++;
// }while (i<=5)




//for of loop
    const itemsSold = [ 'chair','table','cupboard'];
    //for fixed repeatition, loop through the code
    for( const item of itemsSold){
        console.log(`sold ${item}`);
    }



// const  sale = {
//         customer: 'jennifer',
//         product: 'chair',
//         quantity: 5,
//         price: 10000,
//     }

//     //for in loop
// for (
//     const key in sale){
//         console.log(`${key}:${sale[key]}`)
//     }






//a button that runs a while loop, a  for loop and a do-while loop 
//for loop: fixed repitons, loop through
//Sytax
// for (initialization; condition; increment/decrement) {
//   // code to run in each loop iteration
// } 

//  let text = " "
// for (let i = 0; i < 5; i++) {
//   text += "Number" + i + "\n"; //"\n" means a new line
// }
// console.log(text);

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// };

//for, for---of, for---in, forEach(), while, do while

// products = ["chair", "table", "cupboard", "sofa"]
// for(i = 0; i < products.length; i++) {
//     console.log(` ${i + 1} : ${products[i]}`)
// }

//while loop
/*
syntax
while (condition) {
code to run as conditon is true
}
*/

// let stock = 70;
// while (stock>0) {
//     console.log(`Selling item -- Stock left ${stock}`);
//     stock--;
// }

//do while
// syntax
// do {
//   // code to run at least once
// } while (condition);

// let order
// let totalStock = 1000;
// do {
// order = prompt(Enter order (Availabe stock) is ${totalStock})
// } while (order > totalStock);

//     window.alert("Your order has been recieved");

// let payment;
// let totalDue = 150000;
// do {
// payment = Number(prompt(Enter payment (Total UGX) is : ${totalStock}));
// } while (payment > totalDue);

//     window.alert('Your payment has been recieved');

// let x = 0;
// do {
//     console.log(x);
//     x++;
// }
// while (x <= 5);

// //we r goin' 2 create buttons that can run for loop, while loop when clicked

// //when looping through an array, use for--of loop
// const itemSold = ["chair", "closet", "sofa"];
// for(const item of itemSold) {
//     console.log(`Sold : ${item}`)
// };

// //in Objects use for--in loop
// const sale = {
//     customer: "Lincy",
//     product: "Closet",
//     quantity: 2,
//     price: 30000,
// }
// for(const key in sale) {
//     console.log(`${key} : ${sale[key]}`)
// };




