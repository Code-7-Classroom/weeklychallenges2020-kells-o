// VERY EASY: What is the difference between the following JavaScript keywords: var, let and const.  
// Please provide a written explanation. You are able to include a code reference along with your 
// written explanation for each keyword.







// Const => used to assign a constant value to a variable and cannot be ListeningStateChangedEvent. It is fixed.

const name = "Dylan"  
console.log(name);

name = "Lucy"  // renaming a constant variable 
console.log(name); //It won't let you change the name because you can't change a constant variable






// Let => used to declare variable just like var, but it can't be accessed outside of a block scope.
//globally - can be accessed anywhere.
//block - can only be accessed inside block
//function - can only be accessed within local scope (function scope)

let dog = "Worm" //global scope

const thing = () => {
    let dog = "bruce"; //local scope (function scope)
    console.log(dog);
};

thing(); //calls the local let dog string
console.log(dog); //will console worm because it can't see 'bruce' within local scope






// Var => declares a variable. A container that stores information. 
// globally - can be accessed anywhere
// block - can be accessed outside of block
// function - can only be accessed within local scope (function scope)

const housePet = () => {
    var hamster = "bob"
    var goat = "billy"
    console.log(hamster + " " + goat);
};

function housePet2() {
console.log(hamster + " " + goat); //hamster and goat are not defined here because they can't be reached within the local (function) scope above
};

housePet();
housePet2(); //not defined
