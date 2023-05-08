//hoisting


hello(); // this will work even before declaring the function
function hello(){

    console.log("hello world");
}

//hello1(); // this will throw error bcoz this wont work with function exprission
//const hello1 = function(){

  //  console.log("hello world");
//}

//hello2(); // his will throw error bcoz this wont work with arrow function
//const hello2 = () =>{

  //  console.log("hello world");
//}

//all this upper behavior is called hoisting

console.log(hello3);
var hello3 ="hello world";  
