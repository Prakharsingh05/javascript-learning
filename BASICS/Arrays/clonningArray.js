//how to clone array




let array1 = ["item1" , "items2"];
let array2 = array1;
// to check two array are same
console.log(array1===array2); // will return true

// but if we make 3rd array ,and keep same values in array3 then i will return false becoz array 1 and array3 aree different

let array3 = ["item1" , "items2"];

console.log(array1===array3); // return false becoz both ahave diffrent memory location

array2.push("item3");

console.log(array1===array2);

//to clone an array but also want have diffrent locatio0n in heap then we can use slice it is method 1 

let array4 = ["one" , "two" , "three", "four"];

let array5 = array4.slice(0);// it will slice array4 from 0th index to last each element and store into array5 this will make clone of array4 into arra5 with diffrent heap location

console.log("Arrar5 = " , array5);  //[ 'one', 'two', 'three', 'four' ]
console.log("Arrar5 = " , array5); //[ 'one', 'two', 'three', 'four' ]

//let check if both are equal

console.log(array4===array5);  // will return false

//method 2 to clone array 

let array6 = [].concat(array4);

//method 3 to clone array suing spread operator

let array7 = [...array4];

// slice method is the fastest way to clone but most used is spread operator

// its extraa but amazing thing

let array8 = [...array3,...array4,...array5,...array6,...array7]; // this will add every array into new array 
console.log(array8); // ['item1', 'items2', 'one', 'two',   'three',  'four',  'one',   'two',    'three', 'four',  'one',    'two', 'three', 'four',   'one','two',   'three',  'four']



