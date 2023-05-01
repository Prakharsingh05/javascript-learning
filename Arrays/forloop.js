//for loop in array

let fruit = ["apple" , "mango" , "grapes" , "Santra" ];

for(let i = 0; i<=fruit.length-1; i++){
    console.log(fruit[i]);
    console.log(fruit[i].toUpperCase());
}

//using const to create array;  becoz const cannot be asssigned again

const fruit2 = ["apple" , "mango"];

fruit2.push("banana");
console.log(fruit2);
