// MEDIUM: Create a node application that will read all of the planets in the solar system from a text file and print them to the console.
// Text file: mercury, venus, earth, mars, jupiter, saturn ,uranus, neptune, pluto (I still believe in you pluto) 

var fs = require('fs');
let file = fs.readFileSync('Medium/medium.text')
let str = file.toString();
  str = str.split('\n');
 console.log(str);



var fs = require('fs');
fs.readFile('Medium/medium.text', 'utf8', (error, content) => {
    if (error) {
        console.log(error);
    }
    console.log(content);
});




// var path = require("path");
// var fileName = "C:\\Python27\\ArcGIS10.2\\python.exe";
// var file = path.basename(fileName);

// console.log(file);