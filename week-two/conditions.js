
//TYPES OF CONTROL FLOW STATEMENT

//conditional statements for decicion making
//if statement
//if-else statement
//if-elese-if-else chain
//nested if statment
//switch statement
//tenary operator
//if statement with logical operatores in conditions


//write if someone is an adult to be allowed to vote

// let age = prompt("please enter your age: ")
//  age = Number(age);
 
// if (age >=18) {
// window.alert("you are an adult, you can vote!")
// }else{
//     window.alert("you are a minor, you can't vote")
// }


//switch statement

// switch(expression){
//     case value1:
//         //write code for when expression is === value1
//         break
//         case 2:
//             //code
//             break
//             case 3:
//                 //code
//                 default:
//                     //write code when none of the code matches

// }
// switch(expression){
//     case value1:
//         //write code for when expression is === value1
//         break
//         case value2:
//             //code for when expression is === value2
//             break
//             case value3:
//                 //code for when expression is === value3
//                 default:
//                     //write code when none of the code matches

// }

// let paymentType = prompt("enter payment method:(cash, mobile money, bank) ")
// switch(expression){
//     case "cash":
//         window.alert("process cash payments on the counter")
//         //write code for when expression is === value1
//         break;
//         case "mobilemoney":
//             window.alert("verify your phone details before delivery")
//             //code for when expression is === value2
//             break;
//             case "bank":
//                 window.alert("confirm before proceding")
//                 //code for when expression is === value3
//                 default:

//                     //write code when none of the code matches
// }

// //if wood store in house
// //if it is furniture display in warehouse
// let product = prompt("enter product type:(wood or furniture)")
// switch(product){
//     case "wood":
//         alert("please store in wirehouse")
//         //write code for when expression is === value1
//         break;
//         case "furniture":
//             alert("you can see it from showroom")
//             //code for when expression is === value2
//             break;
//             case "bank":
//                 alert("confirm before proceding")
//                 //code for when expression is === value3
//                 default:
//                   alert("please enter valid product type")
//                     //write code when none of the code matches
// }
// //check discount
// //regular no discount
// //wholesale 15%
// //vip 10%
// //how can we use the switch to control stock


// let number = prompt("enter number:")
// switch(true){
//     case number > 0:
//         alert("number is positive")
//         //write code for when expression is === value1
//         break;
//         case number = 0:
//             alert("number is zero")
//             //code for when expression is === value2
//             break;
//             case number < 0:
//                 alert("number is negative")
//                 //code for when expression is === value3
//                 default:
//                   alert("please enter valid product type")
//                     //write code when none of the code matches
// }

let stockCount = Number(prompt("enter number of products(wood, furniture)that you want:"));
console.log("typeof stockCount: ",typeof stockCount);
switch(true){
    case stockCount > 10:
        alert("this poduct is in plenty")
        //write code for when expression is === value1
        break;
        case stockCount > 0 && stockCount <=10:
            alert("we are low in stock reorder soon")
            //code for when expression is === value2
            break;
            case stockCount == 0:
                alert("we are out of stock")
                //code for when expression is === value3
                default:
                  alert("invalid product")
                    //write code when none of the code matches
}

//document object model a way of handling html css and js
//






//tenary conditions
//condition
//? valueIftrue
//:valueIffalse

let stock = 5
let message = stock>0 ? "in stock": "out of stock!";
console.log (message);
