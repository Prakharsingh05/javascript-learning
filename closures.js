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


