   // Use the list of vehicles to write an advertisement. 
// So that it prints something like: 
// "Amazing Joe's Garage, we service cars, motorbikes, 
//caravans and bikes.". (Hint: use a for loop.)  

function advertisement(){
    var vehType = ["motorbikes", "caravans", "bikes"];

    for (let i = 0; i < vehType.length; i++) {
        console.log("Amazing Joe's Garage, we service cars, " + 
        vehType[i] + 
        ", " + 
        vehType[i + 1] + 
        " and " + 
        vehType[i + 2] + 
        ".");
    break; 
    }
}
advertisement();

// Create an empty object.

let object = {};

// Create an object that contains the teachers that you have had so far
// for the different modules.
// Add a property to the object you just created that contains 
//the languages that they have taught you.

let teachers = [
    {name: "Zohir", languages: "Git"},
    {name: "Abed", languages: "HTML-CSS"},
    {name: "Vadim", languages: "Javascript"},
    {name: "Jonas", languages: "Javascript"}
];

    for ( let i=0; i < teachers.length; i++){

        console.log(teachers[i]);
    }   


// Write some code to test two arrays for equality using == 
//and ===. Test the following:
// What do you think will happen with x == y, x === y 
//and z == y and z == x? Prove it!

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

switch (x,y,z) {
    case x == y: console.log("true");
    break;
    case x === y: console.log("true");
    break;
    case z == y: console.log("true");
    break;
    case z == x: console.log("true");
    break;
    default: "false";
}

// Take a look at the following code:

//      let o1 = { foo: 'bar' };
//      let o2 = { foo: 'bar' };
//      let o3 = o2;
// Show that changing o2 changes o3 
//(or not) and changing o1 changes o3(or not).

let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
o2 = { foo: 'bar1'};
console.log(o3);
 
// Does the order that you assign (o3 = o2 or o2 = o3) matter?
//let o2 = 03;
console.log(o3);

 // What does the following code return? (And why?)

let bar = 42;
console.log (typeof bar);
console.log (typeof typeof bar)                 ;
// // First it takes the type of 42 as 'number' then it takes the type 
// //of 'number' as 'string'.

// // ‘Coerce' means to try to change - so coercing var k = '6' 
// // to number means trying to change the type to number temporarily.

let k = 6;
typeof typeof k;
console.log(typeof typeof k); // String!