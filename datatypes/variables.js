//"use strict";
//intro to variables 

//variables can store some information 
//we can use that information later
//we can change that information later

// declaring a string variable

//var firstName =  "Prakhar singh";

//printing the variable using variable name
//document.write(firstName);

// changing the variable

//firstName = "Prakhyat  singhal";

//document.write(firstName);

//both the name will print one time


//let keywords 

//let secondName = "Aishwarya soni";
//document.write(secondName);

// block scope vs function scope make difference in var vs let 


//declare constants

//const pi = 3.14;

//
 //string indexing 
  //let firstName = "Prakhar singh";

  //document.write(firstName[0]); // will print P
  //document.write(firstName[0]); // will print r
  //document.write(firstName[0]); // will print a

  // last index = length -1;


  // to find the length

  //document.write(firstName.length);

  // strings method

  let nameName = "     Prakhar singh    ";


  console.log(nameName.length);
    
  // to remove spaces

  let newString = nameName.trim( );
  
  console.log(newString.length);

  // more methods are there check on mdn documentation

  // types of operator

  //data types(primitive data types)
  //String
  //number
  //booleans
  //uindefined
  //undefined
  //null
  //BigInt
  //symbol
  


  //to ceck the datatype
  let age = 22;
  let nameee = "aishwarya";
  console.log(typeof age);  //number
  console.log(typeof nameee);  //string





  //convert number to string
 // adding empty string to a number changes its datatype to string
  console.log(typeof (age + " "));




  //convert string to number
  //adding plus before string makes it a number
  let str = +"34";
  console.log(typeof str);

  //one more method to change number to string vice versa 

