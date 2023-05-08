// sets (it is iterables)
//store data
// stes also have its own methods
// no index - based access
// Order is not guaranteed
// unque items only (no duplicates allowed)

const numbers = new Set([1,2,3]); // syntex to make set

console.log(numbers);

//to add value in set
numbers.add(10);

console.log(numbers);

// to check value in set

if(numbers.has(1)){
    console.log("1 is present");
}else{
    console.log(numbers);
}
console.log(numbers);

//for of loop on set

for(let ietem of numbers){
    console.log(ietem);

}