// callback function


function myFunc2(){

    console.log("inside my func 2");
}

function myFunc(callback){
    console.log("hello there");
    callback();
}

myFunc(myFunc2);
