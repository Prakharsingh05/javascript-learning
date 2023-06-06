// closures
//closures



// function can return function

function outerFunction(){
    function innerFuntion(){
            console.log("hello world");
    }
    return innerFuntion;


}

var ans = outerFunction();
    
console.log(ans);
ans(); // hello world


// lets go into closures
// and analyze this code
 
function printFullName(firstName , lastName){

    function printName(){
        console.log(firstName , lastName);
    }

    return printName ;
}



