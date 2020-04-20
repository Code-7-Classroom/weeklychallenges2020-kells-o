// VERY HARD: Write a function that takes in a string and outputs the *first* occurrence of a 
// character that does not repeat itself in that string. Output the first character in a string that is unique.
// Input: “the quick brown fox jumps over the calm kitten quietly”  Output: “b”
// Input: “this hat is the greatest!”  Output: “g”
// Input: “what a wonderful day it has been!”  Output: “o”

var str = "the quick brown fox jumps over the calm kitten quietly";
 for (var i = 0; i < str.length; i++ ){
     if (str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))){
         console.log(str.charAt(i));
         break;
     }
 }
 var strOne = "this hat is the greatest";
 for (var i = 0; i < strOne.length; i++ ){
     if (strOne.indexOf(strOne.charAt(i)) == strOne.lastIndexOf(strOne.charAt(i))){
         console.log(strOne.charAt(i));
         break;
     }
 }
 var strTwo = "what a wonderful day it has been";
 for (var i = 0; i < strTwo.length; i++ ){
     if (strTwo.indexOf(strTwo.charAt(i)) == strTwo.lastIndexOf(strTwo.charAt(i))){
         console.log(strTwo.charAt(i));
         break;
     }
 }


// look up .classList
// w3schools.com/jsref/prop_element_classlist.asp

