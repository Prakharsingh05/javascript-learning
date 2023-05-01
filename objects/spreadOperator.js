//spread operator

//normal using spread
const array1 = [1,2,3];
const array2 = [4,5,6];

const newArray = [...array1,...array2 , 67]; //[ 1, 2,  3, 4, 5, 6, 67]

console.log(newArray); 

const newArray2 = [..."123456789"]; // string will also spread bcoz it is iterable

console.log(newArray2); // ['1', '2', '3','4', '5', '6','7', '8', '9']


//spread operator in objects case

const obj1 = {

    key1 : "value1",
    key2 : "value2",
    
}

const obj2 = {

    key3 : "value3",
    key4 : "value4",
    
}

const newObject = {...obj1 , ...obj2};

console.log(newObject);






