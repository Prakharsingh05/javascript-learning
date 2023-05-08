//Block scope vs Function Scope


// let and const ARE block scope
// var is function scope

{
    let firstName = "Prakhar";
}
    console.log(firstName); // error firstName is not defined


{
   var secondName = "aishwarya";
} 
    console.log(secondName); //will print becoz can be accesed from anywhere