//rest parameter

function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}


myFunc(3,4,5,6,7,8,9); // a is 3
                       // b is 4
                       // c is 5,6,7,8,9



const addAll = (...numbers) => {

   let total = 0;


    for(let sum in numbers){
        total = total + numbers[sumv];
    }
    return total;

}

console.log(addAll(1,2,3,4,5,6,7,8,9));

