//intro to arrays
//its is ordere collection dataitems

let fruits = ["apple", "mango" , "grapes"]; // its a array of strings
let numbers = [1,2,3,4,5] // array of a numbers
let mixed = [1,2,3,4,5 , "strings" , null , undefined] // mixxed array 

console.log(mixed);
console.log(numbers);
console.log(fruits);

console.log(fruits[0]); // accessing single dataotem from an array
//replacing ittems in array
let fruit2 = ["apple", "banana"  ,"amngo" , "papita"];

console.log(fruit2);

fruit2[1]="kela"; // becoz  arrays are mutable

console.log(fruit2);

// refrence type in javascript are called object we can say that array is an object

//to check given datatype is array


console.log(Array.isArray(fruit2)); // will return true

//to add an element in an array use push

fruit2.push("prakar"); // ads element in the last
console.log(fruit2);
fruit2.pop();// remove the last element from the last and it also return the last element
console.log(fruit2);
// objects



let obj = {}; // object literal







///refrence type