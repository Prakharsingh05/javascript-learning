//primitve vs refrence type



// example of primitive type
let num1 = 6;
let num2 = num1;

console.log("value of num1 is ", num1); // 6

console.log("value of num2 is ", num2); // 6

num1++;

console.log("value of num1 is ", num1); // 7

console.log("value of num2 is ", num2); // 6


// example of refrence type
// array is an refrence type


let array1 = ["item1", "item2"];
let array2 = array1;
console.log("value of array1 is ", array1);  //[ 'item1', 'item2' ]
console.log("value of array2 is ", array2);  //[ 'item1', 'item2' ]

array1.push("item3");

console.log("value of array1 is ", array1); //[ 'item1', 'item2', 'item3' ] 
console.log("value of array2 is ", array2); //[ 'item1', 'item2', 'item3' ] becoz of refrence type it uses memore to refrence and storage is same for both


