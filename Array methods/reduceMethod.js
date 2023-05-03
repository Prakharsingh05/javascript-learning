//reduce method


const numbers = [1,2,3,4,5];


//aim : some of all the numbers in the Array

const sum = numbers.reduce((accumulator, currentValue)=>{

    return accumulator+currentValue;
})
console.log(sum);