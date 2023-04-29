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

  let age1 = 18;

  age = String(age1);
  console.log(typeof age1);

  //string concatenation

  let string1 = "prakhar";
  let string2 = "Aishwarya";

  //adding the strings

  let bothtogether = string1 + " " + string2;

  console.log(bothtogether);


 //adding number as strings
  let string11 = "40";
  let string22 = "50";

  //adding the strings 
  // just add plus before the strings as mentioned before

  let bothtogetherr = +string11 + +string22;

  console.log(bothtogetherr);


  //template strings
  
  let N_age = 20;
  let My_name = "Prakhar";

  // template sholu be as followed my name is prakhar and my age is 20

   let discription = "my name is " + My_name + " and my age is " + N_age;
   
   console.log(discription);

   //one more method to do that

   let aboutMe = `my name is ${My_name} and my age is ${N_age}`;
   console.log(aboutMe);

   // undefined == when you declare a variable but you do not asign a value to it then it is called undefined
   // it doesnt work with const variable

   let newNamel; 
   console.log(typeof newName); //undefined 

   //null == nothing;

   let myVariable = null;
    console.log(myVariable);

    console.log(typeof myVariable); // object // important bcoz this is the error/bug of javascript

    //BigInt
    console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 <<<<< BIGINT
    let myNumber = BigInt(12345678909876543212345678909876543234567890);
    let Myumber = 1235555678909876543234567212345678909876543234567890n;
    console.log(typeof Myumber);

    //booleans & comparison operator

    //booleans true or false
     let num1 = 5;
     let num2 = 8;

     console.log(num1>num2); // false
     
     // comaprision

     console.log(num1 == num2); //check only the value
     console.log(num1 === num2); //check value  with th datatype
    //not equal to
     console.log(num1!= num2) // true
     



    
    

    





