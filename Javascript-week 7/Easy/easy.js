// var students = new Array('Joe', 'Sam', 'Bob')
// var lastName = new Array('Smith', 'Black', 'The Builder')
// var age = new Array(21, 32, 18)

// console.log(' Hello my name is ' + (students[1]) + ' ' + (lastName[1]) + ' and I am ' + (age[1]) + ' years old');

var student1 = new Array('Joe', 'Smith', 21)
var student2 = new Array('Sam', 'Black', 32)
var student3 = new Array('Bob', 'The Builder', 18)

var students = new Array(student1, student2, student3)

console.log(' Hi my name is ' + students[1][0] + ' ' + students[1][1] + ' and I am ' + students[1][2] + ' years old. ');
