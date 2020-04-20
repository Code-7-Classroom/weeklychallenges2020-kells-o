// EASY: Using ES6 syntax, write a function that takes in an array of numbers and outputs the 
// maximum number.
// Input: [1, 2, 3]  Output: 3
// Input: [3, 6, 4, 5, 2, 1]  Output: 6
// Input: [3, 3, 3]  Output: 3


// write a function
//take an array of numbers
//find output of max number Math.max



const maxNum = (array) => {
return Math.max(...array);
}

console.log(maxNum([90, 7, 65, 3]));

