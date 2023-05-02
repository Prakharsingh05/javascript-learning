
// basic fucntion

function singHappyBirthday(){

    console.log("happy birthdaay to you..");



}

singHappyBirthday();


// function sumtwonumber

function sumTwoNumber( val1 , val2){

    return val1 + val2;
}

const returnedValue = sumTwoNumber(4 , 5);
console.log(returnedValue);


//or or even  
// input : 1 number;

function oddOrEven(num){
    if(num%2==0){
        return "even";
    }else{
        return"odd";

    }
}


let returnedValue1 = oddOrEven(5);
console.log(returnedValue1);