// Write a program that uses a single asynchronous filesystem operation to  
//   read a file and print the number of newlines it contains to the console  
//   (stdout), similar to running cat file | wc -l.  
   
//   The full path to the file to read will be provided as the first  
//   command-line argument.  
   
const fs = require('fs');  
const file = process.argv[2];

    fs.readFile(file, function (err, contents) {
    var lines = contents.toString().split('\n').length - 1; // \n = new line
    console.log(lines);
});






// const something = () => {

// } 

// function something () {

// }