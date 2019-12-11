let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
//Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
favoriteAnimals.push ("turtle");

//Log your new array!
console.log (favoriteAnimals);

//add 'meerkat',placed after 'blowfish' and before 'capricorn'.
insertAtIndex = 1;
stringToBeInserted = ('meerkat');
favoriteAnimals.splice( insertAtIndex, 0, stringToBeInserted );

//console.log what value I believe it has now
console.log ("I believe that the string meerkat is added between blowfish and capricorn");

//console.log to check
console.log (favoriteAnimals);

//Log the length of the array, add a message: 'The array has a length of: '
//(here you should show the length of the array).
var favoriteAnimalsLenght = favoriteAnimals.length;
console.log ("The array has a lenght of " + favoriteAnimalsLenght);

//delete "girafee"
favoriteAnimals.splice (3,1);

//console.log to check
console.log (favoriteAnimals);

//find meerkat index
var meerkat = favoriteAnimals.indexOf("meerkat");

//console.log to check
console.log ("The item you are looking for is at index: " 
+ favoriteAnimals.indexOf("meerkat"));
