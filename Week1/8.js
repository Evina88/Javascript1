//comparison between variable types.
var c=""; var d=""; 
if (c === d) {console.log("SAME TYPE");}

//declare 4 var with different types
var st="one";
var n=1;
var obj={exercise:8};
var ar= [1,12,21];
//console.log them
console.log(st);
console.log(n);
console.log(obj);
console.log(ar);
//console.log what type I think the vars are
console.log("st is a string");
console.log("n is a number");
console.log("obj is an object");
console.log("ar is an array");
//console.log+typeof to check
console.log(typeof st);
console.log(typeof n);
console.log(typeof obj);
console.log(typeof ar);
//compare with if to find SAME TYPE.Add feedback to different vars.

if (st === n) {console.log("SAME TYPE");} 
else { console.log(typeof st + " is different type than " + typeof n);};

if(n===obj) {console.log("SAME TYPE");} 
else { console.log(typeof n + " is different type than " + typeof obj);}

if(obj=ar){console.log("SAME TYPE");} 
else { console.log(typeof obj + " is different type than " + typeof arr);}

