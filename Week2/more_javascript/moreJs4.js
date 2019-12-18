//Change the function vehicle to use the list of question 7. So that 
//vehicle("green", 3, 1) prints "a green new bike".
function vehicleType3(){
    var vehColor= prompt("Color of preference");
    var age= prompt("Age");
    var type= prompt ("1 for bike, 2 for caravan, 3 for motorbike");

    var age = (age < 5) ? " new " : " used ";
    var vehList = ["motorbike", "caravan", "bike"];
     if (type==1) {alert ("A " + vehColor + age + vehList[2]);
     } else if (type==2) {alert ("A " + vehColor + age + vehList[1]);
    } else if (type==3) {alert ("A " + vehColor + age + vehList[0]);}
}        
vehicleType3();

