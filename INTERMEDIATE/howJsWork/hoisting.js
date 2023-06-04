//hoisting 
 
 //printing or calling th e c=varialble b before  itd declaration hoisting can be happenn in   var type variable but not with oconst and let variable
 

console.log(firstName);
var firstName = "prakhar";

// now try this with function


console.log(myFunction);
var myFunction = function(){

    console.log("this is my Function");
}
