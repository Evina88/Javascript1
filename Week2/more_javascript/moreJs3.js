//Create a function called vehicle, like before, but takes 
//another parameter called age, so that vehicle("blue", 1, 5) 
//prints 'a blue used car'function vehicleType2(){
    function vehicleType2() {
        var vehColor= prompt("Color of preference");
        var age= prompt("Age");
        var type= prompt("Type 1 for car or 2 for motorbike");

        var age = (age < 5) ? " new " : " used ";
    type==1 ? alert ("A " + vehColor + age + "car") : 
    alert ("A " + vehColor + age + "motorbike");
     }
    vehicleType2();
    
    
    //Make a list of vehicles, you can add "motorbike", 
    //"caravan", "bike", or more.
    
    var vehList = ["motorbike", "caravan", "bike"];
    
    //Get the third element from that list
    
    console.log (vehList[2]);