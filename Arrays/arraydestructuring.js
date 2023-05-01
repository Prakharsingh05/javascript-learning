// ARRAY DESTRUCTURING
/*
Array destructuring is a feature in JavaScript that allows you to extract values from an array and assign them to variables in a more concise way.
 It simplifies the process of accessing and working with values within an array.
To destructure an array in JavaScript, you use the destructuring assignment syntax, which uses square brackets and the assignment operator */

 // normal method for destructuring
const myArray = ["value1" ,"value2"];

let myvar1 = myArray[0];
let myvar2 = myArray[1];

console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2); // these method of assigning array 'value to individual variable is right but javascript has some better shortcut


let [myVar3, myVar4] = myArray;







