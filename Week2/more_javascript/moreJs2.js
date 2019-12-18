
//Create an object and a function that takes the object 
//as a parameter and prints out all of its properties and values.
var object = {name:"ball", shape:"round", color:"red"};
function printOut() {
    console.log (object);
}
printOut();

// // //Create a function named vehicleType that receives a color, and a code,
// // // 1 for car, 2 for motorbike. And prints 'a blue motorbike' for 
// // //example when called as vehicleType("blue", 2)

function vehicleType(){
    var vehColor= prompt("Color of preference");
    var type= prompt ("Type 1 for car or 2 for motorbike");
(type===1) ? alert ("A " + vehColor + "car") : 
alert ("A " + vehColor + " motorbike");
}
vehicleType();

//Can you write the following without the if statement, 
//but with just as a single line with console.log(...);?
3 === 3 ? console.log("yes") : console.log("no");

