// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"


// function exercise(task) {
    
// console.log("Today's exercise: " + task)

// };

// var activities =['Running', 'Swimming', 'Kayaking'];

// for(var i = 0; i < activities.length; i++) {

// exercise(activities[i]);

// };


/////////////////////////////////////////////////////////////////////

function exercise (task) {
    return "Today's exercise: " + task;
}
var run = function activity(){
    return exercise('running')
}

var swim = function activity(){
    return exercise('swimming')
}

console.log(run());
console.log(swim());



