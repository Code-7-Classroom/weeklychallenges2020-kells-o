// MEDIUM: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2

//write function
//parameter w array
// get the array length
// sum up values
// get the average (sum/length)
//out put average of numbers

const average = (array) => {

 array.reduce((a,b) => a + b) / array.length;

}

console.log(average([3,2,1,5]));

