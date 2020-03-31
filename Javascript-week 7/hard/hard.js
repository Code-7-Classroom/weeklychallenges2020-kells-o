// Tom - 	height:  9in   	mass: 8 lbs
// Jerry - 	height: 10cm 	mass: 45 g
// var students = new Array('Joe', 'Sam', 'Bob')
// var lastName = new Array('Smith', 'Black', 'The Builder')
// var age = new Array(21, 32, 18)

// console.log(' Hello my name is ' + (students[1]) + ' ' + (lastName[1]) + ' and I am ' + (age[1]) + ' years old');

var tom = new Array('Tom', 9, 'inches', 8, 'pounds')
var jerry = new Array('Jerry', 10, 'centimeters', 45, 'grams')
var people = new Array(tom,jerry)

function convert (number, measurement) {

if (measurement === 'inches') {
    return (number/39.37);
}

else if (measurement === 'pounds') {
    return (number/2.205);
}

else if (measurement === 'centimeters') {
    return (number/100);
}

else if (measurement === 'grams') {
    return (number/1000);
}
}

function BMI (mass, height) {
    var convertMass = coonvert()
}



// HARD: Given the information below for Tom and Jerry.
//     Tom - height: 9in mass: 8 lbs
// Jerry - height: 10cm 	mass: 45 g

// Store Tom & Jerry’s mass and height as variables. 
// Calculate both their BMI’s.
// Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry.
// / Compare the BMI(Body Mass Index) of Tom & Jerry using the formula below:
// BMI = mass / height ^ 2 = mass / (height * height)
// Print a string to the console with the variable from step 3(e.g.Is Tom’s BMI higher than Jerry’s ? false).

